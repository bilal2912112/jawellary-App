import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./components/pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
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
              <Route path="/product/:id" Component={ProductPage} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
