import "./section6.css";
import jide from "./images/jide-salau.png";
import aikomo from "./images/aikomo-opeyemi.png";
import david from "./images/david-rotimi.png";
import greenCircle from "./images/Ellipse-green.png";
import blueCircle from "./images/Ellipse-blue.png";
import magentaCircle from "./images/Ellipse-magenta.png";
import { quoteIcon } from "./icons";

const Section6 = () => {
  return (
    <section className="s6 py-40">
      <div className="max-w-screen-lg mx-auto">
        <div className="testimonies-h text-center mb-24">
          <h2 className="test-h2 ">Read Our Testimonies</h2>
          <p className="s6-p1 px-12 mx-auto">
            We use our knowledge and expertise to providethe most effecient,
            effective and environmentally friendly cleaning possible
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 container-div mx-auto mb-20">
          <div className="s6-divs mx-auto mb-20 md:mb-0 relative p-4">
            <div className="absolute -top-8 -left-8">
              <img
                className="rounded-full relative z-10 mx-auto width={198} height={296}"
                src={jide}
                alt="jide"
                width={95}
                height={123}
              />
              <img
                className="s6-distributor-ellipse absolute z-0"
                src={blueCircle}
                alt=""
                width={95}
                height={123}
              />
            </div>
            <div className="testimoniers ml-auto mt-4">
              <p className="name font-bold mb-1">Abdul Wasiu Modu</p>
              <p className="post">Laundry Owner</p>
            </div>

            <blockquote className="relative mt-12">
              <span className="absolute top-1 -left-5">{quoteIcon} </span>
              <p className="text">
                I have tried it oooo, the thickness and smell is everything.
              </p>
            </blockquote>
          </div>

          <div className="s6-divs mx-auto mb-20 md:mb-0 relative p-4">
            <div className="absolute -top-8 -left-8">
              <img
                className="rounded-full relative z-10 mx-auto width={198} height={296}"
                src={aikomo}
                alt="aikomo"
                width={95}
                height={123}
              />
              <img
                className="s6-distributor-ellipse absolute z-0"
                src={greenCircle}
                alt=""
                width={95}
                height={123}
              />
            </div>
            <div className="testimoniers ml-auto mt-4">
              <p className="name font-bold mb-1">Abdul Wasiu Modu</p>
              <p className="post">A Nursing Mother</p>
            </div>

            <blockquote className="relative mt-12">
              <span className="absolute top-1 -left-5">{quoteIcon} </span>
              <p className="text">
                Yeah I have bought after I gave birth because I feel my baby’s
                clothes deserve bqsafewash I and to protect his skin from rashes
                and allergies
              </p>
            </blockquote>
          </div>

          <div className="s6-divs mx-auto relative p-4">
            <div className="absolute -top-8 -left-8">
              <img
                className="rounded-full relative z-10 mx-auto width={198} height={296}"
                src={david}
                alt="david"
                width={95}
                height={123}
              />
              <img
                className="s6-distributor-ellipse absolute z-0"
                src={magentaCircle}
                alt=""
                width={95}
                height={123}
              />
            </div>
            <div className="testimoniers ml-auto mt-4">
              <p className="name font-bold mb-1">Abdul Wasiu Modu</p>
              <p className="post">Laundry Owner</p>
            </div>

            <blockquote className="relative mt-12">
              <span className="absolute top-1 -left-5">{quoteIcon} </span>
              <p className="text">
                I tried bqsafewash yesterday! It was the Bomb! My customers are
                happy and coming back for more
              </p>
            </blockquote>
          </div>
        </div>
        <div>
          <img
            src={
              "https://ik.imagekit.io/7wpxe2myx/Safewash/testimonialSmall_UknAw5VkIub.png"
            }
            alt="video"
            width={338}
            height={282}
            className="mx-auto md:hidden"
          />
          <img
            src={
              "https://ik.imagekit.io/7wpxe2myx/Safewash/testimonial_2yB2yhWQc.png"
            }
            alt="video"
            className="hidden md:block mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
