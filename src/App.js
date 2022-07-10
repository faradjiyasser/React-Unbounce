import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArrowProvider from "./animations/ArrowProvider";
import FooterProvider from "./context/FooterProvider";
import AnimationsProvider from "./animations/AnimationsProvider";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <ArrowProvider>
        <AnimationsProvider>
          <FooterProvider>
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path={"/*"} element={<NotFound />} />
            </Routes>
          </FooterProvider>
        </AnimationsProvider>
      </ArrowProvider>
    </Router>
  );
}

export default App;
