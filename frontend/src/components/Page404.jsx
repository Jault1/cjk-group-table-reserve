import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

import { Link } from "react-router-dom";
import Button from "./Button";

export default function Page404() {
  return (
    <>
      <section id="notFound">
        <div className="section-container">
          <div className="row wrap">
            <div className="col">
              <h1 className="">
                Page not found.<div>Error 404</div>
              </h1>
              <p className="lead">
              Page not found.</p>
              <Link to="/">
                <Button type="button" classes="btn btn-secondary">Return to home</Button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
