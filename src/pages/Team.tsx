import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Member { id: string; email: string; role: "Admin" | "Editor" | "Viewer" }

export default function Team() {
  const [members, setMembers] = useState<Member[]>([
    { id: "1", email: "admin@company.com", role: "Admin" },
    { id: "2", email: "jane@company.com", role: "Editor" },
  ]);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Member["role"]>("Viewer");

  const invite = () => {
    if (!email) return;
    setMembers((m) => [{ id: Date.now().toString(), email, role }, ...m]);
    setEmail("");
    setRole("Viewer");
  };

  return (
    <>
      <Seo title="Team & Access – BlueFlow AI" description="Invite teammates, assign roles, and manage access to documents and features." />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Team & Access</h1>
      </header>
      <section className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invite</CardTitle>
            <CardDescription>Send an email invite</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-3">
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md border bg-background px-3 py-2 md:col-span-2" />
            <select value={role} onChange={(e) => setRole(e.target.value as Member["role"]) } className="rounded-md border bg-background px-3 py-2">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <div className="md:col-span-3">
              <Button variant="hero" onClick={invite}>Invite</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>Manage access</CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Email</th>
                  <th className="py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.id} className="border-b">
                    <td className="py-2">{m.email}</td>
                    <td className="py-2">{m.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
