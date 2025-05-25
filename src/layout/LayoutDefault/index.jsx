import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useEffect } from "react";

function LayoutDefault() {
  
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default LayoutDefault;
