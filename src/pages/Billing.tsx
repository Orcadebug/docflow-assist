import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", cost: 120 },
  { day: "Tue", cost: 180 },
  { day: "Wed", cost: 210 },
  { day: "Thu", cost: 160 },
  { day: "Fri", cost: 240 },
  { day: "Sat", cost: 210 },
  { day: "Sun", cost: 127 },
];

export default function Billing() {
  return (
    <>
      <Seo title="Usage & Billing – BlueFlow AI" description="Transparent cost breakdown with daily usage graphs and invoice history." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Usage & Billing</h1>
      </header>
      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cost This Week</CardTitle>
            <CardDescription>Daily totals</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Line type="monotone" dataKey="cost" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>At a glance</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Questions</div>
              <div className="text-2xl font-semibold">2,847</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Documents</div>
              <div className="text-2xl font-semibold">1,248</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Cost (month)</div>
              <div className="text-2xl font-semibold">$1,247</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Alert</div>
              <div className="text-2xl font-semibold">80% usage</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoice History</CardTitle>
            <CardDescription>Download receipts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>July 2025 — $1,247 — Paid</li>
              <li>June 2025 — $1,102 — Paid</li>
              <li>May 2025 — $1,085 — Paid</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
