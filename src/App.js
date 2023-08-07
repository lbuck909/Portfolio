import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

import GoogleFontLoader from 'react-google-font-loader';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
        {/* Use the GoogleFontLoader component to load and apply fonts */}
        <GoogleFontLoader
        fonts={[
          {
            font: 'Agdasima',
          },
          {
            font: 'Montserrat',
            weights: [300],
          },
        ]}
      />
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
