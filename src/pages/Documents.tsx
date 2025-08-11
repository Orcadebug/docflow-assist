import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

interface DocItem {
  id: string;
  name: string;
  type: string;
  status: "Analyzing" | "Indexing" | "Ready";
}

export default function Documents() {
  const [docs, setDocs] = useState<DocItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const items: DocItem[] = Array.from(files).map((f, idx) => ({
      id: `${Date.now()}-${idx}`,
      name: f.name,
      type: f.name.split('.').pop() || 'file',
      status: "Analyzing",
    }));
    setDocs((prev) => [...items, ...prev]);
    // Simulate progress
    setTimeout(() => setDocs((prev) => prev.map(d => d.status === 'Analyzing' ? { ...d, status: 'Indexing' } : d)), 1500);
    setTimeout(() => setDocs((prev) => prev.map(d => d.status === 'Indexing' ? { ...d, status: 'Ready' } : d)), 3500);
  };

  return (
    <>
      <Seo title="Document Management – BlueFlow AI" description="Upload, categorize, and search your legal and business documents with AI." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
      </header>

      <section className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upload</CardTitle>
            <CardDescription>Drag and drop or choose files</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); onFiles(e.dataTransfer.files); }}
              className="border-2 border-dashed rounded-lg p-8 text-center bg-accent/50"
              role="region"
              aria-label="Upload dropzone"
            >
              <p className="mb-4">Drop legal documents here</p>
              <div className="flex justify-center gap-3">
                <Button variant="hero" onClick={() => inputRef.current?.click()}>Choose Files</Button>
                <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Smart Filters</CardTitle>
            <CardDescription>Quickly narrow results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <select className="w-full rounded-md border bg-background px-3 py-2">
              <option>All Types</option>
              <option>Contracts</option>
              <option>Cases</option>
              <option>Memos</option>
            </select>
            <select className="w-full rounded-md border bg-background px-3 py-2">
              <option>Any Status</option>
              <option>Analyzing</option>
              <option>Indexing</option>
              <option>Ready</option>
            </select>
            <input placeholder="Search (semantic)" className="w-full rounded-md border bg-background px-3 py-2" />
          </CardContent>
        </Card>
      </section>

      <section className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Library</CardTitle>
            <CardDescription>Recent uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Name</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {docs.map((d) => (
                    <tr key={d.id} className="border-b">
                      <td className="py-2">{d.name}</td>
                      <td className="py-2 capitalize">{d.type}</td>
                      <td className="py-2">
                        <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">{d.status}</span>
                      </td>
                    </tr>
                  ))}
                  {docs.length === 0 && (
                    <tr>
                      <td className="py-4 text-muted-foreground" colSpan={3}>No documents yet. Upload to get started.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
