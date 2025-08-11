import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Upload, Bot, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Seo title="AI Workflow Dashboard – BlueFlow AI" description="Monitor usage, see recent activity, and jump into documents, chat, and workflows." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <section aria-label="Usage" className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Documents Processed</CardTitle>
            <CardDescription>Total this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1,248</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Questions Asked</CardTitle>
            <CardDescription>Total this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">2,847</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cost</CardTitle>
            <CardDescription>Estimated this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$1,247</p>
          </CardContent>
        </Card>
      </section>
      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Quick actions</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild variant="hero"><Link to="/documents"><Upload className="mr-2" /> Upload Documents</Link></Button>
            <Button asChild variant="secondary"><Link to="/assistant"><Bot className="mr-2" /> Ask a Question</Link></Button>
            <Button asChild variant="secondary"><Link to="/workflows"><Workflow className="mr-2" /> Create Workflow</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li>✓ Summarized "Smith vs. Jones" case</li>
              <li>✓ Uploaded 12 documents to Contracts</li>
              <li>✓ Generated weekly case review report</li>
              <li>✓ Invited sarah@company.com (Viewer)</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
