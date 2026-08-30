import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/Task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </>
  );
}

export default App;
