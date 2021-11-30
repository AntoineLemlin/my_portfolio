import { AnimatePresence } from "framer-motion";
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

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let canScroll = true;

  window.addEventListener("wheel", (e) => {
    if (canScroll) {
      canScroll = false;
      if (e.deltaY > 0) {
        switch (location.pathname) {
          case "/":
            navigate("/presentation");
            break;
        }
      }
      if (e.deltaY < 0) {
        if (location.pathname !== "/") {
          switch (location.pathname) {
            case "/presentation":
              navigate("/");
              break;
            default:
              return;
          }
        }
      }
      setTimeout(() => {
        canScroll = true;
      }, 2000);
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
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
