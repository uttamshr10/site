import {
  ArrowDown,
  Boxes,
  Building2,
  Cloud,
  Database,
  Factory,
  FileSpreadsheet,
  Layers3,
  LockKeyhole,
  Server,
  ShieldCheck,
  TrendingUp,
  Truck,
  Wallet,
} from "lucide-react";

const stack = [
  "React",
  "TypeScript",
  "TanStack Query",
  "Django REST Framework",
  "PostgreSQL (Neon)",
  "Nginx",
  "Gunicorn",
  "AWS Lightsail",
  "Google Apps Script",
];

const modules = [
  { icon: Database, title: "Master data", detail: "One source of truth for schools, materials and vendors, the catalogue every other module builds on." },
  { icon: TrendingUp, title: "Sales", detail: "School pipeline, activity logs, cost projections and targets, with server-side sorting and filtering that scale to large school lists." },
  { icon: Boxes, title: "Inventory", detail: "Material master with photos, vendor mapping, stock locations and boxes, inbound and damage records, requisitions and external processing." },
  { icon: Factory, title: "Production", detail: "Production jobs and entries for produced materials, capacity analysis and contractor payment tracking." },
  { icon: Wallet, title: "Procurement & Finance", detail: "Material requests, procurement planning with safety allowances, and finance views over dispatch and costs." },
  { icon: Truck, title: "Dispatch", detail: "Dispatch requests, assignments, stock entry and delivery status, tracked per school and Produced Material Type" },
];

const importGuarantees = [
  { title: "Safe to re-run.", detail: "Every row records its own result (created, exists or error), so a second click only touches unfinished rows and never creates duplicates." },
  { title: "Fast.", detail: "One check request skips materials already in the system, photos are fetched as thumbnails in parallel, and sheet writes are batched." },
  { title: "Locked down.", detail: "A shared-secret header with constant-time comparison, a create-only endpoint (no read, update or delete), and HTTPS only. Failures are reported per row." },
];

const challenges = [
  { number: "01", title: "Designing a shared data model", detail: "Translating separate operational spreadsheets into consistent entities and relationships that several teams can work with at once." },
  { number: "02", title: "Renaming a core term without breaking the system", detail: "Late in the project, leadership changed \u201Csome-name\u201D to \u201Csomething\u201D. Changing the backend would have touched models, APIs and many modules, so I kept the stored value stable and translated at the UI layer: a script rewrote user-facing text across about 50 files, verified by type-checking and search, and imports now accept both names." },
  { number: "03", title: "Getting data out of tools that hide it", detail: "The sheet's photos were not real images but Drive files drawn by a formula, which is why every export lost them. I found that by testing what each export and API actually contained, then matched photos by material code, because a positional lookup would have attached the wrong photo wherever the two sheets' rows did not line up." },
  { number: "04", title: "Connecting dependent workflows", detail: "Accounting for how sales, production, inventory, procurement and dispatch affect one another instead of building isolated screens." },
  { number: "05", title: "Owning delivery end to end", detail: "A feature-branch, pull-request and scripted-redeploy release flow, separate production and development databases, and developer, deployment and user documentation written alongside the code." },
];

