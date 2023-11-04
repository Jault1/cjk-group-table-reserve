import myLemon from "../images/myLemon.png";
import AddReservationForm from "./ReservationAdd"

export default function PageLogin() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Login</h2>
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

        <div className="col-12 col-md-9 gx-2">
        <AddReservationForm />
      <br></br>
<a href="#UserDisplayCreateLogin">Create Account</a>
            </div>
      </div>
    </div>
    </>
  );
}
