import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

//import Nav from "./Nav";
import chef from "../images/AdobeStock_651285962.jpeg";
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <img
              id="chef"
              className="img-fluid"
              src={chef}
              alt="Mr. Cheffer"
              width="450"
              height="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
