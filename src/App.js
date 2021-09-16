import "bootstrap/dist/css/bootstrap.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/Navbar";

function App() {
  return (
    <>
      <Header />
      <NavbarPage />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
