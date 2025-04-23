import Navbar from "./components/Navbar";
import AppRoutes from "./routes";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
