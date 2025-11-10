import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Pooled — Gemeinsam bestellen. Gemeinsam sparen.",
  description: "Pooled bündelt Bestellungen von Betrieben …",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="sticky top-0 z-20 backdrop-blur border-b border-[var(--border)] bg-[rgba(15,17,21,0.7)]">
          <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-[var(--text)]">
              <span className="inline-block w-8 h-8 rounded-lg bg-[var(--primary)]" />
              POOLED
            </Link>
            <nav className="flex gap-2">
              <a href="#pools" className="btn">Aktuelle Pools</a>
              <a href="#how" className="btn-primary">Wie es funktioniert</a>
            </nav>
          </div>
        </header>
        <main className="max-w-[1200px] mx-auto px-6">{children}</main>
        <footer className="max-w-[1200px] mx-auto px-6 py-10 text-[var(--text-dim)]">
          © {new Date().getFullYear()} Pooled · Impressum · Datenschutz · AGB
        </footer>
      </body>
    </html>
  )
}
