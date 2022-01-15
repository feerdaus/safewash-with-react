import "./Section1.css";

const Section1 = () => {
  return (
    <section className="section1 ">
      <div className="px-6 mx-auto max-w-screen-lg h-full flex items-center">
        <div>
          <h1 className="heading1 font-bold">
            A Liquid Laundry Detergent Specifically Formulated for
          </h1>
          <h2 className="heading2 text-white font-bold">
            Babies and Children Clothings
          </h2>
          <button className="distributor-btn mt-6 text-white font-bold">
            Find Distributors Around You?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
