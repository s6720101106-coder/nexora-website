import type { ReactNode } from "react";
import Link from "next/link";
import { sampleContact } from "../../lib/content";

const locales = ["th", "en"] as const;
type Locale = (typeof locales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : "th";
  const isTh = locale === "th";

  return (
    <div lang={locale}>
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav className="container flex min-h-18 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4" aria-label={isTh ? "เมนูหลัก" : "Main navigation"}>
            <Link href={`/${locale}`} className="font-bold tracking-[0.12em] text-lg" style={{ color: "var(--nexora-navy)" }}>
              NEXORA<span className="font-normal"> / TECHNOLOGIES</span>
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
              <Link className="hover:text-[#276EF1]" href={`/${locale}/services`}>{isTh ? "บริการ" : "Services"}</Link>
              <Link href={`/${locale}/portfolio`}>{isTh ? "ผลงานตัวอย่าง" : "Portfolio"}</Link>
              <Link href={`/${locale}/about`}>{isTh ? "เกี่ยวกับเรา" : "About"}</Link>
              <Link href={`/${locale}/contact`}>{isTh ? "ติดต่อ" : "Contact"}</Link>
              <Link className="rounded-full border border-slate-300 px-2.5 py-1 text-xs" href={`/${locale === "th" ? "en" : "th"}`} aria-label={isTh ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}>
                {isTh ? "EN" : "TH"}
              </Link>
              <Link className="rounded-lg bg-[#142B4A] px-3.5 py-2 hover:bg-[#1c3b65]" style={{ color: "#ffffff" }} href={`/${locale}/request-a-quote`}>
                {isTh ? "ขอใบเสนอราคา" : "Request a Quote"}
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 bg-[#0d2038] py-12 text-slate-300">
          <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div><p className="font-bold tracking-[0.12em] text-white">NEXORA / TECHNOLOGIES</p><p className="mt-3 max-w-sm leading-7">{isTh ? "สร้างสรรค์นวัตกรรมวันนี้ เพื่ออนาคตที่ดีกว่า" : "Innovating Today, Building Tomorrow."}</p></div>
            <div className="text-sm"><p className="font-semibold text-white">{isTh ? "สำรวจ" : "Explore"}</p><div className="mt-3 grid gap-2"><Link href={`/${locale}/services`}>{isTh ? "บริการ" : "Services"}</Link><Link href={`/${locale}/portfolio`}>{isTh ? "ผลงานตัวอย่าง" : "Demo work"}</Link><Link href={`/${locale}/consultation`}>{isTh ? "ขอคำปรึกษา" : "Consultation"}</Link></div></div>
            <div className="text-sm"><p className="font-semibold text-white">{isTh ? "ติดต่อ" : "Contact"}</p><p className="mt-3 leading-6">{sampleContact.email}<br />{sampleContact.phone}<br />{isTh ? "ข้อมูลตัวอย่างเท่านั้น" : "Sample information only"}</p><Link href={`/${locale}/privacy`} className="mt-3 inline-block underline underline-offset-4">{isTh ? "นโยบายความเป็นส่วนตัว" : "Privacy notice"}</Link></div>
          </div>
        </footer>
    </div>
  );
}
