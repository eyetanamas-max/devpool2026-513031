/* ===== script.js = ทำให้หน้าเว็บโต้ตอบได้ ===== */
/* ไฟล์นี้ถูกเรียกใช้จาก index.html ด้วยบรรทัด <script src="script.js"></script> */


/* ----- การโต้ตอบที่ 1: ปุ่มสลับโหมดมืด/สว่าง ----- */

// document.getElementById = ไปหยิบ element ที่มี id ตรงตามชื่อมาเก็บไว้ในตัวแปร
const themeBtn = document.getElementById('themeBtn');

// addEventListener('click', ...) = สั่งว่า "เมื่อปุ่มนี้ถูกคลิก ให้ทำงานข้างใน"
themeBtn.addEventListener('click', function () {
  // classList.toggle('dark') = สลับคลาส dark บน body
  // ถ้ายังไม่มีก็เพิ่มเข้าไป ถ้ามีอยู่แล้วก็เอาออก
  document.body.classList.toggle('dark');

  // เช็กว่าตอนนี้ body มีคลาส dark หรือไม่ แล้วเปลี่ยนข้อความบนปุ่มให้ตรง
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ โหมดสว่าง';
  } else {
    themeBtn.textContent = '🌙 โหมดมืด';
  }
});


/* ----- การโต้ตอบที่ 2: ปุ่มแสดง/ซ่อนเหตุผลเพิ่มเติม ----- */

const moreBtn = document.getElementById('moreBtn');   // หยิบปุ่ม "อ่านเพิ่มเติม"
const extraBox = document.getElementById('extraBox'); // หยิบกล่องเนื้อหาที่ซ่อนอยู่

moreBtn.addEventListener('click', function () {
  // สลับคลาส hidden บนกล่อง: กดครั้งแรกเปิด กดอีกครั้งปิด
  extraBox.classList.toggle('hidden');

  // เปลี่ยนข้อความปุ่มตามสถานะว่ากำลังเปิดหรือปิดอยู่
  if (extraBox.classList.contains('hidden')) {
    moreBtn.textContent = 'อ่านเพิ่มเติม ▾';
  } else {
    moreBtn.textContent = 'ย่อกลับ ▴';
  }
});
