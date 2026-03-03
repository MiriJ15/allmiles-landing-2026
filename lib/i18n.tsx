"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "en" | "ru" | "az";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  az: "AZ",
};

export interface Translations {
  nav: {
    howItWorks: string;
    destinations: string;
    partners: string;
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
    terms: string;
    privacy: string;
  };
}

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      howItWorks: "How It Works",
      destinations: "Destinations",
      partners: "Partners",
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
        London: "London",
        Dubai: "Dubai",
        Paris: "Paris",
        Tokyo: "Tokyo",
        "New York": "New York",
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
      terms: "Terms of Service",
      privacy: "Privacy Policy",
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
        London: "Лондон",
        Dubai: "Дубай",
        Paris: "Париж",
        Tokyo: "Токио",
        "New York": "Нью-Йорк",
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
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
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
        London: "London",
        Dubai: "Dubay",
        Paris: "Paris",
        Tokyo: "Tokio",
        "New York": "Nyu-York",
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
      terms: "Xidmət şərtləri",
      privacy: "Məxfilik siyasəti",
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
