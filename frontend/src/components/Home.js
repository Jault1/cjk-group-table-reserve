import "./Home.css";
import Desert from "../images/Desert.jpg";
import Burger from "../images/Build-Burger.jpg";
import Flour from "../images/Flour-Splash.jpg";
import FFP from "../images/Food-For-People.jpg";
import MCourse from "../images/Main-Course.jpg";
import Bar from "../images/Moody-Bar.jpg";
import Relax from "../images/Night-Relax.jpg";
import Corner from "../images/Quiet-Corner.jpg";
import Reserved from "../images/Reserved-Sign.jpg";
import Sauce from "../images/Sauce-Art.jpg";
import Scalops from "../images/Scalops.jpg";
import Steak from "../images/Steak.jpg";
import Tacos from "../images/Tacos.jpg";
import TAway from "../images/Take-Away-Sign.jpg";
import Salmon from "../images/Topped-Salmon.jpg";
import Vine from "../images/Vine-Light.jpg";
import Customer from "../images/Customer.jpg";
import Light from "../images/Moody-Lights.jpg";


function Home() {
  return (
    <>
      <div id="HomeBody">
        <div id="tint">
        <h1>Welcome to the Lemon Drop</h1>
        <div id="slot1" className="tester">
          <img
            id="img1"
            src={FFP}
            alt="FFP"
          />
          <p id="txt1"><i>Food made<br></br><br></br> by People<br></br><br></br> for People</i></p>
        </div>
        <div id="slot2" className="tester">
        <p id="txt2">Great Vibes</p>
          <img
            id="img2"
            src={Vine}
            alt="Vine"
          />
        </div>
        <div id="slot3" className="tester">
        <p id="txt3">Better Food</p>
          <img
            id="img3"
            src={Tacos}
            alt="Tacos"
          />
        </div>
        <div id="slot4" className="tester">
          <img
            id="img4"
            src={Reserved}
            alt="Reserved"
          />
          <p id="txt4">Make a Reservation</p>
        </div>
        <div id="slot5" className="tester">
        <p id="txt5">or take it Anywhere</p>
          <img
            id="img5"
            src={TAway}
            alt="TAway Course"
          />
        </div>
        <div id="slot6" className="tester">
          <img
            id="img6"
            src={Flour}
            alt="Flour"
          />
          <p id="txt6">Because with Ingredients<br></br>this Fresh</p>
        </div>
        <div id="slot7" className="tester">
          <img
            id="img7"
            src={Bar}
            alt="Bar"
          />
          <p id="txt7">And any Drink you Desire</p>
        </div>
        <div id="slot8" className="tester">
          <img
            id="img8"
            src={Relax}
            alt="Relax"
          />
          <p id="txt8">A place to Relax</p>
        </div>
        <div id="slot9" className="tester">
          <img
            id="img9"
            src={Corner}
            alt="Corner"
          />
          <p id="txt9">is the Only thing left</p>
        </div>
        <div id="slot10" className="tester">
          <img
            id="img10"
            src={MCourse}
            alt="Main Course"
          />
          <p id="txt10">So come on in</p>
        </div>
        <div id="slot11" className="tester">
          <img
            id="img11"
            src={Burger}
            alt="Burger"
          />
          <p id="txt11">Design your own</p>
        </div>
        <div id="slot12" className="tester">
          <img
            id="img12"
            src={Steak}
            alt="Steak"
          />
          <p id="txt12">Or let Us Decide</p>
        </div>
        <div id="slot13" className="tester">
          <img
            id="img13"
            src={Scalops}
            alt="Scalops"
          />
          <p id="txt13">When it comes to<br></br>the Lemon Drop</p>
        </div>
        <div id="slot14" className="tester">
          <img
            id="img14"
            src={Salmon}
            alt="Salmon"
          />
          <p id="txt14">There are no<br></br>bad choices</p>
        </div>
        <div id="slot15" className="tester">
          <img
            id="img15"
            src={Sauce}
            alt="Sauce"
          />
          <p id="txt15">Our food is<br></br>a Synphony</p>
        </div>
        <div id="slot16" className="tester">
          <img
            id="img16"
            src={Desert}
            alt="Desert"
          />
          <p id="txt16">Down to the<br></br>Last Note</p>
        </div>
        <div id="slot17" className="tester">
          <img
            id="img17"
            src={Customer}
            alt="Customer"
          />
          <p id="txt17">The only thing You<br></br>have to Ask</p>
        </div>
        <div id="slot18" className="tester">
          <img
            id="img18"
            src={Light}
            alt="Light"
          />
          <p id="txt18">Is Why You Haven't<br></br>Come Before</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
