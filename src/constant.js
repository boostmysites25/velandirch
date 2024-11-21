import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.webp";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.png";
import profileImg2 from "./assets/images/profileimg-2.png";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
};

// company details
export const companyDetails = {
  phone: "+91-9842149738",
  whatsapp: "+91-9842149738",
  email: "example@domainname.com",
  address:
    "RTF NO 938/3B3A3, LR hlls, V kevv Road, xyz, 873899, abc District, Tamil Nadu, India",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering online businesses with tailored e-commerce solutions. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences and build brand loyalty, driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages that grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites designed to meet your unique business needs. Our solutions seamlessly combine creativity and functionality for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin to create robust and efficient applications.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Implementing smart strategies to overcome challenges and ensure top performance.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Creating mobile-friendly apps that work seamlessly across iOS and Android platforms.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    link: "/services/web-app-development",
    title: "Mobile and Web Development",
    desc: "Build a strong digital presence with custom mobile apps and websites that are designed with your audience in mind. Our team creates sleek, responsive, and engaging digital solutions that reflect your brand and meet your goals.",
    detailContent:
      "We design and build mobile apps and websites that elevate your brand’s digital presence. From sleek designs to smooth user experiences, our team develops solutions that not only look great but also engage and retain your audience. Whether it’s a user-friendly app or a responsive website, we’ve got you covered.",
  },
  {
    id: 2,
    link: "/services/ai-development",
    title: "Artificial Intelligence Development",
    desc: "Stay future-ready with our advanced AI solutions. From predictive analytics to machine learning models, we help you make smarter decisions, streamline operations, and boost productivity through intelligent automation.",
    detailContent:
      "Our AI services help you make smarter decisions and automate processes that boost productivity. From intelligent data analysis to custom machine learning algorithms, we build AI solutions that enhance efficiency and uncover new growth opportunities.",
  },
  {
    id: 3,
    link: "/services/chatbot-development",
    title: "Chatbot Development",
    desc: "Deliver efficient, around-the-clock customer service with custom-built chatbots that handle inquiries, support users, and enhance the customer journey. Our bots are tailored to align with your brand’s voice and offer a seamless user experience.",
    detailContent:
      "Keep your customers engaged and supported with custom chatbots that streamline communication. Our chatbots are designed to answer common questions, improve customer satisfaction, and provide real-time assistance 24/7, enhancing your service without added effort.",
  },
  {
    id: 4,
    link: "/services/data-analytics",
    title: "Data Analytics and Business Intelligence",
    desc: "Unlock actionable insights with data-driven intelligence. Our data analytics solutions provide a clearer picture of your business performance, helping you make informed, strategic decisions that fuel growth.",
    detailContent:
      "We turn data into insights that drive results. Our data analytics and BI services empower you to make informed, data-driven decisions. We help you visualize key metrics, understand trends, and gain actionable intelligence that aligns with your business strategy.",
  },
  {
    id: 5,
    link: "/services/game-development",
    title: "Game Development",
    desc: "Bring your gaming ideas to life with immersive experiences that captivate players. From concept to final launch, we handle every step to create high-quality games that resonate with audiences across platforms.",
    detailContent:
      "Our game development team transforms ideas into engaging experiences that captivate players. From character design to immersive storylines and detailed gameplay mechanics, we bring each element to life, creating games that resonate with audiences across platforms.",
  },
  {
    id: 6,
    link: "/services/blockchain-development",
    title: "Blockchain Development",
    desc: "Embrace the security and transparency of blockchain. Our blockchain solutions include secure transaction systems and decentralized applications that bring reliability and efficiency to your operations.",
    detailContent:
      "Explore secure, transparent, and decentralized technology with our blockchain services. Whether you’re interested in secure transaction systems, digital contracts, or custom blockchain applications, we help you implement solutions that foster trust and reliability.",
  },
  {
    id: 7,
    link: "/services/machine-learning",
    title: "Machine Learning Services",
    desc: "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes.",
    detailContent:
      "Unlock the potential of your data with custom machine learning models that identify trends, automate decision-making, and enhance customer experiences. Our solutions are tailored to your specific needs, helping you stay competitive with advanced, data-driven insights.",
  },
  {
    id: 8,
    link: "/services/cloud-computing",
    title: "Cloud Computing Services",
    desc: "Achieve greater flexibility and efficiency with our cloud computing solutions. We manage every phase of cloud migration, management, and optimization, ensuring your systems are secure, scalable, and future-ready.",
    detailContent:
      "Gain flexibility, scalability, and cost-effectiveness with cloud solutions that fit your business. We handle everything from cloud migration to ongoing management, allowing your team to work more efficiently and access data from anywhere, securely and seamlessly.",
  },
  {
    id: 9,
    link: "/services/RPA",
    title: "Robotic Process Automation (RPA)",
    desc: "Streamline workflows with RPA solutions that automate repetitive tasks, freeing your team to focus on high-value work. Our RPA services enhance accuracy and speed, boosting your organization’s overall efficiency.",
    detailContent:
      "Automate repetitive tasks and streamline workflows with RPA. Our solutions reduce manual workload, enhance accuracy, and give your team more time to focus on high-value activities. From finance to customer service, RPA can transform how you operate.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg1,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with VELANDIRCH TECHNOLOGIES was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us think through user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg2,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The AI solutions from VELANDIRCH TECHNOLOGIES have completely transformed our operations. Their team helped us automate data processes, which has freed up our team for higher-level tasks. The insights and predictive analytics they’ve provided have given us a competitive edge we didn’t think was possible.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot that VELANDIRCH TECHNOLOGIES developed for us has been a game-changer. It’s seamless, efficient, and our customers are happier than ever with the faster response times. We’re saving so much time on routine inquiries, and it’s made a noticeable difference in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg2,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Working with VELANDIRCH TECHNOLOGIES on our data analytics strategy was one of our best investments. Their team transformed our raw data into meaningful insights that have guided our recent business decisions. We’ve already seen measurable results, and we’re excited to keep building on this foundation.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The gaming app VELANDIRCH TECHNOLOGIES created exceeded all our expectations. From design to development, every aspect was handled with incredible attention to detail. Our players are hooked, and we couldn’t have achieved this level of engagement without their expertise!”",
  },
  {
    id: 6,
    profileImg: profileImg2,
    name: "Monica B.",
    role: "CTO at FinSecure",
    desc: "“We were initially overwhelmed by the complexity of blockchain, but VELANDIRCH TECHNOLOGIES made it easy to understand and implement. Their team developed a secure blockchain solution tailored to our needs, and it’s given us and our clients peace of mind in every transaction.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Thanks to VELANDIRCH TECHNOLOGIES, we’ve integrated machine learning into our products, giving us a new level of insight into customer behavior. Their team’s knowledge and hands-on approach made the entire process smooth and rewarding. It’s changed the way we operate.”",
  },
  {
    id: 8,
    profileImg: profileImg2,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from VELANDIRCH TECHNOLOGIES have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Implementing RPA with VELANDIRCH TECHNOLOGIES has transformed our day-to-day operations. Tasks that used to be time-consuming are now handled quickly and accurately, giving our team more freedom to focus on strategic initiatives. The impact on efficiency is undeniable.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];
