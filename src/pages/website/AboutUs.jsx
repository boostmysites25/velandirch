import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-primarytextcolor text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At VELANDIRCH TECHNOLOGIES, innovation is at the core of
                    everything we do. We continuously embrace emerging
                    technologies and industry trends to craft future-ready
                    solutions that redefine possibilities. Our mission is to
                    deliver solutions that not only address today's challenges
                    but also anticipate and adapt to the demands of tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    At VELANDIRCH TECHNOLOGIES, we recognize that every business
                    is unique, with its own set of challenges and goals. That’s
                    why we adopt a personalized approach, customizing each
                    project to align seamlessly with your specific requirements.
                    Whether you’re a startup or an established enterprise, we
                    collaborate closely with our clients, fostering long-term
                    partnerships built on trust, transparency, and shared
                    success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    At VELANDIRCH TECHNOLOGIES, quality and reliability form the
                    foundation of our work. We take pride in crafting
                    world-class digital solutions that are robust, scalable, and
                    secure. Every project undergoes thorough quality assurance,
                    ensuring we consistently exceed expectations and meet the
                    highest industry standards.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    At VELANDIRCH TECHNOLOGIES, we believe that technology is
                    only as valuable as the purpose it serves. Our mission is to
                    harness the power of technology to create meaningful
                    impacts—streamlining operations, elevating customer
                    experiences, and driving business growth. Our solutions are
                    built to empower businesses, enabling them to scale and lead
                    in their respective industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We provide a comprehensive range of services, ensuring
                    end-to-end support from initial concept to deployment and
                    beyond. At VELANDIRCH TECHNOLOGIES, our aim is to be your
                    trusted partner throughout your digital journey—whether it's
                    establishing your online presence, streamlining your
                    operations, or delivering engaging experiences for your
                    customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <UnlockEfficiency />
        <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Why Choose VELANDIRCH TECHNOLOGIES?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-primary">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-primarytextcolor ml-1">
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
