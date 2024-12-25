import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Pages from "./Pages";

function App() {
  const maxPages = 11;
  const getCurrentPage = Number(localStorage.getItem("currentPage"));
  const [currentPage, setCurrentPage] = useState(getCurrentPage || 1);

  const doScrollToTopOfPage = () => {
    window.scrollTo(0, 0);
  };

  const HandleGoToNextPage = () => {
    let nextPage = currentPage + 1;
    if (nextPage >= maxPages) {
      nextPage = 11;
    }
    localStorage.setItem("currentPage", nextPage);
    setCurrentPage(nextPage);
    doScrollToTopOfPage();
  };

  const HandleGoToPreviousPage = () => {
    let nextPage = currentPage - 1;
    if (nextPage <= 0) {
      nextPage = 1;
    }
    localStorage.setItem("currentPage", nextPage);
    setCurrentPage(nextPage);
    doScrollToTopOfPage();
  };

  const HandleGoToFirstPage = () => {
    localStorage.setItem("currentPage", 1);
    setCurrentPage(1);
    doScrollToTopOfPage();
  };

  const HandleGoToLastPage = () => {
    const lastPage = maxPages;
    localStorage.setItem(lastPage);
    setCurrentPage(lastPage);
    doScrollToTopOfPage();
  };

  return (
    <div className="relative pb-4">
      {currentPage !== 1 && <Header />}
      <main className="">
        <Pages currentPage={currentPage} />
      </main>
      <Footer
        currentPage={currentPage}
        lastPage={maxPages}
        goToNextPage={HandleGoToNextPage}
        goToPreviousPage={HandleGoToPreviousPage}
        goToFirstPage={HandleGoToFirstPage}
        goToLastPage={HandleGoToLastPage}
      />
    </div>
  );
}

export default App;
