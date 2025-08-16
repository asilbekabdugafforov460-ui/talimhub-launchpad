import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      nav: {
        about: "Loyiha haqida",
        features: "Imkoniyatlar",
        contact: "Aloqa",
        investment: "Investitsiya"
      },
      hero: {
        title: "Ta'limHub – O'zbekiston Yagona Raqamli Ta'lim Ekotizimi",
        subtitle: "Innovatsion ta'lim kelajagini birgalikda quramiz",
        cta1: "Loyihaga qo'shiling",
        cta2: "Investor bo'ling"
      },
      problems: {
        title: "Bugungi ta'limdagi muammolar",
        items: [
          "Darslar Zoom/Telegram'da → qayta ko'rish imkoni yo'q",
          "Materiallar tartibsiz va chatlarda aralashib ketadi", 
          "Motivatsiya yo'qligi → o'quvchilar sustlashadi",
          "O'quv markazlarda ERP va monitoring tizimi yo'q"
        ]
      },
      solution: {
        title: "Ta'limHub qanday yechim beradi?",
        items: [
          {
            title: "Qulay va motivatsiyalovchi ta'lim muhiti",
            desc: "Interaktiv darslar, gamifikatsiya va zamonaviy ta'lim metodlari bilan ta'lim jarayonini yanada qiziqarli qiling"
          },
          {
            title: "Mustaqil ustozlarga onlayn daromad va brend qurish imkoniyati",
            desc: "O'z kurslaringizni yarating, taqdim eting va barqaror daromad oling"
          },
          {
            title: "O'quv markazlar uchun mini ERP va monitoring",
            desc: "Guruhlar, to'lovlar, hisobotlar va barcha jarayonlarni bir joyda boshqaring"
          },
          {
            title: "Ota-onalar uchun real vaqtda nazorat va SMS bildirishnoma",
            desc: "Farzandingizning ta'lim jarayonini real vaqtda kuzatib boring va yangilanishlardan xabardor bo'ling"
          }
        ]
      },
      features: {
        title: "Asosiy imkoniyatlar",
        subtitle: "Ta'limHub platformasining innovatsion xususiyatlari",
        items: [
          {
            title: "AI Dublyaj",
            desc: "Ingliz tilidagi kurslarni avtomatik ravishda o'zbek tiliga tarjima qilish va ovoz berish"
          },
          {
            title: "EduSearch",
            desc: "O'quv markazlarni qidirish va taqqoslash tizimi"
          },
          {
            title: "Gamifikatsiya",
            desc: "Coin, badge, reyting va motivatsion tizim"
          },
          {
            title: "ERP tizimi",
            desc: "To'lov, hisobot, guruh nazorati va boshqaruv"
          }
        ]
      },
      comingSoon: {
        title: "Tez orada siz bilan!",
        subtitle: "Ta'limHub hozirda ishlab chiqilmoqda. Tez orada yangi imkoniyatlarni taqdim etamiz.",
        form: {
          name: "Ismingiz",
          email: "Email manzilingiz", 
          submit: "Yangiliklardan xabardor bo'lish",
          success: "Muvaffaqiyatli ro'yxatga olindingiz!"
        },
        progress: {
          mvp: "MVP",
          beta: "Beta Test",
          launch: "Ishga tushirish"
        }
      },
      investment: {
        title: "Bizga sarmoya kiriting va kelajakni birga quring!",
        subtitle: "Ta'lim sohasidagi eng yirik imkoniyat",
        description: "Ta'limHub – O'zbekistonda ta'limni raqamlashtirish va rivojlantirishga qaratilgan innovatsion loyihadir. Bizning maqsadimiz – har bir o'quvchi va o'qituvchi uchun qulay, samarali va motivatsiyali ekotizim yaratish. Bizga qo'shiling va ta'lim kelajagiga sarmoya kiriting.",
        cta: "Investor Partnership",
        stats: {
          students: "50K+ Kutilayotgan foydalanuvchilar",
          centers: "500+ O'quv markazlari", 
          growth: "300% Yillik o'sish prognozi",
          market: "$2B Bozor potentsiali"
        },
        highlights: [
          "O'zbekistonda birinchi yagona raqamli ta'lim ekotizimi",
          "AI dublyaj va zamonaviy texnologiyalar",
          "Barcha ishtirokchilar uchun win-win model",
          "Milliylarcha bozor potentsiali va masshtablilik"
        ],
        form: {
          name: "Ismingiz",
          email: "Email",
          company: "Kompaniya",
          investment: "Investitsiya miqdori",
          message: "Xabar",
          submit: "Investor Partnership",
          success: "So'rovingiz muvaffaqiyatli yuborildi!"
        }
      },
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
      nav: {
        about: "О проекте",
        features: "Возможности",
        contact: "Контакты", 
        investment: "Инвестиции"
      },
      hero: {
        title: "Ta'limHub – Единая цифровая образовательная экосистема Узбекистана",
        subtitle: "Создаем будущее инновационного образования вместе",
        cta1: "Присоединиться к проекту",
        cta2: "Стать инвестором"
      },
      problems: {
        title: "Проблемы современного образования",
        items: [
          "Уроки в Zoom/Telegram → нет возможности пересмотра",
          "Материалы разбросаны и теряются в чатах",
          "Отсутствие мотивации → студенты теряют интерес", 
          "В учебных центрах нет ERP и системы мониторинга"
        ]
      },
      solution: {
        title: "Как Ta'limHub решает эти проблемы?",
        items: [
          {
            title: "Удобная и мотивирующая учебная среда",
            desc: "Интерактивные уроки, геймификация и современные методы обучения для увлекательного процесса"
          },
          {
            title: "Онлайн-доходы и создание бренда для независимых преподавателей",
            desc: "Создавайте свои курсы, представляйте их и получайте стабильный доход"
          },
          {
            title: "Мини-ERP и мониторинг для учебных центров",
            desc: "Управляйте группами, платежами, отчетами и всеми процессами в одном месте"
          },
          {
            title: "Контроль в реальном времени и SMS-уведомления для родителей",
            desc: "Отслеживайте учебный процесс вашего ребенка в реальном времени и получайте обновления"
          }
        ]
      },
      features: {
        title: "Ключевые возможности",
        subtitle: "Инновационные функции платформы Ta'limHub",
        items: [
          {
            title: "AI Дубляж",
            desc: "Автоматический перевод англоязычных курсов на узбекский язык с озвучиванием"
          },
          {
            title: "EduSearch",
            desc: "Система поиска и сравнения учебных центров"
          },
          {
            title: "Геймификация",
            desc: "Монеты, значки, рейтинг и мотивационная система"
          },
          {
            title: "ERP система",
            desc: "Платежи, отчеты, контроль групп и управление"
          }
        ]
      },
      comingSoon: {
        title: "Скоро с вами!",
        subtitle: "Ta'limHub находится в разработке. Скоро мы представим новые возможности.",
        form: {
          name: "Ваше имя",
          email: "Ваш email",
          submit: "Быть в курсе новостей",
          success: "Вы успешно подписались!"
        },
        progress: {
          mvp: "MVP", 
          beta: "Бета-тест",
          launch: "Запуск"
        }
      },
      investment: {
        title: "Инвестируйте в нас и создавайте будущее вместе!",
        subtitle: "Крупнейшая возможность в сфере образования",
        description: "Ta'limHub – это инновационный проект, направленный на цифровизацию и развитие образования в Узбекистане. Наша цель – создать удобную, эффективную и мотивирующую экосистему для каждого студента и преподавателя. Присоединяйтесь к нам и инвестируйте в будущее образования.",
        cta: "Партнерство с инвесторами",
        stats: {
          students: "50K+ Ожидаемых пользователей",
          centers: "500+ Учебных центров",
          growth: "300% Прогноз годового роста", 
          market: "$2B Потенциал рынка"
        },
        highlights: [
          "Первая единая цифровая образовательная экосистема в Узбекистане",
          "AI дубляж и современные технологии",
          "Win-win модель для всех участников",
          "Национальный рыночный потенциал и масштабируемость"
        ],
        form: {
          name: "Ваше имя",
          email: "Email",
          company: "Компания",
          investment: "Сумма инвестиций",
          message: "Сообщение",
          submit: "Партнерство с инвесторами",
          success: "Ваш запрос успешно отправлен!"
        }
      },
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
      nav: {
        about: "About",
        features: "Features",
        contact: "Contact",
        investment: "Investment"
      },
      hero: {
        title: "Ta'limHub – Uzbekistan's Unified Digital Education Ecosystem",
        subtitle: "Building the future of innovative education together",
        cta1: "Join the Project",
        cta2: "Become an Investor"
      },
      problems: {
        title: "Current Educational Problems",
        items: [
          "Classes on Zoom/Telegram → no replay option",
          "Materials scattered and lost in chats",
          "Lack of motivation → students lose interest",
          "No ERP and monitoring system in learning centers"
        ]
      },
      solution: {
        title: "How Ta'limHub Solves These Problems?",
        items: [
          {
            title: "Convenient and motivating learning environment",
            desc: "Interactive lessons, gamification and modern teaching methods for an engaging learning process"
          },
          {
            title: "Online income and brand building opportunities for independent teachers",
            desc: "Create your courses, present them and earn stable income"
          },
          {
            title: "Mini ERP and monitoring for learning centers",
            desc: "Manage groups, payments, reports and all processes in one place"
          },
          {
            title: "Real-time control and SMS notifications for parents",
            desc: "Track your child's learning process in real-time and stay updated with notifications"
          }
        ]
      },
      features: {
        title: "Key Features",
        subtitle: "Innovative capabilities of Ta'limHub platform",
        items: [
          {
            title: "AI Dubbing",
            desc: "Automatic translation of English courses to Uzbek with voice-over"
          },
          {
            title: "EduSearch",
            desc: "Search and comparison system for educational centers"
          },
          {
            title: "Gamification",
            desc: "Coins, badges, rating and motivational system"
          },
          {
            title: "ERP System",
            desc: "Payment, reporting, group control and management"
          }
        ]
      },
      comingSoon: {
        title: "Coming Soon!",
        subtitle: "Ta'limHub is currently under development. We will present new opportunities soon.",
        form: {
          name: "Your name",
          email: "Your email",
          submit: "Stay updated with news",
          success: "Successfully subscribed!"
        },
        progress: {
          mvp: "MVP",
          beta: "Beta Test",
          launch: "Launch"
        }
      },
      investment: {
        title: "Invest in us and build the future together!",
        subtitle: "The biggest opportunity in education sector",
        description: "Ta'limHub is an innovative project aimed at digitalizing and developing education in Uzbekistan. Our goal is to create a convenient, efficient and motivating ecosystem for every student and teacher. Join us and invest in the future of education.",
        cta: "Investor Partnership",
        stats: {
          students: "50K+ Expected users",
          centers: "500+ Educational centers",
          growth: "300% Annual growth forecast",
          market: "$2B Market potential"
        },
        highlights: [
          "First unified digital education ecosystem in Uzbekistan",
          "AI dubbing and modern technologies",
          "Win-win model for all participants",
          "National market potential and scalability"
        ],
        form: {
          name: "Your name",
          email: "Email",
          company: "Company",
          investment: "Investment amount",
          message: "Message",
          submit: "Investor Partnership",
          success: "Your request has been sent successfully!"
        }
      },
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