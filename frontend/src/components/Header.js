import './../styles.css'
import banner from "./../images/banner.png";

function Header() {
  return (
    <>
      <img
        id="banner"
        className="img-fluid"
        src={banner}
        alt="banner"
        height="20"
      />
      <div
        id="header"
        className="header container-fluid p-2 mb-2 text-white text-center"
      >
        <h1 className="mb-1">Table Reservation App</h1>
        <p>
          <em>Some text here.</em>
        </p>

      </div>

    </>
  );
}

export default Header;
