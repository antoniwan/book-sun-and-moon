import { useLanguage } from "../components/LanguageContext";
import TitlePage from "../pages/page-title";
import Page1 from "../pages/page1-sunatthepark";
import Page2 from "../pages/page2-sunatthebeach";
import Page3 from "../pages/page3-sunatschool";
import Page4 from "../pages/page4-miasbday";
import Page5 from "../pages/page5-thankyousun";
import Page6 from "../pages/page6-shadowplay";
import Page7 from "../pages/page7-sunsaysgoodbye";
import Page8 from "../pages/page8-nighttime";
import Page9 from "../pages/page9-phasesofthemoon";
import Page10 from "../pages/page10-bedtime-end";

export default function Pages({ currentPage }) {
  const { language } = useLanguage();

  switch (currentPage) {
    case 2:
      return <Page1 language={language} />;
    case 3:
      return <Page2 language={language} />;
    case 4:
      return <Page3 language={language} />;
    case 5:
      return <Page4 language={language} />;
    case 6:
      return <Page5 language={language} />;
    case 7:
      return <Page6 language={language} />;
    case 8:
      return <Page7 language={language} />;
    case 9:
      return <Page8 language={language} />;
    case 10:
      return <Page9 language={language} />;
    case 11:
      return <Page10 language={language} />;
    default:
      return <TitlePage language={language} />;
  }
}
