import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const industries = [
  { key: "legal", name: "Legal", desc: "Contracts, cases, memos", badges: ["SOC2", "HIPAA"] },
  { key: "healthcare", name: "Healthcare", desc: "Clinical docs, policies", badges: ["HIPAA"] },
  { key: "finance", name: "Finance", desc: "Reports, K-1s, audits", badges: ["SOC2"] },
  { key: "pro", name: "Professional Services", desc: "Proposals, SOWs", badges: ["SOC2"] },
];

const models = [
  { tier: "Good", name: "LLaMA 3 8B", price: 200, speed: "Fast", accuracy: "Good", use: "Basic Q&A, summaries" },
  { tier: "Better", name: "LLaMA 3 70B", price: 800, speed: "Medium", accuracy: "Great", use: "Analysis, drafting" },
  { tier: "Best", name: "LLaMA 3 405B", price: 2000, speed: "Slower", accuracy: "Excellent", use: "Complex reasoning" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [modelIdx, setModelIdx] = useState(0);
  const [questions, setQuestions] = useState(500);
  const [pages, setPages] = useState(200);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("us-east");

  const model = models[modelIdx];
  const est = Math.round(model.price + questions * 0.002 + pages * 0.01);

  return (
    <>
      <Seo title="Onboarding – BlueFlow AI" description="Get set up in minutes. Choose your industry, model, and cloud region to start using BlueFlow AI." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Get Started in 5 Minutes</h1>
        <p className="text-muted-foreground">Professional blue-and-white experience, built for business users.</p>
      </header>

      {step === 1 && (
        <section aria-labelledby="industry" className="grid md:grid-cols-2 gap-6">
          <h2 id="industry" className="sr-only">Choose your industry</h2>
          {industries.map((i) => (
            <Card key={i.key} className={industry === i.key ? "ring-2 ring-primary" : ""}>
              <CardHeader>
                <CardTitle>{i.name}</CardTitle>
                <CardDescription>{i.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex gap-2">
                  {i.badges.map((b) => (
                    <span key={b} className="text-xs px-2 py-1 rounded bg-accent">{b}</span>
                  ))}
                </div>
                <Button variant={industry === i.key ? "hero" : "secondary"} onClick={() => setIndustry(i.key)}>Select</Button>
              </CardContent>
            </Card>
          ))}
          <div className="col-span-full flex justify-end">
            <Button variant="hero" disabled={!industry} onClick={() => setStep(2)}>Continue</Button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section aria-labelledby="model" className="space-y-6">
          <h2 id="model" className="text-xl font-semibold">Pick Your Model</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {models.map((m, idx) => (
              <Card key={m.name} className={modelIdx === idx ? "ring-2 ring-primary" : ""}>
                <CardHeader>
                  <CardTitle>{m.tier}</CardTitle>
                  <CardDescription>{m.name} — ${m.price}/month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Speed:</strong> {m.speed}</p>
                  <p className="text-sm"><strong>Accuracy:</strong> {m.accuracy}</p>
                  <p className="text-sm"><strong>Great for:</strong> {m.use}</p>
                  <Button variant={modelIdx === idx ? "hero" : "secondary"} onClick={() => setModelIdx(idx)}>Select</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Estimated Questions per Month</CardTitle>
                <CardDescription>Adjust to see cost estimate</CardDescription>
              </CardHeader>
              <CardContent>
                <input aria-label="questions" type="range" min={0} max={5000} value={questions} onChange={(e) => setQuestions(parseInt(e.target.value))} className="w-full" />
                <p className="mt-2 text-sm text-muted-foreground">{questions} questions/month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pages Processed per Month</CardTitle>
                <CardDescription>Batch uploads included</CardDescription>
              </CardHeader>
              <CardContent>
                <input aria-label="pages" type="range" min={0} max={10000} value={pages} onChange={(e) => setPages(parseInt(e.target.value))} className="w-full" />
                <p className="mt-2 text-sm text-muted-foreground">{pages} pages/month</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Estimated Monthly Cost</CardTitle>
              <CardDescription>Based on your model and usage</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-2xl font-semibold">~${est}/month</p>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button variant="hero" onClick={() => setStep(3)}>Continue</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {step === 3 && (
        <section aria-labelledby="setup" className="space-y-6">
          <h2 id="setup" className="text-xl font-semibold">Cloud Setup</h2>
          <Card>
            <CardHeader>
              <CardTitle>We’ll handle the technical setup</CardTitle>
              <CardDescription>Just provide a few details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid md:grid-cols-3 gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                <label className="grid gap-2">
                  <span className="text-sm">Company name</span>
                  <input className="rounded-md border bg-background px-3 py-2" value={company} onChange={(e) => setCompany(e.target.value)} required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm">Admin email</span>
                  <input type="email" className="rounded-md border bg-background px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm">Region</span>
                  <select className="rounded-md border bg-background px-3 py-2" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="us-east">US East</option>
                    <option value="us-west">US West</option>
                    <option value="eu-west">EU West</option>
                    <option value="ap-southeast">AP Southeast</option>
                  </select>
                </label>
                <div className="md:col-span-3 flex justify-between items-center pt-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(2)}>Back</Button>
                  <Button type="submit" variant="hero">Finish & Go to Dashboard</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      )}
    </>
  );
}
