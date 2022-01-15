import "./section3.css";

const Section3 = () => {
  return (
    <section className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto mt-16">
        <div className="md:order-1 order-2 text-center md:text-left">
          <h2 className="s3-heading mb-8  font-bold">About Us</h2>
          <p className="s3-p mb-8 mx-auto">
            We use our knowledge and expertise to provide the most effecient,
            effective and environmentally friendly cleaning possible. Having in
            mind the daily increase in percentage of children cancer patients
            world wide, skin reactions caused by harmful chemicals, high priced
            soaps leading to parents using products not ideal for children.
          </p>
          <button className="distributor-btn text-white font-bold rounded-r-lg px-6 py-3">
            Become A Distributor
          </button>
        </div>
        <div className="md:order-2 order-1 px-8 mb-12 md:mb-0">
          <img
            src="https://ik.imagekit.io/7wpxe2myx/Safewash/keyPerson_1__lxKttxpn_.png"
            alt=""
            width={1119}
            height={1508}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
