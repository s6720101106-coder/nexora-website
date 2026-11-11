export const serviceSlugs = ["website-development", "mobile-application-development", "enterprise-software", "custom-software", "ai-automation"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];
export type Locale = "th" | "en";

type Service = { title: string; thaiTitle: string; summary: string; thaiSummary: string; outcome: string; thaiOutcome: string; capabilities: string[]; thaiCapabilities: string[] };

export const services: Record<ServiceSlug, Service> = {
  "website-development": { title: "Website Development", thaiTitle: "Website Development", summary: "Websites and digital platforms built around clear customer journeys.", thaiSummary: "เว็บไซต์และแพลตฟอร์มดิจิทัลที่ออกแบบตามเส้นทางของลูกค้า", outcome: "Make your digital presence clear, useful, and ready to grow.", thaiOutcome: "สร้างจุดเริ่มต้นดิจิทัลที่ชัดเจน ใช้งานง่าย และพร้อมเติบโต", capabilities: ["Corporate websites", "Landing pages", "Content-led platforms", "Responsive implementation"], thaiCapabilities: ["เว็บไซต์องค์กร", "Landing page", "แพลตฟอร์มเนื้อหา", "พัฒนาให้รองรับทุกหน้าจอ"] },
  "mobile-application-development": { title: "Mobile Application Development", thaiTitle: "Mobile Application Development", summary: "Mobile experiences designed for the moments your customers are on the move.", thaiSummary: "ประสบการณ์บนมือถือสำหรับช่วงเวลาที่ลูกค้าต้องการความคล่องตัว", outcome: "Turn essential journeys into a focused mobile experience.", thaiOutcome: "เปลี่ยนขั้นตอนสำคัญให้เป็นประสบการณ์บนมือถือที่ตรงจุด", capabilities: ["Product discovery", "iOS and Android strategy", "Prototype-to-build delivery", "API-ready experiences"], thaiCapabilities: ["วิเคราะห์ผลิตภัณฑ์", "กลยุทธ์ iOS และ Android", "จากต้นแบบสู่การพัฒนา", "ออกแบบให้พร้อมเชื่อมต่อ API"] },
  "enterprise-software": { title: "Enterprise Software", thaiTitle: "Enterprise Software", summary: "Thoughtful systems for the workflows that keep organisations moving.", thaiSummary: "ระบบที่วางแผนอย่างรอบคอบสำหรับ workflow สำคัญขององค์กร", outcome: "Bring fragmented processes into a more dependable working system.", thaiOutcome: "เชื่อมกระบวนการที่กระจัดกระจายให้กลายเป็นระบบการทำงานที่เชื่อถือได้", capabilities: ["Workflow mapping", "Internal tools", "Role-aware experiences", "Integration planning"], thaiCapabilities: ["วิเคราะห์ workflow", "เครื่องมือภายในองค์กร", "ประสบการณ์ตามบทบาทผู้ใช้", "วางแผนการเชื่อมต่อระบบ"] },
  "custom-software": { title: "Custom Software", thaiTitle: "Custom Software", summary: "Purpose-built software for needs that off-the-shelf products cannot quite meet.", thaiSummary: "ซอฟต์แวร์ที่ออกแบบเฉพาะเมื่อผลิตภัณฑ์สำเร็จรูปยังไม่ตอบโจทย์", outcome: "Shape technology around the way your business actually works.", thaiOutcome: "ออกแบบเทคโนโลยีให้ทำงานสอดคล้องกับธุรกิจของคุณ", capabilities: ["Requirement discovery", "System design", "Incremental delivery", "Long-term evolution"], thaiCapabilities: ["ค้นหาความต้องการ", "ออกแบบระบบ", "พัฒนาเป็นระยะ", "ต่อยอดในระยะยาว"] },
  "ai-automation": { title: "AI & Automation", thaiTitle: "AI & Automation", summary: "Practical automation opportunities assessed against real work, risk, and readiness.", thaiSummary: "โอกาสด้าน AI และ automation ที่พิจารณาจากงาน ความเสี่ยง และความพร้อมจริง", outcome: "Find the repetitive work worth simplifying, with people kept in the loop.", thaiOutcome: "ค้นหางานซ้ำที่ควรทำให้ง่ายขึ้น โดยยังให้คนอยู่ในกระบวนการสำคัญ", capabilities: ["Opportunity mapping", "Process automation", "AI-assisted workflows", "Human-in-the-loop design"], thaiCapabilities: ["วิเคราะห์โอกาส", "ทำกระบวนการอัตโนมัติ", "workflow ที่ใช้ AI ช่วย", "ออกแบบให้คนร่วมตัดสินใจ"] },
};

