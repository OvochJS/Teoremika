import { Route, Routes } from "react-router";

import { Home } from "./pages/Home.tsx";
import { Documentation } from "./pages/Documentation.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "#/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="documentation/*" element={<Documentation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
