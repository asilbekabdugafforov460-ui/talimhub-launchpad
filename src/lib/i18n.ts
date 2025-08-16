import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      // Navigation
      nav: {
        about: "Loyiha haqida",
        features: "Imkoniyatlar",
        investment: "Investitsiya",
        contact: "Aloqa"
      },
      
      // Hero Section
      hero: {
        title: "Ta'limHub – O'zbekiston Yagona Raqamli Ta'lim Ekotizimi",
        subtitle: "Innovatsion ta'lim kelajagini birgalikda quramiz",
        cta1: "Loyihaga qo'shiling",
        cta2: "Investor bo'ling"
      },
      
      // Problem Section
      problems: {
        title: "Bugungi ta'limdagi muammolar",
        items: [
          "Darslar Zoom/Telegram'da → qayta ko'rish imkoni yo'q",
          "Materiallar tartibsiz va chatlarda aralashib ketadi",
          "Motivatsiya yo'qligi → o'quvchilar sustlashadi",
          "O'quv markazlarda ERP va monitoring tizimi yo'q"
        ]
      },
      
      // Solution Section
      solution: {
        title: "Ta'limHub qanday yechim beradi?",
        items: [
          {
            title: "Qulay va motivatsiyalovchi ta'lim muhiti",
            desc: "Zamonaviy texnologiyalar yordamida interaktiv ta'lim jarayoni"
          },
          {
            title: "Mustaqil ustozlarga onlayn daromad va brend qurish",
            desc: "O'qituvchilar uchun keng imkoniyatlar va professional rivojlanish"
          },
          {
            title: "O'quv markazlar uchun mini ERP va monitoring",
            desc: "To'liq avtomatlashtirilgan boshqaruv va hisobot tizimi"
          },
          {
            title: "Ota-onalar uchun real vaqtda nazorat",
            desc: "Farzandlarning o'qish jarayonini kuzatish va SMS xabarnomalar"
          }
        ]
      },
      
      // Features Section
      features: {
        title: "Asosiy imkoniyatlar",
        items: [
          {
            title: "AI Dublyaj",
            desc: "Kurslarni ingliz tilidan o'zbekchaga tarjima va ovoz berish"
          },
          {
            title: "EduSearch",
            desc: "O'quv markazlarni qidirish va taqqoslash tizimi"
          },
          {
            title: "Gamifikatsiya",
            desc: "Coin, badge, reyting tizimi orqali motivatsiya oshirish"
          },
          {
            title: "ERP tizimi",
            desc: "To'lov, hisobot, guruh nazorati - barchasi bir joyda"
          }
        ]
      },
      
      // Coming Soon Section
      comingSoon: {
        title: "Tez orada siz bilan!",
        description: "Ta'limHub hozirda ishlab chiqilmoqda. Tez orada yangi imkoniyatlarni taqdim etamiz.",
        form: {
          name: "Ismingiz",
          email: "Email manzilingiz",
          button: "Yangiliklardan xabardor bo'lish"
        },
        success: "Muvaffaqiyatli ro'yxatdan o'tdingiz!"
      },
      
      // Investment Section
      investment: {
        title: "Bizga sarmoya kiriting va kelajakni birga quring!",
        description: "Ta'limHub – O'zbekistonda ta'limni raqamlashtirish va rivojlantirishga qaratilgan innovatsion loyihadir. Bizning maqsadimiz – har bir o'quvchi va o'qituvchi uchun qulay, samarali va motivatsiyali ekotizim yaratish. Bizga qo'shiling va ta'lim kelajagiga sarmoya kiriting.",
        cta: "Investor Partnership"
      },
      
      // Footer
      footer: {
        about: "Loyiha haqida",
        contact: "Aloqa",
        privacy: "Maxfiylik siyosati",
        copyright: "© 2024 Ta'limHub. Barcha huquqlar himoyalangan."
      }
    }
  },
  
  ru: {
    translation: {
      // Navigation
      nav: {
        about: "О проекте",
        features: "Возможности",
        investment: "Инвестиции",
        contact: "Контакты"
      },
      
      // Hero Section
      hero: {
        title: "Ta'limHub – Единая Цифровая Образовательная Экосистема Узбекистана",
        subtitle: "Вместе строим инновационное будущее образования",
        cta1: "Присоединиться к проекту",
        cta2: "Стать инвестором"
      },
      
      // Problem Section
      problems: {
        title: "Проблемы современного образования",
        items: [
          "Уроки в Zoom/Telegram → нет возможности пересмотра",
          "Материалы неорганизованы и теряются в чатах",
          "Отсутствие мотивации → студенты теряют интерес",
          "В учебных центрах нет ERP и системы мониторинга"
        ]
      },
      
      // Solution Section
      solution: {
        title: "Как Ta'limHub решает эти проблемы?",
        items: [
          {
            title: "Удобная и мотивирующая образовательная среда",
            desc: "Интерактивный учебный процесс с современными технологиями"
          },
          {
            title: "Онлайн доходы и брендинг для независимых преподавателей",
            desc: "Широкие возможности и профессиональное развитие для учителей"
          },
          {
            title: "Мини ERP и мониторинг для учебных центров",
            desc: "Полностью автоматизированная система управления и отчетности"
          },
          {
            title: "Контроль в реальном времени для родителей",
            desc: "Отслеживание учебного процесса детей и SMS уведомления"
          }
        ]
      },
      
      // Features Section
      features: {
        title: "Ключевые возможности",
        items: [
          {
            title: "AI Дубляж",
            desc: "Перевод курсов с английского на узбекский с озвучиванием"
          },
          {
            title: "EduSearch",
            desc: "Система поиска и сравнения учебных центров"
          },
          {
            title: "Геймификация",
            desc: "Система монет, значков и рейтингов для повышения мотивации"
          },
          {
            title: "ERP система",
            desc: "Платежи, отчеты, контроль групп - всё в одном месте"
          }
        ]
      },
      
      // Coming Soon Section
      comingSoon: {
        title: "Скоро с вами!",
        description: "Ta'limHub находится в разработке. Скоро мы представим новые возможности.",
        form: {
          name: "Ваше имя",
          email: "Ваш email",
          button: "Получать новости"
        },
        success: "Вы успешно подписались!"
      },
      
      // Investment Section
      investment: {
        title: "Инвестируйте в нас и вместе строим будущее!",
        description: "Ta'limHub – инновационный проект, направленный на цифровизацию и развитие образования в Узбекистане. Наша цель – создать удобную, эффективную и мотивирующую экосистему для каждого студента и преподавателя. Присоединяйтесь к нам и инвестируйте в будущее образования.",
        cta: "Партнерство с инвесторами"
      },
      
      // Footer
      footer: {
        about: "О проекте",
        contact: "Контакты",
        privacy: "Политика конфиденциальности",
        copyright: "© 2024 Ta'limHub. Все права защищены."
      }
    }
  },
  
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About",
        features: "Features",
        investment: "Investment",
        contact: "Contact"
      },
      
      // Hero Section
      hero: {
        title: "Ta'limHub – Uzbekistan's Unified Digital Education Ecosystem",
        subtitle: "Building the innovative future of education together",
        cta1: "Join the Project",
        cta2: "Become an Investor"
      },
      
      // Problem Section
      problems: {
        title: "Current Education Problems",
        items: [
          "Lessons in Zoom/Telegram → no ability to review",
          "Materials are disorganized and lost in chats",
          "Lack of motivation → students lose interest",
          "Educational centers lack ERP and monitoring systems"
        ]
      },
      
      // Solution Section
      solution: {
        title: "How does Ta'limHub solve these problems?",
        items: [
          {
            title: "Convenient and motivating educational environment",
            desc: "Interactive learning process with modern technologies"
          },
          {
            title: "Online income and branding for independent teachers",
            desc: "Wide opportunities and professional development for educators"
          },
          {
            title: "Mini ERP and monitoring for educational centers",
            desc: "Fully automated management and reporting system"
          },
          {
            title: "Real-time control for parents",
            desc: "Track children's learning process and SMS notifications"
          }
        ]
      },
      
      // Features Section
      features: {
        title: "Key Features",
        items: [
          {
            title: "AI Dubbing",
            desc: "Translate courses from English to Uzbek with voice-over"
          },
          {
            title: "EduSearch",
            desc: "Educational center search and comparison system"
          },
          {
            title: "Gamification",
            desc: "Coin, badge, and rating system to boost motivation"
          },
          {
            title: "ERP System",
            desc: "Payments, reports, group control - all in one place"
          }
        ]
      },
      
      // Coming Soon Section
      comingSoon: {
        title: "Coming Soon!",
        description: "Ta'limHub is currently in development. We will soon introduce new opportunities.",
        form: {
          name: "Your name",
          email: "Your email",
          button: "Stay updated"
        },
        success: "Successfully subscribed!"
      },
      
      // Investment Section
      investment: {
        title: "Invest in us and build the future together!",
        description: "Ta'limHub is an innovative project aimed at digitizing and developing education in Uzbekistan. Our goal is to create a convenient, efficient, and motivating ecosystem for every student and teacher. Join us and invest in the future of education.",
        cta: "Investor Partnership"
      },
      
      // Footer
      footer: {
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
        copyright: "© 2024 Ta'limHub. All rights reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', // default language
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;