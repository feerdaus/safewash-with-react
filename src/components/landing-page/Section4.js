import "./section4.css";
import jide from "./images/jide-salau.png";
import aikomo from "./images/aikomo-opeyemi.png";
import david from "./images/david-rotimi.png";
import greenCircle from "./images/Ellipse-green.png";
import blueCircle from "./images/Ellipse-blue.png";
import magentaCircle from "./images/Ellipse-magenta.png";

const ourDistributors = [
  {
    name: "Kudirat Bakare",
    address: "Sturulere, Lagos State. 09030267295",
    image: jide,
    border: blueCircle,
  },
  {
    name: "Ibikunle Ventures",
    address: "Sturulere, Lagos State. 09030267295",
    image: aikomo,
    border: greenCircle,
  },
  {
    name: "Rosemerry's Shop",
    address: "Sturulere, Lagos State. 09030267295",
    image: david,
    border: magentaCircle,
  },
];

const Section4 = () => {
  return (
    <section>
      <div className="text-center mx-auto max-w-screen-lg mb-12 pt-32 md:pt-60">
        <h2 className="heading font-bold">See Our Top Distributors</h2>
        <p className="paragraph mx-auto mb-28 px-12">
          We use our knowledge and expertise to providethe most effecient,
          effective and environmentally friendly cleaning possible
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-3 max-w-screen-lg border-lime-800 mx-auto">
        {ourDistributors.map((distributor) => (
          <div
            key={distributor.name}
            className="distributor pb-12 mx-auto text-center bg-white mb-12 md:mb-0"
          >
            <div className="relative -top-12">
              <img
                className="rounded-full relative z-10 mx-auto width={198} height={296}"
                src={distributor.image}
                alt={distributor.name}
              />
              <img
                className="distributor-ellipse absolute top-0 z-0"
                src={distributor.border}
                alt={distributor.name}
              />
            </div>
            <div className="mx-auto text-center">
              <p className="s4-names font-bold">{distributor.name}</p>
              <p className="px-12 my-4">{distributor.address}</p>
              <button className="mx-auto px-6 py-1 ext-white font-bold contact-button">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mx-auto max-w-screen-lg mx-auto">
        <p className="s4-p mx-auto my-12 px-8">
          We use our knowledge and expertise to provide the most effecient,
          effective and environmentally friendly cleaning possible
        </p>
        <button className="distributor-btn text-white font-bold mb-20">
          Find Distributors Around You?
        </button>
      </div>
    </section>
  );
};

export default Section4;
