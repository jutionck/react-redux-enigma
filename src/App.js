import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
  return (
      <>
          <HeaderComponent/>
          <div className="container">
              <div className="row mt-5">
                  <div className="col">
                      <div className="responsive">

                      </div>
                  </div>
              </div>
          </div>
          <FooterComponent/>
      </>
  );
}

export default App;
