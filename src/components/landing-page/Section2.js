import "./section2.css";
import baby2 from "./images/baby-in-the-basket.png";
import bubbles from "./images/bubbles.png";
import surface from "./images/surface.png";
import bio from "./images/biodegradable.png";
import special from "./images/special.png";

const Section2 = () => {
  return (
    <section className="s2 mt-40">
      <div className="text-center max-w-screen-lg mx-auto">
        <h2 className="heading font-bold mx-auto">Notable features</h2>
        <p className="paragraph1 mx-auto px-4 md:px-36">
          We are moved to create a premium, harmful chemical free, sparkling
          clean liquid laundry soap clinically safe for babies and children's
          health.
        </p>
      </div>
      <div className="m-auto max-w-screen-lg grid md:grid-cols-2 mt-20 text-center md:text-left">
        <div>
          <img src={baby2} alt="baby in basket" />
        </div>
        <div className="grid grid-row-2">
          <div className="s2-texts px-6 mb-12 md:mb-0">
            <img src={surface} alt="" className="mx-auto md:ml-0" />
            <h4 className="protection font-bold">Protection </h4>
            <p className="paragraphs">
              We are moved to create a premium, harmful chemical free, sparkling
              clean liquid laundry soap .
            </p>
          </div>
          <div className="s2-texts px-6 mb-12 md:mb-0">
            <img src={bio} alt="" className="mx-auto md:ml-0" />
            <h4 className="eco font-bold">Eco-friendly </h4>
            <p className="paragraphs">
              We are moved to create a premium, harmful chemical free, sparkling
              clean liquid laundry soap .
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto pb-12 text-center md:text-left">
        <div className="md:text-left s2-texts px-6 mb-12 md:mb-0">
          <img src={bubbles} alt="bubbles" className="mx-auto md:ml-0" />
          <h4 className="conc font-bold">High Concentration</h4>
          <p className="paragraphs">
            We are moved to create a premium, harmful chemical free, sparkling
            clean liquid laundry soap .
          </p>
        </div>
        <div className="s2-texts px-6 mb-12 md:mb-0">
          <img src={special} alt="" className="mx-auto md:ml-0" />
          <h4 className="unique font-bold">Unique </h4>
          <p className="paragraphs">
            We are moved to create a premium, harmful chemical free, sparkling
            clean liquid laundry soap .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
