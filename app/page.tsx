const EXPERIENCE = [
  { name: "IOSG Ventures", role: "Investment Analyst", time: "Jun 2026 to Present" },
  { name: "Binance", role: "Project Management Office Intern", time: "Sep 2025 to May 2026" },
  { name: "IOSG Ventures", role: "Research Intern", time: "May 2025 to Aug 2025" },
  { name: "HKUST", role: "Research Assistant", time: "May 2025 to Aug 2025" },
  { name: "CryptoHK", role: "Programmer Intern", time: "Sep 2024 to Dec 2024" },
  { name: "Graphite Venture Limited", role: "Researcher Intern", time: "May 2024 to Aug 2024" },
  { name: "Rivermap Quantitative Research", role: "Research Intern", time: "Dec 2023 to Jan 2024" },
  { name: "HKUST UROP", role: "Undergraduate Research", time: "Jun 2023 to Aug 2023" },
];

const LINKS = [
  { label: "X / Twitter", handle: "@mariochow98k", href: "https://x.com/mariochow98k" },
  { label: "Telegram", handle: "@von98", href: "https://t.me/von98" },
  { label: "LinkedIn", handle: "mario-chow", href: "https://www.linkedin.com/in/mario-chow/" },
  { label: "Medium", handle: "@mariochow_5507", href: "https://medium.com/@mariochow_5507" },
];

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="eyebrow">Crypto Research &amp; Investing</p>
        <h1>Mario Chow</h1>
        <p className="sub">
          Quant Finance grad from HKUST and full time crypto degen.
          Functioning alcoholic, gambling addict, and chain smoker who somehow found the
          one industry that rewards all three. When I am not tilting at the tables, I write
          research on emerging crypto ecosystems: Hyperliquid, digital asset treasuries,
          prediction markets, stablecoins, and RWAs.
        </p>
        <div className="links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="chip">
              <span className="chip-label">{l.label}</span>
              <span className="chip-handle">{l.handle}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Experience</h2>
        <ul className="exp">
          {EXPERIENCE.map((e) => (
            <li key={e.name + e.time} className="exp-row">
              <div className="exp-main">
                <span className="exp-name">{e.name}</span>
                <span className="exp-role">{e.role}</span>
              </div>
              <span className="exp-time">{e.time}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Research</h2>
        <a className="research" href="https://medium.com/@mariochow_5507" target="_blank" rel="noopener noreferrer">
          <span>Read my writing on Medium</span>
          <span className="arrow">→</span>
        </a>
      </section>

      <footer>© {new Date().getFullYear()} Mario Chow</footer>
    </main>
  );
}
