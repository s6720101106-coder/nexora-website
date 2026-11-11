import Link from "next/link";
import { demoProjects, process, services, serviceSlugs } from "../../lib/content";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTh = locale === "th";
  return (
    <div>
      <section className="overflow-hidden bg-[#e9eef5] py-20 md:py-28">
        <div className="container grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div><p className="mb-5 text-sm font-bold tracking-[0.18em] text-[#276EF1]">NEXORA TECHNOLOGIES</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl" style={{ color: "var(--nexora-navy)" }}>
            {isTh ? "สร้างสรรค์นวัตกรรมวันนี้ เพื่ออนาคตที่ดีกว่า" : "Innovating Today, Building Tomorrow."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-700">
            {isTh ? "บริการวางแผน ออกแบบ และพัฒนาซอฟต์แวร์และแอปพลิเคชันตามความต้องการของธุรกิจ" : "Planning, designing, and building software and applications around business needs."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-xl bg-[#142B4A] px-5 py-3.5 font-semibold hover:bg-[#1c3b65]" style={{ color: "#ffffff" }} href={`/${locale}/request-a-quote`}>{isTh ? "ขอใบเสนอราคา" : "Request a Quote"}</Link><Link className="rounded-xl border border-slate-400 px-5 py-3.5 font-semibold hover:border-[#142B4A]" href={`/${locale}/services`}>{isTh ? "ดูบริการ" : "Explore Services"}</Link></div></div>
          <div className="rounded-3xl bg-[#142B4A] p-8 text-white shadow-2xl shadow-blue-950/20"><p className="text-sm font-semibold tracking-[0.13em] text-blue-200">{isTh ? "แนวทางของเรา" : "HOW WE WORK"}</p><p className="mt-6 text-2xl font-semibold leading-snug">{isTh ? "เริ่มจากโจทย์ที่ชัดเจน แล้วพัฒนาให้ก้าวต่อไปได้จริง" : "Start with the right question. Build for the next real step."}</p><div className="mt-8 border-t border-white/20 pt-5 text-sm leading-6 text-slate-200">{isTh ? "สำหรับธุรกิจ องค์กร และทีมที่ต้องการทำไอเดียให้เป็นดิจิทัลอย่างมีทิศทาง" : "For businesses and teams turning an idea into a considered digital product."}</div></div>
        </div>
      </section>
      <section className="container py-20">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold tracking-widest text-[#276EF1]">{isTh ? "สิ่งที่เราทำ" : "WHAT WE DO"}</p><h2 className="mt-3 text-3xl font-bold text-[#142B4A] md:text-4xl">{isTh ? "บริการของเรา" : "Our Services"}</h2></div><Link href={`/${locale}/services`} className="font-semibold text-[#142B4A] underline underline-offset-4">{isTh ? "ดูบริการทั้งหมด" : "View all services"}</Link></div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug, index) => (
            <Link key={slug} href={`/${locale}/services/${slug}`} className="lift rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"><p className="text-sm font-semibold text-[#276EF1]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[#142B4A]">{isTh ? services[slug].thaiTitle : services[slug].title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{isTh ? services[slug].thaiSummary : services[slug].summary}</p>
              <span className="mt-5 inline-block text-sm font-semibold" style={{ color: "var(--nexora-navy)" }}>{isTh ? "ดูรายละเอียด →" : "Learn more →"}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20"><div className="container"><p className="text-sm font-bold tracking-widest text-[#276EF1]">PROCESS</p><h2 className="mt-3 text-3xl font-bold text-[#142B4A] md:text-4xl">{isTh ? "จากโจทย์สู่การใช้งาน" : "From question to momentum"}</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{process.map(([n, en, desc, thai, thaiDesc]) => <div className="rounded-2xl bg-white p-6" key={n}><p className="font-bold text-blue-500">{n}</p><h3 className="mt-5 text-xl font-semibold">{isTh ? thai : en}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{isTh ? thaiDesc : desc}</p></div>)}</div></div></section>
      <section className="container py-20"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold tracking-widest text-[#276EF1]">DEMO WORK</p><h2 className="mt-3 text-3xl font-bold text-[#142B4A] md:text-4xl">{isTh ? "แนวคิดตัวอย่าง" : "Illustrative concepts"}</h2></div><Link className="font-semibold underline underline-offset-4" href={`/${locale}/portfolio`}>{isTh ? "ดูทั้งหมด" : "View portfolio"}</Link></div><div className="mt-9 grid gap-5 md:grid-cols-3">{demoProjects.map((project, index) => <Link className="lift overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl" href={`/${locale}/portfolio/${project.slug}`} key={project.slug}><div className={`h-40 bg-gradient-to-br ${["from-blue-950 to-blue-500", "from-[#142B4A] to-teal-500", "from-indigo-950 to-violet-500"][index]} p-5`}><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Demo · {project.tag}</span></div><div className="p-6"><h3 className="text-lg font-semibold">{isTh ? project.thaiTitle : project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{isTh ? project.thaiText : project.text}</p></div></Link>)}</div></section>
      <section className="container pb-4"><div className="rounded-3xl bg-[#142B4A] px-7 py-12 text-white md:px-12"><p className="text-sm font-bold tracking-widest text-blue-200">NEXORA</p><div className="mt-4 flex flex-wrap items-end justify-between gap-7"><h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">{isTh ? "มีโจทย์ที่อยากเริ่มต้นด้วยกันไหม?" : "Have a problem worth building around?"}</h2><Link href={`/${locale}/consultation`} className="rounded-xl bg-white px-5 py-3.5 font-semibold text-[#142B4A]">{isTh ? "ขอคำปรึกษา" : "Request a consultation"}</Link></div></div></section>
    </div>
  );
}