export const process = [
  ["01", "Discover", "Understand the context, priorities, and people involved.", "ค้นหา", "ทำความเข้าใจบริบท เป้าหมาย และผู้เกี่ยวข้อง"],
  ["02", "Design", "Shape a focused solution and practical delivery plan.", "ออกแบบ", "วางแนวทางแก้ปัญหาและแผนการส่งมอบที่เหมาะสม"],
  ["03", "Develop", "Build in visible increments, with room for feedback.", "พัฒนา", "พัฒนาเป็นช่วงที่มองเห็นความคืบหน้าและรับ feedback ได้"],
  ["04", "Test", "Check quality, usability, and fit before release.", "ทดสอบ", "ตรวจคุณภาพ การใช้งาน และความเหมาะสมก่อนส่งมอบ"],
  ["05", "Deploy", "Prepare a considered, dependable handover.", "นำขึ้นใช้งาน", "เตรียมการส่งมอบและนำระบบขึ้นใช้งานอย่างรอบคอบ"],
  ["06", "Maintain", "Plan the next improvements from real learning.", "ดูแลต่อเนื่อง", "วางแผนการปรับปรุงจากการเรียนรู้จริง"],
] as const;

export const demoProjects = [
  { slug: "commerce-platform", tag: "Web platform", title: "Commerce platform concept", thaiTitle: "แนวคิดแพลตฟอร์มการค้า", text: "A clear, responsive customer journey for a growing digital business.", thaiText: "แนวคิดเส้นทางลูกค้าที่ชัดเจนและรองรับทุกหน้าจอสำหรับธุรกิจดิจิทัลที่กำลังเติบโต" },
  { slug: "field-operations", tag: "Mobile app", title: "Field operations concept", thaiTitle: "แนวคิดระบบงานภาคสนาม", text: "A mobile-first workflow for teams coordinating work away from a desk.", thaiText: "แนวคิด workflow แบบ mobile-first สำหรับทีมที่ประสานงานนอกสำนักงาน" },
  { slug: "insight-workflow", tag: "Automation", title: "Insight workflow concept", thaiTitle: "แนวคิด workflow ข้อมูล", text: "A practical view of turning recurring reporting into a more useful routine.", thaiText: "แนวคิดการเปลี่ยนรายงานที่ทำซ้ำให้เป็นกระบวนการที่มีประโยชน์ยิ่งขึ้น" },
] as const;

export function copy(locale: Locale, english: string, thai: string) { return locale === "th" ? thai : english; }

// Fictional, reserved sample data. Replace and verify before production release.
export const sampleContact = {
  company: "NEXORA Technologies Co., Ltd. (Sample)",
  thaiCompany: "บริษัท เน็กซ์ออรา เทคโนโลยี จำกัด (ตัวอย่าง)",
  address: "123 Example Road, Khlong Toei, Bangkok 10110, Thailand",
  thaiAddress: "123 ถนนเอ็กแซมเปิล แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110",
  email: "hello@nexora.example",
  phone: "+66 00 000 0000",
  line: "@nexora.sample",
  whatsapp: "+66 00 000 0000",
};
