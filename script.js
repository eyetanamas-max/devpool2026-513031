/* =====================================================================
   script.js = ไฟล์ JavaScript ที่ทำให้หน้าเว็บ "โต้ตอบ" กับผู้ใช้ได้
   ไฟล์นี้ถูกเรียกจาก index.html ด้วย <script src="script.js"></script>
   ===================================================================== */


/* =====================================================================
   การโต้ตอบที่ 1: ปุ่มสลับโหมดมืด/สว่าง (Dark Mode Toggle)
   ===================================================================== */

/* getElementById = ค้นหา element ที่มี id="themeBtn" แล้วเก็บไว้ในตัวแปรเพื่อใช้งานต่อ
   ใช้ const (ค่าคงที่) เพราะ themeBtn ชี้ไปที่ปุ่มตัวเดิมตลอด ไม่เปลี่ยน
   (const = เปลี่ยนค่าไม่ได้, let = เปลี่ยนค่าได้) */
const themeBtn = document.getElementById('themeBtn');


/* addEventListener('click', ...) = "ฟังเหตุการณ์" เมื่อปุ่มถูกคลิก ให้ทำงานในฟังก์ชัน
   (เหตุการณ์อื่นที่ใช้บ่อย: 'mouseover', 'keydown', 'submit') */
themeBtn.addEventListener('click', function () {

  /* classList.toggle('dark') = สลับคลาส 'dark' บน <body> (ไม่มี→เพิ่ม, มี→เอาออก)
     พอ <body> มีคลาส dark → CSS ส่วน body.dark {...} ทำงาน → เว็บเปลี่ยนเป็นโหมดมืด */
  document.body.classList.toggle('dark');

  /* เปลี่ยนข้อความบนปุ่มให้ตรงกับโหมดปัจจุบัน
     classList.contains('dark') = เช็กว่ามีคลาส dark ไหม (true/false) */
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ โหมดสว่าง';   /* ตอนนี้มืด → ปุ่มให้กดกลับไปสว่าง */
  } else {
    themeBtn.textContent = '🌙 โหมดมืด';      /* ตอนนี้สว่าง → ปุ่มให้กดไปมืด */
  }
});


/* =====================================================================
   การโต้ตอบที่ 2: ปุ่มแสดง/ซ่อนเหตุผลเพิ่มเติม (Toggle Content)
   ===================================================================== */

const moreBtn = document.getElementById('moreBtn');     /* ปุ่ม "อ่านเพิ่มเติม" */
const extraBox = document.getElementById('extraBox');   /* กล่องเนื้อหาที่ซ่อนอยู่ */


moreBtn.addEventListener('click', function () {

  /* สลับคลาส 'hidden' บนกล่อง extraBox (มี hidden→ซ่อน, ไม่มี→แสดง)
     ใช้ toggle เพราะทำ 2 อย่างในบรรทัดเดียว: เช็กว่ามีหรือยัง + เพิ่ม/ลบ */
  extraBox.classList.toggle('hidden');

  /* เปลี่ยนข้อความปุ่มตามสถานะ (▾ ลูกศรลง=กดเปิด, ▴ ลูกศรขึ้น=กดปิด) */
  if (extraBox.classList.contains('hidden')) {
    moreBtn.textContent = 'อ่านเพิ่มเติม ▾';
  } else {
    moreBtn.textContent = 'ย่อกลับ ▴';
  }
});
