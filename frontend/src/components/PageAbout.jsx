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
        <div className="col-12 col-md-3">
          <img id="adrian" className="img-fluid" src={adrian} alt="Adrian" width="200" />
          <br />
          <br />

          <img id="mario" className="img-fluid" src={mario} alt="Mario" width="200" />
        </div>

        <div className="col-12 col-md-9 gx-2">
          <h3>Chicago</h3>
          <p className="lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam optio
                  deserunt possimus autem fuga? Soluta maxime corporis quasi dolor at,
                  vero, laboriosam vel dolorem eaque enim molestias omnis non inventore!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                  quibusdam, dolores sit possimus natus beatae debitis ratione officia
                  obcaecati exercitationem, dolore blanditiis ipsam cupiditate eius,
                  repellat nisi voluptatum quam aliquid.
                </p>
                <p>
            Velit laoreet id donec ultrices. Arcu ac tortor dignissim convallis
            aenean et tortor. Massa tincidunt nunc pulvinar sapien et. Diam quam
            nulla porttitor massa id.
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
}
