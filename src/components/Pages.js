import TitlePage from "../pages/page1-title";
import Page2 from "../pages/page2-fouryearsold";

export default function Pages({ currentPage }) {
  switch (currentPage) {
    case 2:
      return <Page2 />;
    default:
      return <TitlePage />;
  }
}
