import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./screens/HomePage";
import Presentation from "./screens/Presentation";
import Projets from "./screens/Projets";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let [canScroll, setScroll] = useState(true);

  useEffect(() => {
    if (canScroll) {
    document.addEventListener("wheel", (e) => {
      setScroll(false);
        if (e.deltaY > 0) {
          switch (location.pathname) {
            case "/":
              navigate("/presentation");
              break;
              case "/presentation":
              navigate("/projets");
              break;
          }
        }
        if (e.deltaY < 0) {
          if (location.pathname !== "/") {
            switch (location.pathname) {
              case "/projets":
                navigate("/presentation");
                break;
              case "/presentation":
                navigate("/");
                break;
            }
          }
        }
        setTimeout(() => {
          setScroll(true);
        }, 100);
      }, true);
    }
  })

  return (
    <>
      <NavBar />
      <SideBar />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
