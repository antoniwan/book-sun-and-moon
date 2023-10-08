import { useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Footer from "./Footer";

import TitlePage from "../pages/page1-title";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {currentPage !== 1 && <Header />}
      <main className={styles.main}>
        <TitlePage />
      </main>
      <Footer currentPage={currentPage} />
    </>
  );
}

export default App;
