import { Node } from "@/components/nodes/Node"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8 grid grid-cols-2 gap-6">
      <Node title="Guitar" type="instrument" />
      <Node title="Bass" type="instrument" view="expand" />
      <Node title="Tab" type="notation" theme="light" />
      <Node title="Recording" type="record" view="edit" />
      <Node title="Infos" type="infos" state="hover" />
    </main>
  )
}