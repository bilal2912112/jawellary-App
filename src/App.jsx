import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./components/pages/Homepage";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
