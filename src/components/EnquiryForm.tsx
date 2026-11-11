"use client";

import { FormEvent, useState } from "react";
import { Locale, serviceSlugs, services } from "../lib/content";

export function EnquiryForm({ locale, kind }: { locale: Locale; kind: "quote" | "consultation" }) {
  const th = locale === "th";
  const [sent, setSent] = useState(false);
  const quote = kind === "quote";
  const label = (en: string, thText: string) => th ? thText : en;
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  const field = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#276EF1] focus:ring-4 focus:ring-blue-100";
  if (sent) return <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950"><p className="font-semibold">{label("Your request has been checked locally.", "ระบบตรวจข้อมูลในหน้านี้เรียบร้อยแล้ว")}</p><p className="mt-2 text-sm leading-6">{label("No information was sent. Connect a secure server-side destination, privacy notice, and spam protection before accepting real enquiries.", "ข้อมูลยังไม่ได้ถูกส่งออกจากหน้านี้ โปรดเชื่อมต่อปลายทางฝั่งเซิร์ฟเวอร์ที่ปลอดภัย พร้อม privacy notice และระบบป้องกันสแปม ก่อนรับคำขอจริง")}</p><button className="mt-4 text-sm font-semibold underline" onClick={() => setSent(false)}>{label("Review form", "กลับไปตรวจแบบฟอร์ม")}</button></div>;
  return <form onSubmit={submit} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">{label("Name", "ชื่อ") }<input required name="name" className={field} autoComplete="name" /></label>
      <label className="text-sm font-semibold">{label("Email", "อีเมล") }<input required name="email" type="email" className={field} autoComplete="email" /></label>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">{label("Organisation (optional)", "องค์กร (ไม่บังคับ)") }<input name="organisation" className={field} autoComplete="organization" /></label>
      <label className="text-sm font-semibold">{label("Phone (optional)", "โทรศัพท์ (ไม่บังคับ)") }<input name="phone" type="tel" className={field} autoComplete="tel" /></label>
    </div>
    {quote ? <><label className="text-sm font-semibold">{label("Service", "บริการ") }<select name="service" className={field} defaultValue=""><option value="" disabled>{label("Select a service", "เลือกบริการ")}</option>{serviceSlugs.map((slug) => <option key={slug}>{th ? services[slug].thaiTitle : services[slug].title}</option>)}</select></label><label className="text-sm font-semibold">{label("Project summary", "สรุปโครงการ") }<textarea required name="summary" rows={5} className={field} placeholder={label("What are you hoping to build or improve?", "ต้องการสร้างหรือปรับปรุงอะไร?")} /></label></> : <><label className="text-sm font-semibold">{label("Topic", "หัวข้อที่ต้องการปรึกษา") }<input required name="topic" className={field} /></label><label className="text-sm font-semibold">{label("Preferred date / time window (optional)", "ช่วงวัน / เวลาที่สะดวก (ไม่บังคับ)") }<input name="time" className={field} /></label><label className="text-sm font-semibold">{label("Notes", "รายละเอียดเพิ่มเติม") }<textarea name="notes" rows={4} className={field} /></label></>}
    <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><input required type="checkbox" className="mt-1 size-4 accent-[#276EF1]" /><span>{label("I understand this is a preview form. It does not send data or create a confirmed appointment.", "ฉันเข้าใจว่านี่เป็นแบบฟอร์มตัวอย่าง ไม่มีการส่งข้อมูลหรือยืนยันการนัดหมาย")}</span></label>
    <button className="rounded-xl bg-[#142B4A] px-5 py-3.5 font-semibold text-white transition hover:bg-[#1c3b65] focus:outline-none focus:ring-4 focus:ring-blue-200">{label("Check request", "ตรวจคำขอ")}</button>
  </form>;
}
