import TitlePage from "../pages/page1-title";
import Page2 from "../pages/page2-fouryearsold";
import Page3 from "../pages/page3-sunsmile";
import Page4 from "../pages/page4-sunsky";
import Page5 from "../pages/page5-sunhours";
import Page6 from "../pages/page6-goodbyesun";
import Page7 from "../pages/page7-stars";
import Page8 from "../pages/page8-momdadmoon";

export default function Pages({ currentPage }) {
  switch (currentPage) {
    case 2:
      return <Page2 />;
    case 3:
      return <Page3 />;
    case 4:
      return <Page4 />;
    case 5:
      return <Page5 />;
    case 6:
      return <Page6 />;
    case 7:
      return <Page7 />;
    case 8:
      return <Page8 />;
    default:
      return <TitlePage />;
  }
}
