import "./footer.css";
import bqLogo from "./images/BQ-logo.png";
import { instagram } from "./icons";
import { facebook } from "./icons";
import { twitter } from "./icons";
import { linkedin } from "./icons";

const Footer = () => {
  return (
    <section className="footer">
      <div className="flex align-center max-w-screen-lg px-8 md:py-20 mx-auto flex-wrap ">
        <div className="order-4 md:order-1 w-1/2 md:w-1/4">
          <img src={bqLogo} alt="" />
        </div>
        <div className="order-1 md:order-2 w-1/2 md:w-1/4 mb-8">
          <p className="footer-h font-bold mb-4">Customer Service</p>
          <p className="mb-2">Become a Destributor</p>
          <p className="mb-2">Ordering and Payment</p>
          <p className="mb-2">Return</p>
          <p className="mb-2">FAQs</p>
          <p>Go to Top</p>
        </div>
        <div className="order-2 md:order-3 w-1/2 md:w-1/4 mb-8">
          <p className="footer-h font-bold mb-4">Information</p>
          <p className="mb-2">About Safewash</p>
          <p className="mb-2">Work with Us</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms and Conditions</p>
        </div>
        <div className="order-3 md:order-4 w-1/2 md:w-1/4 mb-20">
          <p className="footer-h font-bold mb-4"> Contact Us</p>
          <p className="mb-2">+23456778889996</p>
          <p className="mb-2">safewash@gmail.com</p>
          <div className="icons flex justify-between mt-6">
            <span>{instagram}</span>
            <span>{facebook}</span>
            <span>{twitter}</span>
            <span>{linkedin}</span>
          </div>
        </div>
      </div>
      <div className="last-footer text-center py-4">
        <p className="font-extrabold">&#169; bqsafewash 2021</p>
      </div>
    </section>
  );
};

export default Footer;
