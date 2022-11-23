import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Separator from "./components/Separator";
import bg from "./images/bg.jpg";
import { Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <main>
        <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/index.html'/>} />
        <Route path="/index.html" element={
          <>
          <IntroSection />
          <Separator />
          <Projects />
          <Separator />
          <Contactme />
          <Separator />
          <Footer />
          <div className="bgimage">
            <img src={bg} alt="background" />
          </div>
          </>
        }/>
        <Route path='/aboutme.html' element={<Aboutme />}/>
      </Routes>
    </main>
  );
}

export default App;
