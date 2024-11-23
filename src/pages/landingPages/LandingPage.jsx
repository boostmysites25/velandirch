import React from "react";
// import section5Img1 from "../../assets/images/section-5-img-1.png";
// import section5Img2 from "../../assets/images/section-5-img-2.png";
// import section5Img3 from "../../assets/images/section-5-img-3.png";
// import section5Img4 from "../../assets/images/section-5-img-4.png";
// import section5Img5 from "../../assets/images/section-5-img-5.png";
// import section5Img6 from "../../assets/images/section-5-img-6.png";
// import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
// import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Portfolio from "../../componets/landingPages/Portfolio";
import ReactPlayer from "react-player";
import landingpagevideo from "../../assets/videos/landingpagevideo.mp4";
import Faqs from "../../componets/common/Faqs";
export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={landingpagevideo}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        {/* <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        /> */}
        <div className="bg-gradient-to-r from-white/20 to-primary/20 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            <h1 className="heading-1 text-white">
              {isWebDevelopment
                ? "Building Websites That Define Your Brand's Digital Presence"
                : "Transforming Your Ideas into Engaging Mobile Experiences"}
            </h1>
            <p className="text-white desc font-medium">
              We specialize in crafting innovative IT solutions designed to meet
              the unique demands of today’s dynamic businesses.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>
      {/* <Contact /> */}

      <div
        data-aos="fade-up"
        id="contacts"
        className="py-[5rem] text-primarytextcolor bg-backgroundcolor"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Get In Touch With Us!</h2>
              <p className="desc">
                Get in touch with{" "}
                <span className="font-semibold">VELANDIRCH TECHNOLOGIES</span>
                and let us be the catalyst for your digital transformation.
                Together, we can create solutions that align with your vision,
                helping your business reach new heights.
              </p>
            </div>
            <form className="flex flex-col gap-4 md:px-[1rem]">
              <div className="">
                <input
                  required
                  className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="">
                <input
                  required
                  className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="">
                <input
                  required
                  className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="">
                <textarea
                  className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                  rows="4"
                  placeholder="Message"
                  required
                />
              </div>
              <button className="primary-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {isWebDevelopment ? "Web Development" : "App Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Empowering Modern Brands with Innovative Web Development"
                  : "Crafting Apps that Transform Ideas into Business Success"}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "We blend creativity with technical expertise to craft websites that reflect your brand’s identity while offering a seamless, responsive experience on all devices. Let us help you connect with your audience and accelerate your growth."
                  : "From startups with bold ideas to enterprises aiming for innovation, we offer end-to-end app development services tailored to your goals. Our apps enhance engagement, optimize functionality, and scale with your growth, giving you a winning edge."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem] w-full"
              alt=""
            />
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <WhyChooseUs />

      {/* <section className="py-[5rem] bg-black text-primarytextcolor">
        <div className="wrapper text-center flex flex-col gap-3">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Solutions
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1 bg-gradient-to-r from-[#7186FF_40%] md:min-h-[5rem] to-[#A502A8_50%] bg-clip-text text-transparent"
          >
            Design & Revolution
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            At VKM Techno Solutions, we understand that in today’s digital-first
            world, your website is more than just an online presence—it’s the
            heart of your brand’s identity, a vital business tool, and often the
            first touchpoint for potential customers. In an era where first
            impressions matter more than ever, having a well-designed, fast, and
            responsive website is crucial to your business success. That’s why
            our website development services go beyond the basics—we aim to
            deliver not just a website, but a complete digital experience that
            drives engagement, boosts conversions, and empowers your business to
            grow.
          </p>
        </div>
      </section> */}

      {/* <section className="bg-gradient-to-r from-secondary/80 to-primary/80 md:from-secondary/30 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col -translate-y-[20%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-y-[20%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc text-white/70">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Faqs /> */}

      <UnlockEfficiency />
      <Portfolio page={page} />
      <Testimonials />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <Contact />
    </>
  );
};
