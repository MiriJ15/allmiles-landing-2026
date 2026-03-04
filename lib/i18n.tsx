"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "en" | "ru" | "az";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  az: "AZ",
};

export type PolicySection = {
  title: string;
  body: string;
  items?: { label: string; text: string }[];
};

export type PolicyDoc = {
  link: string;
  title: string;
  sections: PolicySection[];
};

export interface Translations {
  nav: {
    howItWorks: string;
    destinations: string;
    partners: string;
    aboutUs: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    statsMonthly: string;
    statsRoutes: string;
    statsRedemption: string;
    departureBoard: string;
    colFrom: string;
    colTo: string;
    colGate: string;
    colStatus: string;
    statusBoarding: string;
    statusOnTime: string;
    statusGateOpen: string;
    statusPriority: string;
    routeSync: string;
    boardingPassPreview: string;
    seat: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Label: string;
    step1Title: string;
    step1Desc: string;
    step2Label: string;
    step2Title: string;
    step2Desc: string;
    step3Label: string;
    step3Title: string;
    step3Desc: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    fare: string;
    flyTo: (city: string, miles: string) => string;
    cityNames: Record<string, string>;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  cta: {
    label: string;
    headline: string;
    subtitle: string;
    contactUs: string;
  };
  contact: {
    address: string;
  };
  footer: {
    copyright: string;
  };
  about: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    body: string;
    voen: string;
    missionTitle: string;
    missionBody: string;
    whyTitle: string;
    whyItems: [string, string, string, string];
    contactTitle: string;
  };
  privacy: {
    link: string;
    title: string;
    body: string;
  };
  terms: PolicyDoc;
  cancellation: PolicyDoc;
  returnPolicy: PolicyDoc;
}

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      howItWorks: "How It Works",
      destinations: "Destinations",
      partners: "Partners",
      aboutUs: "About Us",
    },
    hero: {
      headline: "Your Gateway to Global Adventures.",
      subtitle:
        "Discover tailored vacation packages, exclusive flight deals, and premium hotel stays. We handle the planning so you can simply enjoy the takeoff.",
      statsMonthly: "Happy Travelers",
      statsRoutes: "Global Destinations",
      statsRedemption: "Expert Support",
      departureBoard: "Live Departure Board",
      colFrom: "From",
      colTo: "To",
      colGate: "Gate",
      colStatus: "Status",
      statusBoarding: "Boarding",
      statusOnTime: "On Time",
      statusGateOpen: "Gate Open",
      statusPriority: "Priority",
      routeSync: "Route Sync Live",
      boardingPassPreview: "Boarding Pass Preview",
      seat: "Seat 2A | Priority Lane",
    },
    howItWorks: {
      title: "How It Works",
      subtitle:
        "A streamlined 3-step process designed for a seamless journey from planning and booking to your final departure.",
      step1Label: "Step 01",
      step1Title: "Choose Your Destination",
      step1Desc:
        "Browse our curated selection of global destinations, from relaxing beach resorts to vibrant city breaks.",
      step2Label: "Step 02",
      step2Title: "Customize Your Trip",
      step2Desc:
        "Work with our travel experts to perfectly tailor flights, accommodations, and tours to your preferences and budget.",
      step3Label: "Step 03",
      step3Title: "Pack & Depart",
      step3Desc:
        "Receive your comprehensive itinerary and travel documents in one place. Your dream vacation is ready.",
    },
    destinations: {
      title: "Popular Destinations",
      subtitle:
        "From quick city breaks to exotic long-haul escapes, see where our expertly crafted tours can take you next.",
      fare: "AllTrips Fare",
      flyTo: (city, miles) => `Fly to ${city} from ${miles} ₼`,
      cityNames: {
        Budapest: "Budapest",
        Rome: "Rome",
        Tbilisi: "Tbilisi",
        Aktau: "Aktau",
        Izmir: "Izmir",
        Istanbul: "Istanbul",
        Tashkent: "Tashkent",
        Antalya: "Antalya",
        "Abu Dhabi": "Abu Dhabi",
        London: "London",
        Prague: "Prague",
        "New Delhi": "New Delhi",
        Milan: "Milan",
        Moscow: "Moscow",
        Jeddah: "Jeddah",
        Bishkek: "Bishkek",
        Paris: "Paris",
        Beijing: "Beijing",
        "Saint Petersburg": "Saint Petersburg",
        Tokyo: "Tokyo",
      },
    },
    partners: {
      title: "Partner Airlines",
      subtitle:
        "Built for scale with regional leaders and world-class global carriers.",
    },
    cta: {
      label: "Start your journey",
      headline: "Make Your Dream Trip a Reality.",
      subtitle:
        "Unlock exclusive deals, premium routes, and a smarter way to travel with our expert guidance.",
      contactUs: "Contact Us",
    },
    footer: {
      copyright: "© 2026 AllTrips. Crafted for global travelers.",
    },
    privacy: {
      link: "Privacy Policy",
      title: "Privacy Policy",
      body: "Currently, the Alltrips website operates as an informational platform and does not process online payments. In the event that online payment functionality is introduced in the future, please be assured that Alltrips does not collect, process, or store your bank card details on our servers. Any future transactions will be handled exclusively through secure, certified third-party payment gateways.",
    },
    terms: {
      link: "Terms & Conditions",
      title: "Terms and Conditions",
      sections: [
        {
          title: "1. General Provisions and Services",
          body: "Alltrips operates as a travel agency providing services that include, but are not limited to, flight tickets, tour packages, hotel bookings, transfers, and visa assistance. We act as an intermediary between you (the customer) and third-party service providers (airlines, hotels, transfer companies, museums, etc.).",
        },
        {
          title: "2. Limitation of Liability",
          body: "Because Alltrips acts as an agent for third-party providers, we are not legally liable for any actions, omissions, errors, delays, or cancellations made by these third parties. We are not responsible for any personal injury, property damage, or additional expenses incurred due to the failure of any third-party provider to deliver their services as expected.",
        },
        {
          title: "3. Governing Law",
          body: "These terms and conditions are governed by and construed in accordance with the laws of the Republic of Azerbaijan. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of the Republic of Azerbaijan.",
        },
      ],
    },
    cancellation: {
      link: "Cancellation Policy",
      title: "Cancellation and Payment Policy",
      sections: [
        {
          title: "1. Payment Terms",
          body: "All bookings require full upfront payment at the time of confirmation. All prices and transactions are processed in Azerbaijani Manat (AZN).",
        },
        {
          title: "2. Cancellation Policy",
          body: "Cancellations are strictly governed by the rules and regulations of the specific third-party provider (e.g., the airline or hotel).",
          items: [
            { label: "Non-Refundable Bookings", text: "Many fares, deposits, and packages are strictly non-refundable according to the provider's rules. In such cases, Alltrips cannot issue a refund." },
            { label: "Partial Refunds", text: "If the third-party provider permits a partial refund, Alltrips will process the refund according to their specified terms and amounts." },
          ],
        },
      ],
    },
    returnPolicy: {
      link: "Return & Exchange Policy",
      title: "Return, Exchange, and Modification Policy",
      sections: [
        {
          title: "1. Changes to Bookings",
          body: "Requests to change or exchange tickets, hotel dates, or other booking details are subject entirely to the rules and availability of the respective third-party provider.",
        },
        {
          title: "2. Fees and Penalties",
          body: "If a change, upgrade, or modification is permitted by the provider, the following charges will apply:",
          items: [
            { label: "Provider Fees", text: "You are responsible for all fines, penalties, fare differences, and upgrade fees set by the airline, hotel, transfer company, or other representatives." },
            { label: "Alltrips Service Charge", text: "In addition to the third-party fees, Alltrips applies an administrative service charge for processing any modifications to your booking." },
          ],
        },
      ],
    },
    about: {
      eyebrow: "About Us",
      headline1: "AllTrips — Your Dream",
      headline2: "Trip, Built by Us",
      body: "AllTrips is a Baku-based travel agency. We help our clients plan unforgettable journeys to the world's finest destinations — from airline tickets and hotel reservations to tour packages and visa services, we handle everything for you.",
      voen: '"ALL TRIPS MMC" Şirkəti (VÖEN: 1502660521)',
      missionTitle: "Our Mission",
      missionBody: "Making the world accessible to everyone. Whether it's a budget Tbilisi getaway or a luxury Dubai package — we find the best option for your needs and take all the stress out of the process.",
      whyTitle: "Why AllTrips?",
      whyItems: [
        "10,000+ happy travelers",
        "120+ active routes",
        "24/7 customer support",
        "Competitive prices & transparent service",
      ],
      contactTitle: "Contact Us",
    },
    contact: {
      address: "84 Alimardan Bey Topchibashov St, Baku",
    },
  },

  ru: {
    nav: {
      howItWorks: "Как это работает",
      destinations: "Направления",
      partners: "Партнёры",
      aboutUs: "О нас",
    },
    hero: {
      headline: "Ваш Путеводитель в Мировые Приключения.",
      subtitle:
        "Откройте для себя индивидуальные турпакеты, эксклюзивные предложения на перелеты и проживание в премиум-отелях. Мы берем планирование на себя, чтобы вы могли просто наслаждаться полетом.",
      statsMonthly: "Счастливых путешественников",
      statsRoutes: "Мировых направлений",
      statsRedemption: "Поддержка экспертов",
      departureBoard: "Табло вылетов",
      colFrom: "Откуда",
      colTo: "Куда",
      colGate: "Выход",
      colStatus: "Статус",
      statusBoarding: "Посадка",
      statusOnTime: "По расписанию",
      statusGateOpen: "Выход открыт",
      statusPriority: "Приоритет",
      routeSync: "Синхронизация",
      boardingPassPreview: "Посадочный талон",
      seat: "Место 2A | Приоритет",
    },
    howItWorks: {
      title: "Как это работает",
      subtitle:
        "Оптимизированный 3-этапный процесс, созданный для идеального путешествия от планирования и бронирования до самого вылета.",
      step1Label: "Шаг 01",
      step1Title: "Выберите Направление",
      step1Desc:
        "Просмотрите нашу тщательно подобранную коллекцию мировых направлений, от пляжных курортов до ярких городских туров.",
      step2Label: "Шаг 02",
      step2Title: "Настройте Свою Поездку",
      step2Desc:
        "Работайте с нашими экспертами по туризму, чтобы идеально подобрать рейсы, отели и туры под ваши предпочтения и бюджет.",
      step3Label: "Шаг 03",
      step3Title: "Собирайте Вещи и В Путь",
      step3Desc:
        "Получите полный маршрут и проездные документы в одном месте. Ваш отпуск мечты готов.",
    },
    destinations: {
      title: "Популярные направления",
      subtitle:
        "От коротких городских туров до экзотических дальних путешествий — посмотрите, куда вас могут привести наши профессионально составленные туры.",
      fare: "Тариф AllTrips",
      flyTo: (city, miles) => `Летите в ${city} от ${miles} ₼`,
      cityNames: {
        Budapest: "Будапешт",
        Rome: "Рим",
        Tbilisi: "Тбилиси",
        Aktau: "Актау",
        Izmir: "Измир",
        Istanbul: "Стамбул",
        Tashkent: "Ташкент",
        Antalya: "Анталья",
        "Abu Dhabi": "Абу-Даби",
        London: "Лондон",
        Prague: "Прага",
        "New Delhi": "Нью-Дели",
        Milan: "Милан",
        Moscow: "Москва",
        Jeddah: "Джидда",
        Bishkek: "Бишкек",
        Paris: "Париж",
        Beijing: "Пекин",
        "Saint Petersburg": "Санкт-Петербург",
        Tokyo: "Токио",
      },
    },
    partners: {
      title: "Авиакомпании-партнёры",
      subtitle:
        "Масштабируемая система с региональными лидерами и ведущими мировыми перевозчиками.",
    },
    cta: {
      label: "Начните своё путешествие",
      headline: "Воплотите путешествие мечты в реальность.",
      subtitle:
        "Откройте для себя эксклюзивные предложения, премиум-маршруты и более умный способ путешествовать с нашей экспертной поддержкой.",
      contactUs: "Свяжитесь с нами",
    },
    footer: {
      copyright: "© 2026 AllTrips. Создано для путешественников со всего мира.",
    },
    privacy: {
      link: "Политика конфиденциальности",
      title: "Политика конфиденциальности",
      body: "В настоящее время веб-сайт Alltrips работает как информационная платформа (сайт-визитка) и не обрабатывает онлайн-платежи. В случае добавления функции онлайн-оплаты в будущем, будьте уверены, что Alltrips не собирает, не обрабатывает и не хранит данные ваших банковских карт на своих серверах. Все будущие транзакции будут обрабатываться исключительно через безопасные, сертифицированные сторонние платёжные шлюзы.",
    },
    terms: {
      link: "Условия и положения",
      title: "Условия и положения",
      sections: [
        {
          title: "1. Общие положения и услуги",
          body: "Alltrips действует как туристическое агентство, предоставляющее услуги, включая, помимо прочего, авиабилеты, турпакеты, бронирование отелей, трансферы и визовую поддержку. Мы выступаем в качестве посредника между вами (клиентом) и сторонними поставщиками услуг (авиакомпаниями, отелями, трансферными компаниями, музеями и т.д.).",
        },
        {
          title: "2. Ограничение ответственности",
          body: "Поскольку Alltrips действует как агент сторонних поставщиков, мы не несем юридической ответственности за любые действия, бездействие, ошибки, задержки или отмены со стороны этих третьих лиц. Мы не несем ответственности за любые телесные повреждения, материальный ущерб или дополнительные расходы, понесенные из-за неспособности любого стороннего поставщика предоставить свои услуги должным образом.",
        },
        {
          title: "3. Применимое право",
          body: "Настоящие условия регулируются и толкуются в соответствии с законодательством Азербайджанской Республики. Любые споры, возникающие из настоящих условий, подлежат исключительной юрисдикции судов Азербайджанской Республики.",
        },
      ],
    },
    cancellation: {
      link: "Политика отмены",
      title: "Политика отмены и оплаты",
      sections: [
        {
          title: "1. Условия оплаты",
          body: "Все бронирования требуют полной предоплаты в момент подтверждения. Все цены и транзакции обрабатываются в азербайджанских манатах (AZN).",
        },
        {
          title: "2. Политика отмены",
          body: "Отмена бронирования строго регулируется правилами и нормами конкретного стороннего поставщика (например, авиакомпании или отеля).",
          items: [
            { label: "Невозвратные бронирования", text: "Многие тарифы, депозиты и пакеты являются строго невозвратными в соответствии с правилами поставщика. В таких случаях Alltrips не может осуществить возврат средств." },
            { label: "Частичный возврат", text: "Если сторонний поставщик разрешает частичный возврат, Alltrips обработает возврат в соответствии с их указанными условиями и суммами." },
          ],
        },
      ],
    },
    returnPolicy: {
      link: "Возврат и обмен",
      title: "Политика возврата, обмена и внесения изменений",
      sections: [
        {
          title: "1. Изменения в бронировании",
          body: "Запросы на изменение или обмен билетов, дат проживания в отеле или других деталей бронирования полностью зависят от правил и наличия мест у соответствующего стороннего поставщика.",
        },
        {
          title: "2. Сборы и штрафы",
          body: "Если поставщик разрешает изменение, повышение класса обслуживания (апгрейд) или модификацию, будут применяться следующие сборы:",
          items: [
            { label: "Сборы поставщика", text: "Вы несете ответственность за все штрафы, разницу в тарифах и сборы за повышение класса обслуживания, установленные авиакомпанией, отелем, трансферной компанией или другими представителями." },
            { label: "Сервисный сбор Alltrips", text: "В дополнение к сборам третьих лиц, Alltrips взимает административный сервисный сбор за обработку любых изменений в вашем бронировании." },
          ],
        },
      ],
    },
    about: {
      eyebrow: "О нас",
      headline1: "AllTrips — Путешествие",
      headline2: "Мечты Создаём Мы",
      body: "AllTrips — туристическое агентство из Баку. Мы помогаем клиентам планировать незабываемые поездки в лучшие уголки мира — от авиабилетов и бронирования отелей до турпакетов и визовых услуг, мы берём всё на себя.",
      voen: '"ALL TRIPS MMC" Şirkəti (VÖEN: 1502660521)',
      missionTitle: "Наша миссия",
      missionBody: "Сделать мир доступным для каждого. Будь то бюджетная поездка в Тбилиси или роскошный тур в Дубай — мы находим лучший вариант под ваши нужды и берём весь стресс на себя.",
      whyTitle: "Почему AllTrips?",
      whyItems: [
        "10 000+ довольных путешественников",
        "120+ активных маршрутов",
        "Поддержка 24/7",
        "Конкурентные цены и прозрачный сервис",
      ],
      contactTitle: "Связаться с нами",
    },
    contact: {
      address: "ул. Алимардан Бей Топчубашов, 84, Баку",
    },
  },

  az: {
    nav: {
      howItWorks: "Necə işləyir",
      destinations: "İstiqamətlər",
      partners: "Tərəfdaşlar",
      aboutUs: "Haqqımızda",
    },
    hero: {
      headline: "Qlobal Macəraləra Açılan Qapınız.",
      subtitle:
        "Sizə özəl tətil paketləri, eksklüziv uçuş təklifləri və premium otel rezervasiyalarını kəşf edin. Siz sadəcə uçuşdan zövq alın, planlaşdırmanı bizə buraxın.",
      statsMonthly: "Xoşbəxt Səyahətçi",
      statsRoutes: "Qlobal İstiqamət",
      statsRedemption: "Ekspert Dəstəyi",
      departureBoard: "Canlı uçuş lövhəsi",
      colFrom: "Haradan",
      colTo: "Hara",
      colGate: "Qapı",
      colStatus: "Status",
      statusBoarding: "Minmə",
      statusOnTime: "Vaxtında",
      statusGateOpen: "Qapı açıqdır",
      statusPriority: "Prioritet",
      routeSync: "Marşrut sinxron",
      boardingPassPreview: "Boarding kartı",
      seat: "Yer 2A | Prioritet keçid",
    },
    howItWorks: {
      title: "Necə işləyir",
      subtitle:
        "Planlaşdırma və sifarişdən tutmuş yola düşməyə qədər qüsursuz bir səyahət üçün nəzərdə tutulmuş sadələşdirilmiş 3 addımlıq proses.",
      step1Label: "Addım 01",
      step1Title: "İstiqamətinizi Seçin",
      step1Desc:
        "Dincəldici çimərlik kurortlarından tutmuş canlı şəhər turlarına qədər, seçilmiş qlobal istiqamətlərimizi nəzərdən keçirin.",
      step2Label: "Addım 02",
      step2Title: "Səyahətinizi Özəlləşdirin",
      step2Desc:
        "Uçuşları, otelləri və turları tam olaraq büdcənizə və istəklərinizə uyğunlaşdırmaq üçün səyahət mütəxəssislərimizlə işləyin.",
      step3Label: "Addım 03",
      step3Title: "Hazırlaşın və Yola Düşün",
      step3Desc:
        "Bütün səyahət planınızı və sənədlərinizi bir yerdə əldə edin. Xəyalınızdakı tətil hazırdır.",
    },
    destinations: {
      title: "Populyar istiqamətlər",
      subtitle:
        "Qısamüddətli şəhər turlarından tutmuş ekzotik uzaq məsafəli səyahətlərə qədər, ekspertlərimiz tərəfindən hazırlanmış turların sizi hara apara biləcəyini kəşf edin.",
      fare: "AllTrips Tarifi",
      flyTo: (city, miles) => `${city}-ə ${miles} ₼-dən uçun`,
      cityNames: {
        Budapest: "Budəpeşt",
        Rome: "Roma",
        Tbilisi: "Tbilisi",
        Aktau: "Aktau",
        Izmir: "İzmir",
        Istanbul: "İstanbul",
        Tashkent: "Daşkənd",
        Antalya: "Antalya",
        "Abu Dhabi": "Abu Dabi",
        London: "London",
        Prague: "Praqa",
        "New Delhi": "New Delhi",
        Milan: "Milan",
        Moscow: "Moskva",
        Jeddah: "Ciddə",
        Bishkek: "Bişkek",
        Paris: "Paris",
        Beijing: "Pekin",
        "Saint Petersburg": "Sankt Peterburq",
        Tokyo: "Tokio",
      },
    },
    partners: {
      title: "Tərəfdaş hava yolları",
      subtitle:
        "Regional liderlərlə və dünya səviyyəsindəki daşıyıcılarla miqyaslanmaq üçün qurulmuşdur.",
    },
    cta: {
      label: "Səyahətinizə başlayın",
      headline: "Xəyalınızdakı səyahəti reallığa çevirin.",
      subtitle:
        "Mütəxəssis rəhbərliyimizlə eksklüziv təklifləri, premium marşrutları və daha ağıllı səyahət yolunu kəşf edin.",
      contactUs: "Bizimlə əlaqə",
    },
    footer: {
      copyright: "© 2026 AllTrips. Dünya səyyahları üçün yaradılmışdır.",
    },
    privacy: {
      link: "Məxfilik Siyasəti",
      title: "Məxfilik Siyasəti",
      body: "Hazırda Alltrips veb-saytı yalnız məlumat xarakteri daşıyır və onlayn ödənişləri qəbul etmir. Gələcəkdə sayta onlayn ödəniş funksiyasi əlavə edilirsə, əmin ola bilərsiniz ki, Alltrips bank kartı məlumatlarınızı öz serverlərində toplamır, emal etmir və saxlamır. Bütün gələcək əməliyyatlar yalnız təhlükəsiz və sertifikatlı üçüncü tərəf ödəniş sistemləri vasıtəsilə həyata keçiriлəcək.",
    },
    terms: {
      link: "Şərtlər və Qaydalar",
      title: "Şərtlər və Qaydalar",
      sections: [
        {
          title: "1. Ümumi Müddəalar və Xidmətlər",
          body: "Alltrips turizm agentliyi olaraq aviabiletlər, tur paketləri, otel rezervasiyaları, transferlər və viza dəstəyi daxil olmaqla, lakin bunlarla məhdudlaşmayan xidmətlər göstərir. Biz sizinlə (müştəri) və üçüncü tərəf xidmət təminatçıları (avineşirkətlər, otellər, transfer şirkətləri, muzeylər və s.) arasında vasitəçi kimi çıxış edirik.",
        },
        {
          title: "2. Məsuliyyətin Məhdudlaşdırılması",
          body: "Alltrips üçüncü tərəf təminatçıları üçün agent kimi çıxış etdiyindən, bu üçüncü tərəflərin hər hansı hərəkətlərinə, hərəkətsizliyinə, səhvlərinə, gecikmələrinə və ya ləğvlərinə görə hüquqi məsuliyyət daşımır. Üçüncü tərəf təminatçısının öz xidmətlərini gözlənildiyi kimi yerinə yetirməməsi səbəbindən baş verən hər hansı şəxsi xəsarət, əmlak ziyanı və ya əlavə xərclərə görə məsuliyyət daşımırıq.",
        },
        {
          title: "3. Tətbiq edilən Hüquq",
          body: "Bu şərtlər və qaydalar Azərbaycan Respublikasının qanunvericiliyinə əsasən tənzimlənir və təfsir olunur. Bu şərtlərdən irəli gələn hər hansı mübahisələr müstəsna olaraq Azərbaycan Respublikası məhkəmələrinin yurisdiksiyasına tabedir.",
        },
      ],
    },
    cancellation: {
      link: "Ləğvetmə Qaydaları",
      title: "Ləğvetmə və Ödəniş Qaydaları",
      sections: [
        {
          title: "1. Ödəniş Şərtləri",
          body: "Bütün rezervasiyalar təsdiqlənmə zamanı tam əvvəlcədən ödəniş tələb edir. Bütün qiymətlər və əməliyyatlar Azərbaycan Manatı (AZN) ilə həyata keçirilir.",
        },
        {
          title: "2. Ləğvetmə Qaydaları",
          body: "Ləğvetmələr qəti şəkildə müvafiq üçüncü tərəf təminatçısının (məsələn, aviaşirkət və ya otel) qayda və nizamnamələri ilə tənzimlənir.",
          items: [
            { label: "Qaytarılmayan Rezervasiyalar", text: "Bir çox tariflər, depozitlər və paketlər təminatçının qaydalarına əsasən qətiyyən geri qaytarılmır. Belə hallarda Alltrips ödənişi geri qaytara bilməz." },
            { label: "Qismən Qaytarılma", text: "Əgər üçüncü tərəf təminatçısı qismən qaytarılmaya icazə verərsə, Alltrips ödənişin qaytarılmasını onların müəyyən etdiyi şərtlərə və məbləğlərə uyğun olaraq həyata keçirəcəkdir." },
          ],
        },
      ],
    },
    returnPolicy: {
      link: "Qaytarılma və Dəyişdirilmə",
      title: "Qaytarılma, Dəyişdirilmə və Düzəliş Qaydaları",
      sections: [
        {
          title: "1. Rezervasiyalarda Dəyişikliklər",
          body: "Biletlərin, otel tarixlərinin və ya digər rezervasiya detallarının dəyişdirilməsi tələbləri tamamilə müvafiq üçüncü tərəf təminatçısının qaydalarından və mövcudluğundan asılıdır.",
        },
        {
          title: "2. Rüsumlar və Cərimələr",
          body: "Təminatçı tərəfindən dəyişiklik, dərəcənin artırılması və ya düzəlişə icazə verilərsə, aşağıdakı rüsumlar tətbiq olunacaq:",
          items: [
            { label: "Təminatçı Rüsumları", text: "Aviaşirkət, otel, transfer şirkəti və ya digər nümayəndələr tərəfindən müəyyən edilmiş bütün cərimələr, tarif fərqləri və xidmət sinfinin artırılması rüsumlarına görə siz məsuliyyət daşıyırsınız." },
            { label: "Alltrips Xidmət Haqqı", text: "Üçüncü tərəf rüsumlarına əlavə olaraq, Alltrips rezervasiyanızda hər hansı bir dəyişikliyin həyata keçirilməsi üçün inzibati xidmət haqqı tətbiq edir." },
          ],
        },
      ],
    },
    about: {
      eyebrow: "Haqqımızda",
      headline1: "AllTrips — Xəyalınızdakı",
      headline2: "Səyahəti Biz Qururuq",
      body: "AllTrips, Bakı əsaslı bir səyahət agentliyidir. Biz müştərilərimizə dünya üzrə ən yaxşı istiqamətlərə unudulmaz səyahətlər planlamaqda kömək edirik — aviabiletdən tutmuş otel rezervasiyasına, turpaketdən visa xidmətlərinə qədər hər şeyi sizin üçün təşkil edirik.",
      voen: '"ALL TRIPS MMC" Şirkəti (VÖEN: 1502660521)',
      missionTitle: "Missiyamız",
      missionBody: "Hər kəs üçün dünyanı əlçatan etmək. İstər bütçəli bir Tbilisi gəzintisi, istər lüks bir Dubai paket turu — biz sizin ehtiyaclarınıza uyğun ən yaxşı variantı tapır, bütün prosesin stresini öz üzərimizə götürürük.",
      whyTitle: "Niyə AllTrips?",
      whyItems: [
        "10,000+ məmnun səyahətçi",
        "120+ aktiv marşrut",
        "24/7 müştəri dəstəyi",
        "Rəqabətli qiymətlər və şəffaf xidmət",
      ],
      contactTitle: "Bizimlə əlaqə",
    },
    contact: {
      address: "Əlimərdan Bəy Topçubaşov 84, Bakı",
    },
  },
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx)
    throw new Error("useTranslation must be used inside LanguageProvider");
  return ctx;
}
