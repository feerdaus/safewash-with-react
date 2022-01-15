import "./App.css";
import Section1 from "./components/landing-page/Section1";
import Header from "./components/common/Header";
import Section2 from "./components/landing-page/Section2";
import Section3 from "./components/landing-page/Section3";
import Section4 from "./components/landing-page/Section4";
import Section5 from "./components/landing-page/Section5";
import Section6 from "./components/landing-page/Section6";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </>
  );
}

export default App;
