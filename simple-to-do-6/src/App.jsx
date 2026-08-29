import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
