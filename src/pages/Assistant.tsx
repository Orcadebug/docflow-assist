import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface Msg { id: string; role: "user" | "assistant"; text: string; sources?: string[] }

const suggestions = [
  "Summarize Smith vs. Jones case",
  "What are key terms in Contract_2024_01?",
  "Generate a client-ready memo from these notes",
];

export default function Assistant() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  const send = (t: string) => {
    if (!t.trim()) return;
    const id = Date.now().toString();
    setMsgs((m) => [...m, { id, role: "user", text: t }]);
    setText("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          id: id + "-a",
          role: "assistant",
          text: `Here's a concise answer for: "${t}"` ,
          sources: ["Contract_2024_01.pdf", "Case_Smith_v_Jones.pdf"],
        },
      ]);
    }, 600);
  };

  return (
    <>
      <Seo title="AI Assistant – BlueFlow AI" description="Chat with your documents. Get answers with source citations and suggested questions." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">AI Assistant</h1>
      </header>

      <section className="grid gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="min-h-[40vh] space-y-4">
              {msgs.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div className={m.role === 'user' ? 'bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]' : 'bg-secondary text-secondary-foreground rounded-lg px-4 py-2 max-w-[80%]'}>
                    <p className="whitespace-pre-wrap">{m.text}</p>
                    {m.sources && (
                      <div className="mt-2 text-xs opacity-90">
                        Sources: {m.sources.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {msgs.length === 0 && (
                <div className="text-center text-muted-foreground py-10">Ask about your documents to begin.</div>
              )}
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-3">
              {suggestions.map((s) => (
                <Button key={s} variant="secondary" onClick={() => send(s)}>{s}</Button>
              ))}
            </div>
            <form className="mt-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); send(text); }}>
              <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask a question..." className="flex-1 rounded-md border bg-background px-3 py-2" />
              <Button variant="hero" type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
