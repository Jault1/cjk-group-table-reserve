import "./../styles.css";
import banner from "./../images/banner.png";

function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div id="header" className="col-12 header container-fluid p-2 mb-2 text-white text-center">
            <img
              id="banner"
              className="img-fluid"
              src={banner}
              alt="banner"
              height="20"
            />
            <h2 className="mb-1">Table Reservation App</h2>
              <p>
                <em>Some text here.</em>
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
