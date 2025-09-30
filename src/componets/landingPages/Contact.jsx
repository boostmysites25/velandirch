import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/images/contactimage.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";
import CustomDropdown from "../common/CustomDropdown";
const Contact = () => {
  const [spinner, setSpinner] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "App Development" },
    { value: "ai-development", label: "AI Development" },
    { value: "chatbot-development", label: "Chatbot Development" },
    { value: "data-analytics", label: "Data Analytics" },
    { value: "game-development", label: "Game Development" },
    { value: "blockchain-development", label: "Blockchain Development" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "rpa", label: "RPA (Robotic Process Automation)" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" }
  ];

  const budgetOptions = [
    { value: "under-10k", label: "Under $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k-250k", label: "$100,000 - $250,000" },
    { value: "250k-plus", label: "$250,000+" },
    { value: "discuss", label: "Let's Discuss" }
  ];

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    emailBody += "Service Type: " + serviceType + "\n\n";
    emailBody += "Budget Range: " + budgetRange + "\n\n";
    emailBody += "Project Requirements:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      name: companyDetails.name,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from Velandirch",
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        setServiceType("");
        setBudgetRange("");
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      id="contact"
      className="py-[3rem] text-primarytextcolor bg-backgroundcolor "
    >
      <div className="wrapper  rounded-lg ">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          {/* data-aos="fade-right" */}
          <div className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="">
              Get in touch with
              <span className="font-bold"> VELANDIRCH AI </span> and let us be
              the catalyst for your digital transformation. Together, we can
              create solutions that align with your vision, helping your
              business reach new heights.
            </p>
            <img
              src={image}
              alt=""
              className="max-h-[21rem] object-cover rounded-xl"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="hover:scale-105 transition-all duration-500">
              <label htmlFor="" className="mb-6 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full placeholder-slate-800 bg-transparent outline-none border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Enter Full Name"
                {...register("fullName", { required: "Full name is required" })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="hover:scale-105 transition-all duration-500">
              <label htmlFor="" className="mb-6 font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Enter Mobile Number"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>

            <div className="hover:scale-105 transition-all duration-500">
              <label htmlFor="" className="mb-6 font-medium">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="">
              <label htmlFor="" className="mb-6 font-medium">
                Type of Service
              </label>
              <CustomDropdown
                options={serviceOptions}
                value={serviceType}
                onChange={setServiceType}
                placeholder="Select Service Type"
                className="mt-1 w-full bg-transparent outline-none border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
                register={register}
                name="serviceType"
                validation={{ required: "Service type is required" }}
              />
              {errors.serviceType && (
                <span className="text-red-500 text-sm">
                  {errors.serviceType.message}
                </span>
              )}
            </div>

            <div className="">
              <label htmlFor="" className="mb-6 font-medium">
                Budget Range
              </label>
              <CustomDropdown
                options={budgetOptions}
                value={budgetRange}
                onChange={setBudgetRange}
                placeholder="Select Budget Range"
                className="mt-1 w-full bg-transparent outline-none border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
                register={register}
                name="budgetRange"
                validation={{ required: "Budget range is required" }}
              />
              {errors.budgetRange && (
                <span className="text-red-500 text-sm">
                  {errors.budgetRange.message}
                </span>
              )}
            </div>

            <div className="">
              <label htmlFor="" className="mb-6 font-medium">
                Project Requirements
              </label>
              <textarea
                rows="4"
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-2 rounded-sm font-light border-gray-400 px-2 py-3"
                placeholder="Describe your project requirements in detail"
                {...register("message", { required: "Project requirements are required" })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button className="primary-btn" type="submit">
              {spinner ? "Sending..." : "Submit"}
              {/* Submit */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
