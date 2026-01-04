// الانتظار حتى يتأكد المتصفح من تحميل كل عناصر واجهة المستخدم (HTML)
document.addEventListener('DOMContentLoaded', function() {

    // تحديد عنصر إدخال الصورة (Input) من خلال المعرف الخاص به
    const profilePicInput = document.getElementById('profilePic');
    
    // تحديد العنصر النصي (Span) الذي سيظهر فيه اسم الصورة المختارة
    const fileNameSpan = document.getElementById('fileName');

    // التحقق من أن العناصر المطلوبة موجودة في الصفحة قبل تنفيذ أي أمر لتجنب الأخطاء
    if (profilePicInput && fileNameSpan) {
        
        // إضافة مراقب للأحداث ينتظر قيام المستخدم باختيار ملف (حدث التغيير)
        profilePicInput.addEventListener('change', function(e) {
            
            // تخزين الملف الأول الذي اختاره المستخدم في متغير (نأخذ أول ملف فقط)
            const file = e.target.files[0];
            
            // تحديث النص المعروض: إذا وجد ملف نعرض اسمه، وإذا لم يوجد نعرض نص افتراضي
            fileNameSpan.textContent = file ? file.name : 'No file chosen';
        });
    }

    // البحث عن زر التسجيل الأساسي باستخدام اسم الكلاس CSS الخاص به
    const registerBtn = document.querySelector('.btn-primary');
    
    // التأكد من أن الزر موجود في الصفحة قبل إضافة وظيفة النقر عليه
    if (registerBtn) {
        
        // إضافة حدث عند قيام المستخدم بالضغط بالماوس على زر التسجيل
        registerBtn.addEventListener('click', function(event) {
            
            // منع السلوك الافتراضي (مثل إرسال النموذج فوراً) لإعطاء وقت لعرض التنبيه
            event.preventDefault();

            // إظهار رسالة تنبيه منبثقة للمستخدم لتأكيد نجاح العملية
            alert("✅ تم إنشاء الحساب بنجاح! (عرض تجريبي)");
            
            // توجيه المتصفح برمجياً إلى صفحة التغذية الإخبارية (feed.html)
            window.location.href = 'feed.html';
        });
    }
});