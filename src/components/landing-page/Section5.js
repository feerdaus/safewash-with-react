import "./section5.css";

const Section5 = () => {
  return (
    <section className="section5 md:py-20 md:px-20">
      <div className="flex flex-col md:flex-row items-center mx-auto max-w-screen-lg">
        <div className="w-1/2">
          <img
            className="mx-auto md:hidden"
            src={
              "https://ik.imagekit.io/7wpxe2myx/Safewash/reachOutSmall_5mT9dABIt.png"
            }
            alt=""
          />
          <img
            className="mx-auto hidden md:block"
            src={
              "https://ik.imagekit.io/7wpxe2myx/Safewash/reachOut_0WvRa5CPQt6.png"
            }
            alt=""
          />
        </div>
        <div className="s5-text text-center px-6 md:text-left my-12 md:my-0">
          <h2 className="s5-heading font-bold">Reach Out To Us</h2>
          <p className="s5-p px-4 my-8 md:px-0">
            We use our knowledge and expertise to provide the most effecient,
            effective and environmentally friendly cleaning possible. Having in
            mind the daily increase in percentage of children cancer patients
            world wide, skin reactions caused by harmful chemicals, high priced
            soaps leading to parents using products not ideal for children.
          </p>
          <button className="s5-btn text-white font-bold">
            Contact Us Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
