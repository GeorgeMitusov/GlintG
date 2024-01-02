import React, { useContext, useEffect } from "react";
import { Context } from "./context/Context";

import About from "./components/About";
import Main from "./components/Main";
import Job from "./components/Job";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { AnimatePresence } from "framer-motion";

import "./styles/App.scss";

function App() {
  const { loading, setLoading, switchMenuOff } = useContext(Context);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <div className="App" onClick={switchMenuOff}>
      <AnimatePresence mode="wait">
        { loading ? (
          <Loader/>
        ) : (
          <div>
            <Main />
            <ScrollToTopBtn />
            <About />
            <Job />
            <Projects />
            <Clients />
            <Contact />
            <Footer />
          </div>
        ) }
      </AnimatePresence>
    </div>
  );
}

export default App;