export default function KarkhanaCaseStudy() {
  return (
    <div className="kcs">
      <div className="kcs-kicker"><Building2 size={15} /> PROFESSIONAL CASE STUDY <span>·</span> PRIVATE SYSTEM</div>
      <h2 className="kcs-title">Karkhana Web System<span>.</span></h2>
      <p className="kcs-lead">Building a centralized operational platform to replace fragmented spreadsheets and connect sales, procurement, inventory, production and dispatch for a hands-on learning company.</p>

      <div className="kcs-facts">
        <div><span>MY ROLE</span><strong>Software Development Lead</strong></div>
        <div><span>PLATFORM</span><strong>Internal web application</strong></div>
        <div><span>INFRASTRUCTURE</span><strong>AWS Lightsail · Nginx · Gunicorn · Neon PostgreSQL</strong></div>
      </div>

      <div className="kcs-stack" aria-label="Technology stack">
        {stack.map((item) => <span key={item}>{item}</span>)}
      </div>

      <section className="kcs-section">
        <span className="kcs-index">01 / CONTEXT</span>
        <h3>The problem</h3>
        <p>Operational information lived across multiple spreadsheets and workflows. As different teams relied on the same records, such as the material catalogue, school lists and dispatch plans, keeping them consistent and getting a clear picture of ongoing work became difficult.</p>
        <p>The goal was a shared system of record: one place to manage core entities and support connected operational processes, without forcing teams to abandon the tools they already used.</p>
      </section>

      <section className="kcs-section">
        <span className="kcs-index">02 / APPROACH</span>
        <h3>What I built and led</h3>
        <p>I worked on the architecture, data models, React interfaces, Django REST APIs and AWS deployment, while assisting and coordinating technical implementation across the development team and writing the developer, deployment and user documentation.</p>
        <div className="kcs-module-grid">
          {modules.map(({ icon: Icon, title, detail }) => (
            <div className="kcs-module" key={title}><Icon size={18} /><h4>{title}</h4><p>{detail}</p></div>
          ))}
        </div>
      </section>

      <section className="kcs-section">
        <span className="kcs-index">03 / SYSTEM DESIGN</span>
        <h3>Architecture</h3>
        <div className="kcs-architecture" aria-label="React and TypeScript frontend communicates with Django REST Framework, which connects to PostgreSQL on Neon. The application is hosted on AWS Lightsail behind Nginx and Gunicorn.">
          <div className="kcs-architecture-node"><Layers3 size={19} /><strong>React + TypeScript</strong><span>Frontend · TanStack Query for server state</span></div>
          <ArrowDown className="kcs-arrow" size={18} />
          <div className="kcs-architecture-node"><Server size={19} /><strong>Django REST Framework</strong><span>APIs · Authentication · Business rules</span></div>
          <ArrowDown className="kcs-arrow" size={18} />
          <div className="kcs-architecture-node"><Database size={19} /><strong>PostgreSQL on Neon</strong><span>Relational data · compressed material photos stored alongside records</span></div>
          <div className="kcs-hosting"><Cloud size={17} /> Deployed on AWS Lightsail with Nginx and Gunicorn, HTTPS and scripted redeploys</div>
        </div>
      </section>

      <section className="kcs-section">
        <span className="kcs-index">04 / FEATURED WORK</span>
        <h3>One-click material import, with photos</h3>
        <p>The material catalogue lived in Google Sheets, and the photos were the hard part: exporting to .xlsx silently drops them, so every photo had to be uploaded by hand, one material at a time.</p>
        <p>I replaced that with a menu button inside the sheet. One click sends each new material, with its photo, straight to a dedicated endpoint in the system.</p>
        <div className="kcs-architecture" aria-label="Google Sheet with Apps Script sends materials to a token-guarded REST endpoint, which validates and compresses photos before saving to PostgreSQL.">
          <div className="kcs-architecture-node"><FileSpreadsheet size={19} /><strong>Google Sheet + Apps Script</strong><span>Reads new rows, resolves each photo from Drive by material code</span></div>
          <ArrowDown className="kcs-arrow" size={18} />
          <div className="kcs-architecture-node"><ShieldCheck size={19} /><strong>Guarded REST endpoint</strong><span>Shared secret · create-only · HTTPS</span></div>
          <ArrowDown className="kcs-arrow" size={18} />
          <div className="kcs-architecture-node"><Server size={19} /><strong>Validation + image pipeline</strong><span>Field rules · duplicate check · photo compression</span></div>
          <ArrowDown className="kcs-arrow" size={18} />
          <div className="kcs-architecture-node"><Database size={19} /><strong>PostgreSQL</strong><span>Material and photo saved together</span></div>
        </div>
        <ul className="kcs-list">
          {importGuarantees.map((item) => <li key={item.title}><strong>{item.title}</strong> {item.detail}</li>)}
        </ul>
      </section>

      <section className="kcs-section">
        <span className="kcs-index">05 / ENGINEERING</span>
        <h3>Key challenges</h3>
        <div className="kcs-challenges">{challenges.map((item) => <div className="kcs-challenge" key={item.number}><span>{item.number}</span><div><h4>{item.title}</h4><p>{item.detail}</p></div></div>)}</div>
      </section>

      <section className="kcs-section">
        <span className="kcs-index">06 / TAKEAWAY</span>
        <h3>What this project taught me</h3>
        <p>Operational software succeeds or fails on its data flows. Most of the work was understanding how sales, inventory, production and dispatch depend on one another, then modelling those dependencies so every team sees one consistent picture.</p>
        <p>Two lessons stood out. Meet teams where they already work: a button inside their spreadsheet removed a tedious manual step without asking anyone to learn a new tool. And keep what users see separate from what the system stores: when a core term changed late in the project, a thin translation layer let the interface change right away while the data model stayed stable.</p>
      </section>

      <div className="kcs-private"><LockKeyhole size={17} /><span>Internal organizational project. Source code and production access are not public.</span></div>
    </div>
  );
}