// إضافة وظائف JavaScript للموقع

// متغير لتخزين الطلبات
let cart = [];

// إضافة حدث عند الضغط على أزرار الإضافة
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function(e) {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // إضافة المنتج للسلة
        addToCart(productName, productPrice);

        // تأثير بصري
        this.textContent = '✓ تمت الإضافة';
        this.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            this.textContent = 'أضف للطلب';
            this.style.backgroundColor = '';
        }, 2000);
    });
});

// دالة لإضافة المنتج للسلة
function addToCart(productName, productPrice) {
    cart.push({
        name: productName,
        price: productPrice
    });
    
    console.log('تم إضافة:', productName, '-', productPrice);
    console.log('عدد المنتجات في السلة:', cart.length);
    
    // إظهار إشعار
    showNotification(productName);
}

// دالة لإظهار إشعار عند الإضافة
function showNotification(productName) {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.textContent = `تمت إضافة ${productName} إلى السلة! ✓`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// إضافة رسوم توضيحية للتمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// إضافة CSS للرسوم التوضيحية
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// دالة للحصول على ملخص السلة
function getCartSummary() {
    return {
        itemCount: cart.length,
        items: cart
    };
}

console.log('%c✓ تم تحميل Gracies Caffee بنجاح!', 'color: #8B4513; font-size: 16px; font-weight: bold;');