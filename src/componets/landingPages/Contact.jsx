import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div
      id="contact"
      className="py-[3rem] text-primarytextcolor bg-backgroundcolor"
    >
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          {/* data-aos="fade-right" */}
          <div className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="desc">
              Get in touch with
              <span className="font-semibold">VELANDIRCH TECHNOLOGIES</span> and
              let us be the catalyst for your digital transformation. Together,
              we can create solutions that align with your vision, helping your
              business reach new heights.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="">
              <input
                type="text"
                className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Full Name"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="">
              <input
                type="text"
                className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Mobile Number"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>

            <div className="">
              <input
                type="email"
                className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="">
              <textarea
                rows="4"
                className="w-full bg-transparent outline-none border rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button className="primary-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
