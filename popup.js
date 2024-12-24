// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // تحديد جميع الروابط التي تحتوي على خاصية 'data-popup'
    const popupLinks = document.querySelectorAll('a[data-popup]');
    const popup = document.querySelector('.popup');
    const closePopupBtn = document.querySelector('.popup .close-btn');

    // عند النقر على رابط، يتم عرض الصورة في النافذة المنبثقة
    popupLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // منع الانتقال إلى الرابط
            const imageUrl = link.getAttribute('href'); // الحصول على رابط الصورة
            popup.querySelector('img').src = imageUrl; // إضافة الصورة إلى النافذة المنبثقة
            popup.style.display = 'flex'; // عرض النافذة المنبثقة
        });
    });

    // عند النقر على زر الإغلاق في النافذة المنبثقة
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // إغلاق النافذة المنبثقة
    });

    // إغلاق النافذة المنبثقة عند النقر خارج النافذة
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // إغلاق النافذة المنبثقة
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.createElement('div');
    burgerMenu.className = 'burger-menu';
    burgerMenu.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const nav = document.querySelector('nav');
    nav.insertBefore(burgerMenu, nav.firstChild);
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});