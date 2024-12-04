import React from "react";
import { allServices } from "../../constant";
import { Link } from "react-router-dom";
import { PiCaretDoubleRightBold } from "react-icons/pi";

const ServiceItems = () => {
  return (
    <div className="py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Cutting-Edge Innovation with Unmatched Reliability
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At VELANDIRCH AI , we’re dedicated to crafting technology solutions
          that empower businesses to thrive. Here’s how we can support your
          vision with tailored, innovative services:
        </p>

        <div
          data-aos="fade-up"
          className=" grid sm:grid-cols-2 md:grid-cols-3  mt-3 gap-5"
        >
          {allServices.map((service) => (
            <Link
              // onClick={() => handleSelectServiceToShowDetail(service)}
              // data-aos="fade-up"
              to={service.link}
              key={service.id}
              data-aos="fade-up"
              className=" rounded-lg p-[1px]  cursor-pointer"
            >
              <div className="rounded-lg border bg-backgroundcolor border-primary  hover:bg-black/30 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.title}
                  </h5>
                  <p className="desc text-primarytextcolor">{service.desc}</p>
                </div>
                <button
                  // onClick={() => handleSelectServiceToShowDetail(service)}
                  className="font-inter mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300 underline underline-offset-4"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
