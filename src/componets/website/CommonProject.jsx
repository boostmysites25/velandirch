import React from "react";
import { appPortfolioHomepage, webPortfolioHomepage } from "../../constant";

const CommonProject = () => {
  return (
    <div className="my-[5rem]">
      <div className="wrapper">
        <div>
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Portfolio
          </div>
          <h3 className="heading-2 text-center my-8">Web Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {webPortfolioHomepage.map((obj) => (
              <div key={obj.id} data-aos="fade-up">
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="rounded-xl hover:scale-105 transition-all duration-300"
                />
                <div className="px-3 mt-3">
                  <h4 className="font-semibold text-xl">{obj.title}</h4>
                  <p className="desc">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="heading-2 text-center my-8">App Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {appPortfolioHomepage.map((obj) => (
              <div key={obj.id} className="" data-aos="fade-up">
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="rounded-xl hover:scale-105 transition-all duration-300"
                />
                <div className="px-3 mt-3">
                  <h4 className="font-semibold text-xl">{obj.title}</h4>
                  <p className="desc">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProject;
