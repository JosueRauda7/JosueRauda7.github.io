import React from "react";

//Assets
import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer__container pt-4 mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="text-center">
                <span className="Footer__logo mt-2">JR</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-center">
                <h3>Contáctos</h3>
                <hr />
                <p>
                Tel: 2340 - 6044 (+503) 
                <br />
                LinkedIn: 
                <a className="ml-2" target="_blank" href='https://www.linkedin.com/in/josuerauda7/'>
                    JosueRauda7
                </a>
                <br />
                Correo electrónico: josuemiltonraudaramirez@gmail.com
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-center">
                <h3>Sígueme</h3>
                <hr />
                <p>
                Instagram:  
                <a className="ml-2" target="_blank" href='https://www.instagram.com/josuerauda7/'>
                    @JosueRauda7
                </a>
                <br />
                GitHub: 
                <a className="ml-2" target="_blank" href='https://github.com/JosueRauda7'>
                    github.com/JosueRauda7
                </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-12 Footer__mensaje">
                <strong>De Josué Rauda con 💚 para el mundo.</strong>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
