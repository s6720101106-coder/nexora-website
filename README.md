# NEXORA Technologies — Project Continuation Package

เอกสารชุดนี้ต่อเนื่องจาก Phase 01 และ Phase 02 ที่ผู้ใช้อนุมัติแล้ว ครอบคลุมเอกสาร Phase 03–08 และ starter scaffold สำหรับการพัฒนาต่อ

## สถานะและข้อจำกัด
- Phase 01 / G1: APPROVED
- Phase 02 / G2: APPROVED
- Phase 03–06: จัดทำเป็น baseline และ implementation-ready handoff ตามข้อมูลที่มี
- Phase 07: มี starter scaffold; ยังไม่ใช่ production implementation ที่ผ่านการทดสอบ
- Phase 08: มี test/SEO/deployment checklist; ยังไม่ผ่านการทดสอบจริงหรือ deploy

ไม่สามารถยืนยันการทำงานใน Google Stitch, OpenCode, GitHub หรือระบบ hosting ภายนอกได้จากแพ็กเกจนี้ จึงไม่กล่าวอ้างว่าได้สร้าง design ใน Stitch, commit code, เชื่อม backend, ทดสอบ production หรือเผยแพร่เว็บไซต์แล้ว

## ยืนยันแล้ว
- ชื่อโครงการ: NEXORA Technologies
- ภาษา: ไทยและอังกฤษ ใช้ `/th/` และ `/en/`
- บริการ 5 ประเภท: Website Development, Mobile Application Development, Enterprise Software, Custom Software, AI & Automation
- Quote request และ consultation request ใช้แบบฟอร์ม
- Consultation เป็น request form ไม่ใช่การจองที่ยืนยันอัตโนมัติ
- ไม่มีระบบสมาชิก, login, customer portal หรือ project tracking
- Portfolio ใช้ demo projects และต้องติดป้ายว่าเป็นผลงานตัวอย่าง

## โครงสร้าง
- `docs/03-user-flow/` — User Flow, Journey, Funnel
- `docs/04-wireframes/` — page layouts และ interaction specs
- `docs/05-ui-design/` — design direction, tokens, component inventory, Stitch handoff
- `docs/06-architecture/` — technical architecture, data model, API/security plan
- `docs/07-development/` — development plan and source scaffold
- `docs/08-testing-seo-deployment/` — QA, SEO, deployment readiness
- `src/` — starter source files
- `tests/` — initial test plan

## คำสั่งเริ่มต้น (หลังติดตั้ง dependencies)
```bash
npm install
npm run dev
```
Starter นี้เป็น scaffold สำหรับ handoff; ตรวจ compatibility ของ package versions และเติม backend/provider integrations ก่อน production.

## Local validation

Dependencies may be installed with `pnpm install` where npm is unavailable. The current website baseline passes `pnpm typecheck` and `pnpm build`.

The quote and consultation forms are intentionally preview-only. They validate their fields in the browser and do not transmit or retain submitted data until the production security and privacy requirements are configured.
