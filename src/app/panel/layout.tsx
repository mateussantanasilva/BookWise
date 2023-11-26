import { Sidebar } from '@/components/Sidebar'

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Sidebar />

      <main className="ml-[21.75rem]">{children}</main>
    </div>
  )
}
