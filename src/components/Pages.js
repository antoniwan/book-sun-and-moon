import TitlePage from "../pages/page-title";
import Page1 from "../pages/page1-sunatthepark";
import Page2 from "../pages/page2-sunatthebeach";
import Page3 from "../pages/page3-sunatschool";
import Page4 from "../pages/page4-miasbday";
// Not revisited
import Page5 from "../pages/page5-sunhours";
import Page6 from "../pages/page6-goodbyesun";
import Page7 from "../pages/page7-stars";
import Page8 from "../pages/page8-momdadmoon";
import Page9 from "../pages/page9-phasesofthemoon";
import Page10 from "../pages/page10-bedtime-end";

export default function Pages({ currentPage }) {
  switch (currentPage) {
    case 2:
      return <Page1 />;
    case 3:
      return <Page2 />;
    case 4:
      return <Page3 />;
    case 5:
      return <Page4 />;

    //
    case 6:
      return <Page6 />;
    case 7:
      return <Page7 />;
    case 8:
      return <Page8 />;
    case 9:
      return <Page9 />;
    case 10:
      return <Page10 />;
    default:
      return <TitlePage />;
  }
}
