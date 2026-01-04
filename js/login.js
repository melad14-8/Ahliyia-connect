document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.btn-primary');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // جلب قيم الحقول
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // تحقق من الإيميل
            if (email === "") {
                alert(" الرجاء إدخال الإيميل الجامعي");
                return; // يمنع الدخول إذا الحقل فاضي
            }

            // تحقق من كلمة السر
            if (password === "") {
                alert(" الرجاء إدخال كلمة السر");
                return; // يمنع الدخول إذا الحقل فاضي
            }

            // إذا كل شي تمام
            alert("✅ تم تسجيل الدخول بنجاح! (عرض تجريبي)");
            window.location.href = 'index.html';
        });
    }
});