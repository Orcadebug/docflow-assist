import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Settings() {
  const [company, setCompany] = useState("BlueFlow");
  const [region, setRegion] = useState("us-east");

  return (
    <>
      <Seo title="Settings – BlueFlow AI" description="Manage company profile, region preferences, and product configuration." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Company</CardTitle>
            <CardDescription>Profile & Region</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <label className="grid gap-2">
                <span className="text-sm">Company name</span>
                <input className="rounded-md border bg-background px-3 py-2" value={company} onChange={(e) => setCompany(e.target.value)} />
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
              <div className="md:col-span-2">
                <Button variant="hero" type="submit">Save</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
