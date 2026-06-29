/* =====================================================================
   script.js = ไฟล์ JavaScript ที่ทำให้หน้าเว็บ "โต้ตอบ" กับผู้ใช้ได้
   ไฟล์นี้ถูกเรียกจาก index.html ด้วย <script src="script.js"></script>
   ===================================================================== */


/* ===== ปุ่มสลับโหมดมืด/สว่าง (Dark Mode Toggle) ===== */

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ โหมดสว่าง';
  } else {
    themeBtn.textContent = '🌙 โหมดมืด';
  }
});


/* ===== ปุ่มแสดง/ซ่อนเหตุผลเพิ่มเติม (Toggle Content) ===== */

const moreBtn = document.getElementById('moreBtn');
const extraBox = document.getElementById('extraBox');

moreBtn.addEventListener('click', function () {
  extraBox.classList.toggle('hidden');

  if (extraBox.classList.contains('hidden')) {
    moreBtn.textContent = 'อ่านเพิ่มเติม ▾';
  } else {
    moreBtn.textContent = 'ย่อกลับ ▴';
  }
});
