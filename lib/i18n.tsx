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
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    fare: string;
    flyTo: (city: string, miles: string) => string;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  cta: {
    label: string;
    headline: string;
    subtitle: string;
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
      headline: "Turn Everyday Spending into Global Adventures with",
      subtitle:
        "Earn cashback as miles from your daily purchases and redeem flights instantly inside the app. No manual transfer, no friction, just takeoff.",
      statsMonthly: "Miles redeemed monthly",
      statsRoutes: "Routes",
      statsRedemption: "Redemption flow",
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
        "A streamlined 3-step mechanism designed for zero friction between spending, earning, and travel redemption.",
      step1Title: "Shop & Spend",
      step1Desc:
        "Connect your card in seconds or pay through the app. Every everyday transaction becomes a travel opportunity.",
      step2Title: "Earn Miles Automatically",
      step2Desc:
        "Cashback converts to miles in real time, with transparent tracking and premium partner boosters built in.",
      step3Title: "Redeem & Fly",
      step3Desc:
        "Search routes and book flights directly in AllTrips using your balance. Your miles are your ticket.",
    },
    destinations: {
      title: "Popular Destinations",
      subtitle:
        "From city breaks to long-haul escapes, see where your everyday purchases can take you next.",
      fare: "AllTrips Fare",
      flyTo: (city, miles) => `Fly to ${city} from ${miles} miles`,
    },
    partners: {
      title: "Partner Airlines",
      subtitle:
        "Built for scale with regional leaders and world-class global carriers.",
    },
    cta: {
      label: "Start your journey",
      headline:
        "Download AllTrips Today and Convert Everyday Spending Into Takeoff Moments.",
      subtitle:
        "Unlock instant miles, premium routes, and a smarter way to travel with every payment you make.",
    },
    footer: {
      copyright: "© 2026 AllTrips. Crafted for global travelers.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
  },

  ru: {
    nav: {
      howItWorks: "Как это работает",
      destinations: "Направления",
      partners: "Партнёры",
    },
    hero: {
      headline: "Превращайте повседневные траты в глобальные приключения с",
      subtitle:
        "Зарабатывайте кэшбэк в виде миль за ежедневные покупки и мгновенно обменивайте их на авиабилеты прямо в приложении. Без ручных переводов, без лишних шагов — просто взлёт.",
      statsMonthly: "Миль обменивается ежемесячно",
      statsRoutes: "Маршрутов",
      statsRedemption: "Время обмена",
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
        "Оптимизированный механизм из 3 шагов, разработанный для нулевого трения между тратами, накоплением и использованием миль.",
      step1Title: "Покупайте и тратьте",
      step1Desc:
        "Подключите карту за несколько секунд или оплачивайте через приложение. Каждая ежедневная транзакция становится возможностью для путешествия.",
      step2Title: "Зарабатывайте мили автоматически",
      step2Desc:
        "Кэшбэк конвертируется в мили в реальном времени с прозрачным отслеживанием и бонусами от премиум-партнёров.",
      step3Title: "Обменяйте и летите",
      step3Desc:
        "Ищите маршруты и бронируйте авиабилеты прямо в AllTrips, используя свой баланс. Ваши мили — ваш билет.",
    },
    destinations: {
      title: "Популярные направления",
      subtitle:
        "От коротких городских поездок до дальних путешествий — узнайте, куда вас могут привести ежедневные покупки.",
      fare: "Тариф AllTrips",
      flyTo: (city, miles) => `Летите в ${city} от ${miles} миль`,
    },
    partners: {
      title: "Авиакомпании-партнёры",
      subtitle:
        "Масштабируемая система с региональными лидерами и ведущими мировыми перевозчиками.",
    },
    cta: {
      label: "Начните своё путешествие",
      headline:
        "Скачайте AllTrips сегодня и превращайте повседневные траты в моменты взлёта.",
      subtitle:
        "Открывайте мгновенные мили, премиум-маршруты и более умный способ путешествовать с каждым платежом.",
    },
    footer: {
      copyright: "© 2026 AllTrips. Создано для путешественников со всего мира.",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
    },
  },

  az: {
    nav: {
      howItWorks: "Necə işləyir",
      destinations: "İstiqamətlər",
      partners: "Tərəfdaşlar",
    },
    hero: {
      headline: "Gündəlik xərclərini dünya macəralarına çevir",
      subtitle:
        "Gündəlik alış-verişlərinizdən mil olaraq keşbek qazanın və birbaşa tətbiq daxilindən uçuşlara xərləyin. Əl ilə köçürmə yox, sürtünmə yox — sadəcə qalxış.",
      statsMonthly: "Aylıq istifadə edilən mil",
      statsRoutes: "Marşrut",
      statsRedemption: "Xərcləmə müddəti",
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
        "Xərcləmə, qazanma və mil istifadəsi arasında sıfır sürtünmə üçün nəzərdə tutulmuş sadələşdirilmiş 3 addımlı mexanizm.",
      step1Title: "Al və xərclə",
      step1Desc:
        "Kartınızı saniyələr içində qoşun və ya tətbiq vasitəsilə ödəyin. Hər gündəlik əməliyyat səyahət fürsətinə çevrilir.",
      step2Title: "Milləri avtomatik qazanın",
      step2Desc:
        "Keşbek real vaxt rejimində millərə çevrilir, şəffaf izləmə və premium tərəfdaş bonusları ilə.",
      step3Title: "Xərcləyin və uçun",
      step3Desc:
        "AllTrips-da marşrutları axtarın və balansınızdan istifadə edərək birbaşa bilet sifariş edin. Milləriniz — biletinizdir.",
    },
    destinations: {
      title: "Populyar istiqamətlər",
      subtitle:
        "Şəhər gəzintilərindən uzaq məsafəli səfərlərə qədər — gündəlik alış-verişlərinin sizi hara apara biləcəyini görün.",
      fare: "AllTrips Tarifi",
      flyTo: (city, miles) => `${city}-ə ${miles} mildən uçun`,
    },
    partners: {
      title: "Tərəfdaş hava yolları",
      subtitle:
        "Regional liderlərlə və dünya səviyyəsindəki daşıyıcılarla miqyaslanmaq üçün qurulmuşdur.",
    },
    cta: {
      label: "Səyahətinizə başlayın",
      headline:
        "AllTrips-ı bu gün yükləyin və gündəlik xərclərinizi qalxış anlarına çevirin.",
      subtitle:
        "Hər ödənişlə ani millər, premium marşrutlar və daha ağıllı səyahət yolunu açın.",
    },
    footer: {
      copyright: "© 2026 AllTrips. Dünya səyyahları üçün yaradılmışdır.",
      terms: "Xidmət şərtləri",
      privacy: "Məxfilik siyasəti",
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
