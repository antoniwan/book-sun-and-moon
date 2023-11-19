import { useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Pages from "./Pages";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const HandleGoToNextPage = () => {
    console.log("handle go to next page: ", currentPage);
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const HandleGoToPreviousPage = () => {
    console.log("handle go to previous page: ", currentPage);
    let nextPage = currentPage - 1;
    if (nextPage <= 0) {
      nextPage = 1;
    }
    setCurrentPage(nextPage);
  };

  const HandleGoToFirstPage = () => {
    setCurrentPage(1);
  };

  const HandleGoToLastPage = () => {};

  return (
    <>
      {currentPage !== 1 && <Header />}
      <main className={styles.main}>
        <Pages currentPage={currentPage} />
      </main>
      <Footer
        currentPage={currentPage}
        goToNextPage={HandleGoToNextPage}
        goToPreviousPage={HandleGoToPreviousPage}
        goToFirstPage={HandleGoToFirstPage}
        goToLastPage={HandleGoToLastPage}
      />
    </>
  );
}

export default App;
