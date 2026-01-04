// الانتظار حتى يتم تحميل بنية HTML بالكامل قبل تشغيل الكود
document.addEventListener('DOMContentLoaded', function() {
    
    // جلب عنصر إدخال الملفات (الذي يختاره المستخدم) بواسطة الـ ID
    const postImageInput = document.getElementById('postImage');
    // جلب العنصر المسؤول عن عرض اسم الملف المختار
    const imageFileName = document.getElementById('imageFileName');
    // جلب الحاوية (div) التي ستعرض معاينة الصورة المختارة
    const imagePreview = document.getElementById('imagePreview');










    // التأكد من أن جميع العناصر المطلوبة موجودة في الصفحة لتجنب الأخطاء
    if (postImageInput && imageFileName && imagePreview) {
        
        // إضافة مراقب أحداث (Listener) يعمل عند تغيير الملف المختار
        postImageInput.addEventListener('change', function(e) {
            
            // الحصول على أول ملف تم اختياره من قائمة الملفات
            const file = e.target.files[0];
            
            // إذا وجد ملف، اعرض اسمه، وإذا لم يوجد، اعرض نص "لم يتم اختيار ملف"
            imageFileName.textContent = file ? file.name : 'No file chosen';

            // التحقق إذا كان المستخدم قد اختار ملفاً بالفعل
            if (file) {
                // إنشاء كائن FileReader لقراءة محتويات الملف من جهاز المستخدم
                const reader = new FileReader();
                
                // تعريف وظيفة تنفذ فور انتهاء المتصفح من قراءة ملف الصورة
                reader.onload = function(event) {
                    // حقن كود HTML داخل حاوية المعاينة لعرض الصورة وزر الحذف
                    imagePreview.innerHTML = `
                        <img src="${event.target.result}" class="preview-image" alt="Preview">
                        <button type="button" class="remove-image" onclick="removeImagePreview()">
                            <i class="fas fa-times"></i> Remove
                        </button>
                    `;
                };
                
                // البدء فعلياً بقراءة ملف الصورة وتحويله إلى رابط (Data URL) للعرض
                reader.readAsDataURL(file);
            } else {
                // في حال إلغاء الاختيار، قم بتفريغ حاوية المعاينة
                imagePreview.innerHTML = '';
            }
        });
    }










    
    // البحث عن زر النشر من خلال الكلاس الخاص به (btn-primary)
    const publishBtn = document.querySelector('.btn-primary');
    
    // التأكد من وجود زر النشر في الصفحة قبل إضافة الحدث
    if (publishBtn) {
        // إضافة حدث عند الضغط بالماوس على زر النشر
        publishBtn.addEventListener('click', function() {
            // إظهار رسالة تنبيه للمستخدم (يمكنك كتابة نص داخل العلامتين)
            alert("تم النشر بنجاح! 🎉");
            // إعادة توجيه المتصفح إلى صفحة التغذية الإخبارية (feed.html)
            window.location.href = 'feed.html';
        });
    }
});













// دالة خارجية يتم استدعاؤها عند الضغط على زر "Remove" (حذف المعاينة)
function removeImagePreview() {
    // تصفير قيمة مدخل الملفات (ليتمكن المستخدم من اختيار نفس الصورة مجدداً)
    document.getElementById('postImage').value = '';
    // إعادة نص اسم الملف إلى الحالة الافتراضية
    document.getElementById('imageFileName').textContent = 'No file chosen';
    // مسح كود HTML الخاص بالصورة من حاوية المعاينة
    document.getElementById('imagePreview').innerHTML = '';
}