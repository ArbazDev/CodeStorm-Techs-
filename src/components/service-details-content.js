import React from "react";
import serviceS1 from "@/images/z4.jpg";
import serviceS2 from "@/images/z2.png";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>The Way We Work</h2>
      <p>
        CodeStorm Techs provide web-based online solutions to our valued
        customers in light of their demands and the nature of business. Our
        niche is to harmonize your websites with your intentions for the
        products and services you offer. We have a wide variety of operations
        ranging from still web pages to flash-based lively transformable pages.
        You can avail our services for completely dynamic / customized websites
        and web hosting options.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>planning & strategy</h3>
          <p>
            We assure you that our services are market competitive and are
            conformed to your requirements.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Research beyond the business
              plan
            </li>
            <li>
              <i className="fa fa-check-square"></i>Marketing options and rates
            </li>
            <li>
              <i className="fa fa-check-square"></i>The ability to turnaround
              consulting
            </li>
            <li>
              <i className="fa fa-check-square"></i>Help companies into more
              profitable
            </li>
            <li>
              <i className="fa fa-check-square"></i>Customer engagement matters
            </li>
          </ul>
        </div>
      </div>
      <p>
        We have solutions to all your requirements pertaining to web designing
        and development. We believe in providing you with the recipe which
        satisfies your taste buds with fantastic and unique taste. With our
        experience in marketing strategies for the Pakistani audience, we can
        offer you multiple options for your products and services. However, the
        final choice for advertising or web designing depends on you. Our work
        and collaboration with hosting entities make us a much viable option for
        you. We have multiple plans for our customers based on their type and
        need. We can offer time-constrained solutions which fit your budget.
      </p>

    </div>
  );
};

export default ServiceDetailsContent;
