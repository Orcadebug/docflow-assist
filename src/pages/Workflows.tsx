import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  { name: "New Document → Summarize → Email Team" },
  { name: "Contract Upload → Extract Terms → Update Database" },
  { name: "Daily Case Review → Generate Report → Slack Alert" },
];

export default function Workflows() {
  return (
    <>
      <Seo title="Workflow Builder – BlueFlow AI" description="Design drag-and-drop automations connecting triggers and actions." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Workflows</h1>
      </header>
      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Templates</CardTitle>
            <CardDescription>Start from a best practice</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {templates.map((t) => (
              <div key={t.name} className="flex items-center justify-between rounded-lg border p-3">
                <span>{t.name}</span>
                <Button variant="secondary">Use Template</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Designer</CardTitle>
            <CardDescription>Drag nodes, connect steps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[360px] rounded-lg border bg-accent/40 grid place-items-center text-sm text-muted-foreground">
              Visual editor coming soon – triggers ➜ actions ➜ outputs
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
