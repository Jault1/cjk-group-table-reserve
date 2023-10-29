//import styles from './Header.module.css';
import banner from "./../images/AdobeStock_211524227.png";

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
        className="header container-fluid p-5 mb-5 bg-primary text-white text-center"
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
