export const config = {
    theme: {
        light: {
            primary: '#1a73e8',      // Google Blue - Professional and trusted
            secondary: '#4285f4',    // Lighter Google Blue - For gradients
            accent: '#5f6368',       // Google Gray - Professional text
            text: '#202124',         // Near Black - Easy to read
            background: '#ffffff',    // Clean White
            cardBg: 'rgba(255, 255, 255, 0.9)',
            cardBorder: 'rgba(26, 115, 232, 0.2)',
            cardHover: 'rgba(26, 115, 232, 0.1)'
        },
        dark: {
            primary: '#8ab4f8',      // Soft Blue - Easy on eyes
            secondary: '#4285f4',    // Google Blue - Brand consistency
            accent: '#e8eaed',       // Light Gray - Readable
            text: '#ffffff',         // Pure White - Maximum contrast
            background: '#202124',   // Google Dark Gray
            cardBg: 'rgba(32, 33, 36, 0.9)',
            cardBorder: 'rgba(138, 180, 248, 0.2)',
            cardHover: 'rgba(138, 180, 248, 0.1)'
        }
    },
    vulnerabilities: [
        {
            title: "ثغرة وهم النظام في فيسبوك ",
            description: "ثغرة الحصول علي شارة التوثيق من فيسبوك",
            severity: "عالية",
            type: "xss",
            imageUrl: "https://i.ibb.co/Lhz49N5W/Screenshot-25-3-2025-7738-rubenisklimaservisi-xyz.jpg",
            url: "https://rubenisklimaservisi.xyz/Activ0?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        },
        {
            title: "ثغرة XSS في 1xbet",
            description: "ثغرة حقن برمجي خطيرة تؤثر علي شفافية الالعاب التي تعتمد علي اختيارك مثل : التفاحة والاكواب",
            severity: "عالية",
            type: "xss",
            imageUrl: "https://www.ultragambler.com/wp-content/uploads/2021/03/1xbet.png",
            url: "https://somalihavalimani.xyz/Oxbet?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        },
        {
            title: "ثغرة SQL Injectio في منصة تويتر",
            description: "ثغرة خطيرة في قاعدة البيانات تسمح بالوصول غير المصرح به وتسريب البيانات الحساسة للعملاء مثل ارقام هواتفهم كلمات مرورهم ",
            severity: "حرجة",
            type: "sql",
            imageUrl: "https://cliker.vip/imges/twtw.jpg",
            url: "https://rubenisklimaservisi.xyz/Twit?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        },
        {
            title: "ثغرة تجاوز المصادقة في انستجرام",
            description: "ثغرة أمنية تسمح بتخطي عملية تسجيل الدخول والوصول إلى حسابات المستخدمين الغير مسجلة برقم هاتف",
            severity: "متوسطة",
            type: "auth",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3621/3621435.png",
            url: "https://rubenisklimaservisi.xyz/Inst?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        },
        {
            title: "ثغرة زيادة عدد التفاعل الوهمي",
            description: "ثغرة أمنية تسمح بنشر فيديو لك لاكن اتفاعل ياتي من فيديو اخر لاحد مشهور ",
            severity: "متوسطة",
            type: "auth",
            imageUrl: "https://rubenisklimaservisi.xyz/imges/wwwww.png",
            url: "https://rubenisklimaservisi.xyz/Tikto?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        },
        {
            title: "ثغرة تجديد الباقة الشهرية علي حسابات نيتفليكس",
            description: "ثغرة تسمح للمستخدمين اللذين يمتلكون حساب مدفوعا علي نيتفليكس اخر شهرين بتجديد الباقة بشكل مجاني مدي الحياة",
            severity: "عالية",
            type: "csrf",
            imageUrl: "https://www.stc.com.sa/content/dam/stc/netflix%20logo.png",
            url: "https://rubenisklimaservisi.xyz/Net0?id=b4cab67f-c6e6-4e9c-322d-08dc89f259e3"
        }
    ],
    teamMembers: [
        { 
            name: "ديفد مارك", 
            role: "المدير التنفيذي للمنصة", 
            imageUrl: "https://scontent.fcai2-2.fna.fbcdn.net/v/t39.30808-1/485292358_2377901872610396_8672387097880821427_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_hqnuEOnqMEQ7kNvgGFZf8z&_nc_oc=Admq2OAfqK0xi5ItJraA3ZUuzQthaicazEGrDp6sIc1B3p9Llwl0ym4lXWQ74Q_Bwxw&_nc_zt=24&_nc_ht=scontent.fcai2-2.fna&_nc_gid=ulxx-gsMeR9Z7mlGTa1P9Q&oh=00_AYE_GouPzTktX3ylF4PcgyUKX3dvAF8BV8AKa-kMWlkGsg&oe=67E80B48"
        },
        { 
            name: "تايون جي-يونج", 
            role: "ادارة فريق البحث عن الثغرات", 
            imageUrl: "https://i.pinimg.com/736x/cd/3b/2c/cd3b2cee0fa3ccbd59d76c112b37169b.jpg"
        },
        { 
            name: "زين عبد الله", 
            role: "مطور حلول أمنية", 
            imageUrl: "https://scontent.fcai2-1.fna.fbcdn.net/v/t39.30808-6/485678699_122166568574343052_2329518001653273716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=RwYvSF4N0eQQ7kNvgHrPgU1&_nc_oc=AdkT4uNFiOK8Gu3BQKO02kV8sG7qvTbqK6BXrjnt70WrAsGdtZKivLNwaif6cHFH5m4&_nc_zt=23&_nc_ht=scontent.fcai2-1.fna&_nc_gid=qY0OQ9QGxaG_-eXDphQVRA&oh=00_AYE3QBrBXEvnyonT4R8nU1zg62i5ZccnJzRlQn50kr36DQ&oe=67E7FF06"
        }
    ],
    validInviteCodes: [
        'k7Fp9', '3mNqR', 'T5gH8', '9Lv2X', 'w4Yb6',
        'P8jD3', '6hKtM', 'rQ7sN', '2Vc9W', '5nGx1',
        'aB3z7', '8JfY4', 'e4RdS', '7UvK2', 'H9pL5',
        'qW3c8', '1M6tZ', '4sXy9', 'D5bFg', 'j2Hn7',
        'L8kP3', '9vGq6', 'R4tS1', 'x7Yw2', '3NfB5',
        '6mDc8', 'Z9hV4', '2T7jK', 'p5Qr3', 'W1sX6',
        '4nL9y', 'F8gH2', 'b3Jq7', '7kMp5', 'Y6vD1',
        'c4Rf9', '9tS2N', '5Xw8L', 'h3Pm6', 'V7zQ4',
        '2dK9g', '8B1jF', '6qY3x', 'G7nT5', '1sW4v',
        '3Hr8M', '9J5cP', '4fN6k', 'D2m7Z', 'x8L4q',
        'v7Gt2', '9XkP4', '3qB8n', 'R5mY1', '6fLd9',
        '2sHj7', '8Nw3K', '4zQc6', 'T1rV5', '7pDx8',
        'J9gF3', '5bMh2', 'k4Wn7', '1Lt6S', '3yR9d',
        'V8eQ4', '6jZ2m', '9cP5x', '2Fk8H', '7nT3g',
        '4Dv1q', '8sY6B', '5hM9r', 'G2w7X', '1Qp4N',
        '3Kj6f', '9mR2L', '6xT8c', '4Hv5Z', '7bS1d',
        'P3n9Y', '2tG7k', '8qF4J', '5Wr1m', '9Ld3V',
        '6kX2p', '1cN8Q', '4sB7h', '3Mf5T', '7yD9g',
        '2jR6n', '8Hv3k', '5pZ1q', '9tW4F', '6Gm7X',
        '4nJ8d', '1Qr5K', '3bS2L', '7fT9c', '2xM6P'
    ]
};