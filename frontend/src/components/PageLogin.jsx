import myLemon from "../images/myLemon.png";

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
        {/* <div className="Login">      
      <h1 className="loginTitle">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
<br></br>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>&nbsp;
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
<br></br>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <br></br>
      <br></br>
<a href="#UserDisplayCreateLogin">Create Account</a>
    </div>
     */}
            </div>
      </div>
    </div>
    </>
  );
}
