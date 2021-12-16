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
import Scroll from "./components/Scroll";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let [canScroll, setScroll] = useState(true);

  useEffect(() => {
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;
    let touchTime = 0;
    let diff = 0;

    if (canScroll) {
      document.addEventListener(
        "touchstart",
        function (e) {
          touchstartX = e.changedTouches[0].screenX;
          touchstartY = e.changedTouches[0].screenY;
          touchTime = new Date();
          console.log(touchTime);
        },
        false
      );

      document.addEventListener(
        "touchend",
        function (e) {
          touchendX = e.changedTouches[0].screenX;
          touchendY = e.changedTouches[0].screenY;
          diff = new Date() - touchTime;
          console.log(diff);

          handleGesure();
        },
        false
      );

      function handleGesure() {
        if (
          (diff > 120 && touchendY - touchstartY > 150) ||
          touchendY - touchstartY < -150
        ) {
          if (touchstartY !== touchendY) {
            if (touchendY < touchstartY) {
              switch (location.pathname) {
                case "/":
                  navigate("/presentation");
                  break;
                case "/presentation":
                  navigate("/projets");
                  break;
              }
            }
            if (touchendY > touchstartY) {
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
        }
      }

      document.addEventListener(
        "mousewheel",
        (e) => {
          setScroll(false);
          if (e.deltaY > 0) {
            switch (location.pathname) {
              case "/":
                navigate("/presentation");
                break;
              case "/presentation":
                navigate("/projets");
                break;
              case "/projets":
                navigate("/");
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
          }, 300);
        },
        true
      );
    }
  });

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

      {location.pathname === "/contact" ? "" : <Scroll />}
    </>
  );
}

export default App;
