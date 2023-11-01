import mario from "../images/AdobeStock_651285962.jpeg";
import adrian from "../images/cooking.jpg";

export default function About({ bg }) {
  return (

      <div className="container">
        <div className="row">
          <div className="col-12">
              <h2>Lemon Drop</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-2">
            
          <img id="adrian" src={adrian} alt="Adrian" width="200" /><br /><br />


          <img id="mario" src={mario} alt="Mario" width="200" />
          </div>
          <div className="col-12 col-md-10">
          <div className="lead">Chicago</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            euismod nisi porta lorem mollis aliquam.
          </p>
          <p>
            Justo laoreet sit amet cursus sit amet dictum. Pharetra magna ac
            placerat vestibulum lectus mauris ultrices eros in. Sed viverra
            tellus in hac habitasse platea dictumst vestibulum rhoncus.
          </p>
          <p>
            Velit laoreet id donec ultrices. Arcu ac tortor dignissim convallis
            aenean et tortor. Massa tincidunt nunc pulvinar sapien et. Diam quam
            nulla porttitor massa id.
          </p>
        </div>

          <div>
           
        </div>

          </div>
        </div>
  );
}
