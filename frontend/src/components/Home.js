import './../styles.css'
import chef from '../images/AdobeStock_651285962.jpeg';

function Home(){
    return(
    <>
<div className="container">
  <div className="row">
    <div className="col-9"><h2>Home</h2></div>
    <div className="col-4 menu">    
        
    </div>
    <div className="col-6">
    <img
        id="chef"
        className="img-fluid"
        src={chef}
        alt="Mr. Cheffer"
        width="600"
        height="auto"
      />
      </div>
  </div>
</div>

   </>
   )}

export default Home