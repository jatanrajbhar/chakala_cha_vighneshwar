import { createContext, useContext, useState, type ReactNode } from "react";

const translations = {
  en: {
    // Header nav
    navAbout: "About",
    navGaneshUtsav: "Ganesh Utsav",
    navSabhasad: "Sabhasad",
    navContact: "Contact",
    navDonation: "Donation",

    // Hero
    heroSubtitle: "Chakala Sarvajanik Ganesh Utsav Mandal",
    heroPresents: "Presents",
    heroScroll: "Scroll",

    // About
    aboutTitle1: "About",
    aboutTitle2: "Us",
    aboutPara1Start: "Ten years ago, a group of five teenagers founded the ",
    aboutMandalName: "Chakala Sarvajanik Ganesh Utsav Mandal",
    aboutPara1Mid:
      ", which has grown into one of Chakala's largest and most vibrant Ganesh celebrations. Unlike many other mandals, this one is entirely ",
    aboutYouthLed: "youth-led",
    aboutPara1End: ", funded by their personal savings and dedication.",
    aboutCcvName: "Chakala Cha Vighneshwar",
    aboutPara2:
      " upholds Maharashtra's rich traditions with exceptional artistry, intricate decorations, and grand festivities that draw crowds from across Andheri East.",

    // Ganesh Utsav
    ganeshTitle1: "Ganesh",
    ganeshTitle2: "Utsav",
    ganeshSubtitle: "A decade of devotion, artistry, and celebration",
    ganeshPhotoSoon: "Photo Coming Soon",

    // Sabhasad (Karyakarta)
    sabhasadTitle: "Sabhasad",
    sabhasadSubtitle: "The dedicated youth who make it all happen",

    // Contact
    contactTitle1: "Contact",
    contactTitle2: "Us",
    contactSubtitle: "Visit us during Ganesh Utsav or reach out anytime",
    contactLocation: "Location",
    contactInstagram: "Instagram",
    contactEmail: "Email",
    contactCta: "Join us every year during Ganesh Chaturthi",

    // Donation
    donationTitle: "Donation",
    donationComingSoon: "Coming Soon",
    donationHeading: "Support Our Festival",
    donationDesc:
      "Our donation portal is being set up. Soon you'll be able to contribute to Chakala Cha Vighneshwar and help us continue this beautiful tradition.",
    donationBtn: "Donate Now",
    donationLink: "Contact us for donations",

    // Footer
    footerQuickLinks: "Quick Links",
    footerGetInTouch: "Get In Touch",
    footerRights: "All rights reserved.",
    footerMadeWith: "Made with",
    footerBy: "by the Youth of Chakala",
  },
  mr: {
    // Header nav
    navAbout: "आमच्याबद्दल",
    navGaneshUtsav: "गणेश उत्सव",
    navSabhasad: "सभासद",
    navContact: "संपर्क",
    navDonation: "देणगी",

    // Hero
    heroSubtitle: "चकाला सार्वजनिक गणेश उत्सव मंडळ",
    heroPresents: "प्रस्तुत",
    heroScroll: "खाली स्क्रोल करा",

    // About
    aboutTitle1: "आमच्या",
    aboutTitle2: "बद्दल",
    aboutPara1Start: "दहा वर्षांपूर्वी, पाच किशोरवयीन मुलांनी ",
    aboutMandalName: "चकाला सार्वजनिक गणेश उत्सव मंडळ",
    aboutPara1Mid:
      " ची स्थापना केली, जे चकालातील सर्वात मोठ्या आणि भव्य गणेश उत्सवांपैकी एक बनले आहे. इतर अनेक मंडळांपेक्षा वेगळे, हे मंडळ पूर्णपणे ",
    aboutYouthLed: "तरुणांच्या नेतृत्वाखाली",
    aboutPara1End:
      " चालवले जाते, त्यांच्या वैयक्तिक बचतीतून आणि समर्पणातून.",
    aboutCcvName: "चकाला चा विघ्नेश्वर",
    aboutPara2:
      " महाराष्ट्राच्या समृद्ध परंपरांचे जतन करतो, अपवादात्मक कलाकुसर, विस्तृत सजावट आणि भव्य उत्सवांसह जे अंधेरी पूर्वभागातील लोकांना आकर्षित करतात.",

    // Ganesh Utsav
    ganeshTitle1: "गणेश",
    ganeshTitle2: "उत्सव",
    ganeshSubtitle: "भक्ती, कलाकुसर आणि उत्सवाचे एक दशक",
    ganeshPhotoSoon: "फोटो लवकरच येईल",

    // Sabhasad (Karyakarta)
    sabhasadTitle: "सभासद",
    sabhasadSubtitle: "हे सर्व शक्य करणारे समर्पित तरुण",

    // Contact
    contactTitle1: "आमच्याशी",
    contactTitle2: "संपर्क साधा",
    contactSubtitle:
      "गणेश उत्सवादरम्यान आम्हाला भेट द्या किंवा कधीही संपर्क करा",
    contactLocation: "ठिकाण",
    contactInstagram: "इन्स्टाग्राम",
    contactEmail: "ई-मेल",
    contactCta: "दरवर्षी गणेश चतुर्थीला आमच्यासोबत सामील व्हा",

    // Donation
    donationTitle: "देणगी",
    donationComingSoon: "लवकरच येत आहे",
    donationHeading: "आमच्या उत्सवाला सहकार्य करा",
    donationDesc:
      "आमचे देणगी पोर्टल तयार होत आहे. लवकरच तुम्ही चकाला चा विघ्नेश्वरला योगदान देऊ शकाल आणि ही सुंदर परंपरा पुढे चालू ठेवण्यास मदत करू शकाल.",
    donationBtn: "आता देणगी द्या",
    donationLink: "देणगीसाठी आमच्याशी संपर्क साधा",

    // Footer
    footerQuickLinks: "जलद दुवे",
    footerGetInTouch: "संपर्कात रहा",
    footerRights: "सर्व हक्क राखीव.",
    footerMadeWith: "बनवले",
    footerBy: "चकालाच्या तरुणांनी",
  },
} as const;

type Lang = "en" | "mr";
type Translations = typeof translations.en;

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((prev) => (prev === "en" ? "mr" : "en"));
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
