import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./components/pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import Cartpage from "./components/pages/Cartpage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <main className="py-3">
    //       <Container>
    //         <Route path="/" component={HomePage} exact />
    //         <HomePage />
    //       </Container>
    //     </main>
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" Component={HomePage} exact />
              <Route path="/login" Component={LoginPage} />
              <Route path="/register" Component={RegisterPage} />
              <Route path="/product/:id" Component={ProductPage} />
              <Route path="/cart/:id?" Component={Cartpage} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
