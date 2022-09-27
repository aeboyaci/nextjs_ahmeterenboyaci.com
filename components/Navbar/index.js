import React, { useState } from 'react';
import store from '../../store';

const Navbar = () => {
  const [page, setPage] = useState("home");

  store.subscribe(() => {
    const state = store.getState();

    if (state.page !== page) {
      setPage(state.page);

      if (state.isScroll) {
        const element = document.getElementById(state.page);

        if (state.page === "home") {
          element.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
        else {
          let topOfElement = element.offsetTop - 80;
          window.scroll({ top: topOfElement, behavior: "smooth" });
        }
      }
    }
  });

  const handlePageChange = (newPage) => {
    store.dispatch({ type: "setPage", payload: { page: newPage, isScroll: true } });
  }

  return (
    <div className="w-full h-20 flex justify-center items-center space-x-12 z-20 shadow bg-white sticky top-0">
      <span onClick={() => handlePageChange("home")} className={`nav-item ${page === "home" && "nav-item-active"}`}>Home</span>
      <span onClick={() => handlePageChange("about")} className={`nav-item ${page === "about" && "nav-item-active"}`}>About</span>
      {/* <span onClick={() => handlePageChange("contact")} className={`nav-item ${page === "contact" && "nav-item-active"}`}>Contact</span> */}
    </div>
  )
}

export default Navbar;