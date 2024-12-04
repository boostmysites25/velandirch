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
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import contactusbanner from "./assets/images/contactusbanner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
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
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
};

// company details
export const companyDetails = {
  phone: "+91-7904623740",
  whatsapp: "+91-7904623740",
  whatsappbox: "7904623740",
  email: "example@domainname.com",
  address:
    "101,Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008",
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
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    id: 4,
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea’s feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    id: 5,
    question: "What kind of AI solutions do you offer?",
    answer:
      "We provide a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to your business needs.",
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
    desc: "Build a strong digital presence with custom mobile apps and websites that are designed with your audience in mind. Our team creates sleek, responsive, and engaging digital solutions powered by AI to enhance user experiences and drive personalized interactions.",
    detailContent:
      "We design and build mobile apps and websites that elevate your brand’s digital presence. From sleek designs to smooth user experiences, our team develops AI-powered solutions that not only look great but also engage and retain your audience. Whether it’s a user-friendly app or a responsive website, we’ve got you covered. We focus on scalability, performance optimization, and seamless integration with your existing systems. Our approach begins with a deep understanding of your goals and audience to create a product that aligns with your vision. Using modern frameworks and AI, we ensure your app or website is future-ready, secure, and adaptable to evolving user needs. Our development process is transparent and collaborative, allowing you to stay involved at every stage. From concept and wireframing to design, coding, testing, and launch, we handle all aspects of development with a commitment to excellence. Additionally, we offer ongoing support and maintenance to keep your digital presence fresh, relevant, and optimized for performance. Our ultimate aim is to deliver solutions that not only meet your current needs but also provide a strong foundation for growth and success in the competitive digital landscape. With an emphasis on AI, performance, and aesthetics, we strive to deliver apps and websites that captivate users, foster engagement, and drive measurable results.",
  },
  {
    id: 2,
    link: "/services/ai-development",
    title: "Artificial Intelligence Development",
    desc: "Stay future-ready with our advanced AI solutions. From predictive analytics to machine learning models, we help you make smarter decisions, streamline operations, and boost productivity through intelligent AI-powered automation.",
    detailContent:
      "Our AI services help you make smarter decisions and automate processes that boost productivity. From intelligent data analysis to custom machine learning algorithms, we build AI solutions that enhance efficiency and uncover new growth opportunities. We specialize in natural language processing, image recognition, predictive modeling, and AI-driven automation. Our team focuses on understanding your unique challenges and tailoring AI solutions that drive meaningful results. With AI, you can identify patterns in large datasets, forecast trends, and personalize customer experiences like never before. Our solutions seamlessly integrate AI into your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations. We use cutting-edge AI tools and technologies to build systems that are robust, secure, and scalable. Whether you are looking to implement AI chatbots, recommendation engines, fraud detection systems, or predictive analytics, our AI expertise ensures your business stays ahead of the curve. By integrating AI into your processes, we help you reduce costs, enhance customer satisfaction, and drive innovation in ways that were previously unimaginable. With a focus on transparency and collaboration, we ensure you understand and harness the full potential of AI for sustainable growth and competitive advantage.",
  },
  {
    id: 3,
    link: "/services/chatbot-development",
    title: "Chatbot Development",
    desc: "Deliver efficient, around-the-clock customer service with AI-powered custom-built chatbots that handle inquiries, support users, and enhance the customer journey. Our bots are tailored to align with your brand’s voice and offer a seamless user experience.",
    detailContent:
      "Keep your customers engaged and supported with custom AI-powered chatbots that streamline communication. Our chatbots are designed to answer common questions, improve customer satisfaction, and provide real-time assistance 24/7, enhancing your service without added effort. From rule-based bots to advanced AI-driven conversational agents, we ensure your chatbot is equipped to handle diverse scenarios. Our development process involves understanding your business needs and crafting a chatbot that aligns with your brand’s tone and personality. We incorporate natural language processing (NLP) and AI to make interactions more human-like and intuitive. Our chatbots are capable of integrating with various platforms, including websites, social media, and messaging apps, to provide a seamless user experience. We also focus on scalability, ensuring your chatbot can handle increasing traffic as your business grows. Our post-launch support includes monitoring and updates to keep your chatbot performing optimally. By reducing response times and improving user engagement, our AI-powered chatbot solutions not only enhance customer satisfaction but also free up your team to focus on more complex tasks, ultimately driving efficiency and value for your organization.",
  },
  {
    id: 4,
    link: "/services/data-analytics",
    title: "Data Analytics and Business Intelligence",
    desc: "Unlock actionable insights with AI-driven data analytics solutions. Our data analytics services provide a clearer picture of your business performance, helping you make informed, strategic decisions that fuel growth through intelligent data processing.",
    detailContent:
      "We turn data into insights that drive results with the power of AI. Our data analytics and BI services empower you to make informed, data-driven decisions. We help you visualize key metrics, understand trends, and gain actionable intelligence that aligns with your business strategy. Using cutting-edge AI tools and methodologies, we identify patterns, detect anomalies, and provide AI-based recommendations for optimizing performance. Our solutions are tailored to meet your unique business needs, ensuring you gain a competitive edge in your industry. From real-time AI-powered dashboards to predictive analytics, we help you stay ahead of market trends and customer demands. By integrating advanced AI-driven data processing technologies, we enable you to harness the full potential of your data while ensuring security and compliance. Whether you’re looking to improve operational efficiency, enhance customer experiences, or explore new growth opportunities, our AI-powered data analytics services provide the clarity and confidence you need to take your business to the next level.",
  },
  {
    id: 5,
    link: "/services/game-development",
    title: "Game Development",
    desc: "Bring your gaming ideas to life with immersive, AI-enhanced experiences that captivate players. From concept to final launch, we handle every step to create high-quality games powered by AI that resonate with audiences across platforms.",
    detailContent:
      "Our game development team transforms ideas into engaging AI-enhanced experiences that captivate players. From character design to immersive storylines and detailed gameplay mechanics, we bring each element to life, creating games that resonate with audiences across platforms. We specialize in mobile, console, and PC game development, ensuring each product is optimized for performance and player satisfaction. Our end-to-end services include concept design, AI-driven prototyping, testing, and post-launch support, ensuring your game exceeds expectations at every stage. We use advanced AI technologies and frameworks to deliver high-quality graphics, smooth performance, and engaging gameplay. Our team focuses on understanding your vision and audience, tailoring each game to meet your goals. Whether it’s a casual mobile game or an expansive multiplayer experience, we bring creativity and technical expertise to every project. With AI, we also incorporate intelligent behavior in NPCs, adaptive difficulty levels, and player-tailored experiences. We also provide marketing support and monetization strategies to maximize your game’s reach and profitability. Let us take your gaming vision to the next level with our comprehensive AI-powered development solutions.",
  },
  {
    id: 6,
    link: "/services/blockchain-development",
    title: "Blockchain Development",
    desc: "Leverage the power of AI and blockchain to build secure, transparent, and decentralized systems. From cryptocurrency solutions to smart contracts, we deliver innovative AI-powered blockchain applications tailored to your business.",
    detailContent:
      "Blockchain technology is revolutionizing industries, and we’re here to help you harness its potential with AI integration. Our blockchain development services empower your business with secure, transparent, and decentralized systems that drive trust and efficiency. Whether you need a cryptocurrency solution, a smart contract platform, or a decentralized app (dApp), we provide end-to-end AI-powered blockchain development tailored to your goals. We specialize in various blockchain frameworks, including Ethereum, Hyperledger, and Binance Smart Chain, ensuring the right solution for your needs. Our process begins with understanding your requirements and designing an AI-integrated system architecture that aligns with your business objectives. We then implement scalable, secure, and efficient solutions with a strong emphasis on performance and reliability. From digital wallets and token development to supply chain solutions and DeFi platforms, we cover a wide range of blockchain use cases. Our team ensures seamless integration of blockchain and AI technologies with your existing systems, minimizing disruption while maximizing value.",
  },
  {
    id: 7,
    link: "/services/machine-learning",
    title: "Machine Learning",
    desc: "Turn your data into actionable intelligence with custom machine learning models powered by AI. From predictive analytics to recommendation engines, we build solutions that learn and adapt to drive meaningful outcomes.",
    detailContent:
      "Machine learning (ML) powered by AI is a transformative technology that enables businesses to derive actionable insights and make smarter decisions. Our ML solutions are tailored to your unique needs, helping you unlock the potential of your data. We specialize in building custom algorithms for predictive analytics, recommendation engines, anomaly detection, and more. Our team uses advanced AI frameworks and tools like TensorFlow, PyTorch, and Scikit-learn to create models that learn and adapt as they process more data. Whether it’s analyzing customer behavior, optimizing supply chains, or automating complex processes, our AI-powered ML solutions drive efficiency and innovation. We start by understanding your business challenges and defining clear objectives for the ML project. Our team then cleanses and preprocesses your data, develops tailored AI-driven models, and integrates the solution seamlessly into your existing workflows.",
  },
  {
    id: 8,
    link: "/services/cloud-computing",
    title: "Cloud Computing",
    desc: "Scale your infrastructure seamlessly with AI-enhanced cloud computing solutions. We build secure, scalable, and flexible cloud systems that help your business grow without worrying about limitations.",
    detailContent:
      "Cloud computing provides businesses with flexible, scalable infrastructure, and by integrating AI, we enhance these capabilities even further. We help you migrate to the cloud or optimize your existing cloud systems with AI-powered tools that increase efficiency, reduce costs, and improve scalability. Whether you’re looking for cloud storage, compute resources, or AI-driven automation, our cloud solutions are designed to meet your unique needs. Our team specializes in platforms like AWS, Google Cloud, and Microsoft Azure, leveraging the power of AI to enhance security, monitoring, and performance optimization. With AI, we can build systems that automatically adjust to changing demand, provide predictive insights for better decision-making, and enhance the overall efficiency of your cloud-based operations.",
  },
  {
    id: 9,
    link: "/services/rpa",
    title: "Robotic Process Automation (RPA)",
    desc: "Streamline repetitive tasks with AI-powered RPA solutions that increase efficiency, reduce errors, and free up your team for strategic initiatives. Automate workflows and processes to enhance productivity across your organization with intelligent automation.",
    detailContent:
      "Robotic Process Automation (RPA), powered by AI, is revolutionizing how businesses handle repetitive tasks by automating workflows to enhance efficiency and accuracy. Our AI-integrated RPA solutions free up your team to focus on higher-value tasks, allowing your organization to achieve greater productivity and operational excellence. We specialize in designing, developing, and deploying AI-driven RPA solutions tailored to your unique business processes. Using advanced tools like UiPath, Automation Anywhere, and Blue Prism, we create intelligent bots capable of handling tasks such as data entry, invoice processing, customer support, and more, with an added layer of AI to optimize decision-making. Our process begins by identifying areas where AI-driven automation can deliver the most value. We then design RPA workflows that integrate seamlessly with your existing systems and applications, ensuring minimal disruption and maximizing impact. Our AI-powered bots are designed to operate with precision, consistency, and speed, reducing errors and operational costs while learning from every task to continuously improve performance. We also provide ongoing support to monitor and refine the automation, ensuring it continues to deliver optimal results as your business evolves. By adopting AI-enhanced RPA, your business can achieve faster turnaround times, improved accuracy, cost savings, and smarter decision-making, all while maintaining high levels of service quality. RPA is not just a tool; it’s a strategic solution for transforming the way you work and unlocking new levels of efficiency, growth, and intelligence.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with VELANDIRCH AI was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us think through user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The AI solutions from VELANDIRCH AI have completely transformed our operations. Their team helped us automate data processes, which has freed up our team for higher-level tasks. The insights and predictive analytics they’ve provided have given us a competitive edge we didn’t think was possible.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot that VELANDIRCH AI developed for us has been a game-changer. It’s seamless, efficient, and our customers are happier than ever with the faster response times. We’re saving so much time on routine inquiries, and it’s made a noticeable difference in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Working with VELANDIRCH AI on our data analytics strategy was one of our best investments. Their team transformed our raw data into meaningful insights that have guided our recent business decisions. We’ve already seen measurable results, and we’re excited to keep building on this foundation.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The gaming app VELANDIRCH AI created exceeded all our expectations. From design to development, every aspect was handled with incredible attention to detail. Our players are hooked, and we couldn’t have achieved this level of engagement without their expertise!”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monica B.",
    role: "CTO at FinSecure",
    desc: "“We were initially overwhelmed by the complexity of blockchain, but VELANDIRCH AI made it easy to understand and implement. Their team developed a secure blockchain solution tailored to our needs, and it’s given us and our clients peace of mind in every transaction.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Thanks to VELANDIRCH AI, we’ve integrated machine learning into our products, giving us a new level of insight into customer behavior. Their team’s knowledge and hands-on approach made the entire process smooth and rewarding. It’s changed the way we operate.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from VELANDIRCH AI have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Implementing RPA with VELANDIRCH AI has transformed our day-to-day operations. Tasks that used to be time-consuming are now handled quickly and accurately, giving our team more freedom to focus on strategic initiatives. The impact on efficiency is undeniable.”",
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

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
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

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "A beauty and wellness app offering personalized skincare and grooming solutions.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Heart",
    description:
      "At VELANDIRCH AI, innovation is at the core of everything we do. We continuously embrace emerging technologies and industry trends to craft future-ready solutions that redefine possibilities.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We adopt a personalized approach, customizing each project to align seamlessly with your specific requirements. We collaborate closely with our clients, fostering long-term partnerships built on trust, transparency, and shared success.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality and reliability form the foundation of our work. We take pride in crafting world-class digital solutions that are robust, scalable, and secure. Every project undergoes thorough quality assurance.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We believe that technology is only as valuable as the purpose it serves. Our mission is to harness the power of technology to create meaningful impacts—streamlining operations, elevating customer experiences, and driving business growth.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End to End Solutions",
    description:
      "We provide a comprehensive range of services, ensuring end-to-end support from initial concept to deployment and beyond. Our aim is to be your trusted partner throughout your digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
