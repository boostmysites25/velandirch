import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Your Partner in Transformative Digital Solutions
            </h1>
            <p className="desc">
              At VELANDIRCH TECHNOLOGIES, we craft cutting-edge IT solutions
              tailored to meet the evolving needs of businesses, ensuring
              efficiency, growth, and innovation.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Enhancing Operations with Advanced Technology.
              </h2>
              <p className="desc">
                At VKM Techno Solutions, we take immense pride in delivering
                top-notch digital solutions that cater to the evolving needs of
                today’s dynamic business environment. We are passionate about
                innovation, creativity, and excellence, and these principles
                guide every project we undertake. As a trusted technology
                partner, we are dedicated to transforming your bold ideas into
                reality through cutting-edge technology and innovative digital
                strategies. Our core expertise spans across Web Development, App
                Development, UX/UI Design, Chatbot Development, Machine Learning
                Solutions, and Game Development—empowering businesses to not
                just survive but to thrive and grow in the fast-paced,
                competitive digital landscape.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-[#333333] text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#7186FF] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Dependable IT Support Tailored for Your Business
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At VELANDIRCH TECHNOLOGIES, we recognize that your website is more
            than just an online presence—it's the cornerstone of your brand, a
            powerful business tool, and often the first interaction with
            potential customers. In a world where first impressions are
            critical, having a well-designed, fast, and responsive website is
            essential for business success. Our website development services go
            beyond the basics to deliver a complete digital experience that
            enhances engagement, drives conversions, and accelerates your
            business growth.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
