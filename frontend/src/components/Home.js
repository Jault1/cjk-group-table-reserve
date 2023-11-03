import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

import chef from "../images/AdobeStock_651285962.jpeg";
import myLemon from "../images/myLemon.png";
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Welcome.</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3">
          <img
            id="myLemon"
            className="img-fluid"
            src={myLemon}
            alt="Lemon"
            width="200"
          />
          <br />
          <br />

        </div>

        <div className="col-12 col-md-6 text-center">
        <img
              id="chef"
              className="img-fluid"
              src={chef}
              alt="Mr. Cheffer"
              width="450"
              height="auto"
            />

            <h3>Come in and take a look around.</h3>
              <p className="lead">Bringing you tantalizing senses from vivid colorful sights,<br /> 
              to succulent smells to locally-grown dishes to awaken your taste palate.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
