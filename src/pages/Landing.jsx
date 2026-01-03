import React, { useState,useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function Landing() {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection(null); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const faqData = [
    {
      question: "How do I access my enrolled courses?",
      answer:
        "Once you log in to the dashboard, all your enrolled subjects will be visible on your home screen. You can click on any subject to see the modules and lessons.",
    },
    {
      question: "Can I take the MCQ assessments multiple times?",
      answer:
        "Assessment rules are set by your respective department mentors. Usually, you can attempt them once, but results and feedback are provided instantly after submission.",
    },
    {
      question: "I'm unable to log in. Who should I contact?",
      answer:
        "Please contact your department's system administrator or visit the IT support cell in the main block for credential resets.",
    },
    {
      question: "Is the KIT eCampus accessible on mobile?",
      answer:
        "Yes, the platform is fully responsive. You can access it via any modern mobile browser to learn on the go.",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const ugGroup1 = [
    "B.E. Aeronautical Engineering",
    "B.Tech. Agricultural Engineering",
    "B.Tech. Artificial Intelligence & Data Science",
    "B.E. Biomedical Engineering",
    "B.Tech. Biotechnology",
    "B.Tech. Computer Science and Business Systems",
    "B.E. Computer Science & Engineering",
    "B.E. CSE (Artificial Intelligence & Machine Learning)",
    "B.E. Computer Science and Engineering (Cyber Security)",
    "B.E. Electronics & Communication Engineering",
    "B.E. Electronics Engineering (VLSI Design and Technology)",
  ];

  const ugGroup2 = [
    "B.E. Electronics Engineering (VLSI Design and Technology)",
    "B.E. Electrical & Electronics Engineering",
    "B.E. Mechanical Engineering",
  ];

  const pgDepartments = [
    "M.E. Applied Electronics",
    "M.E. Computer Science and Engineering",
    "M.E. Power Systems Engineering",
    "M.E. Engineering Design",
    "M.E. VLSI Design",
    "MBA",
    "MCA",
  ];
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <nav className="fixed border-b border-gray-200 h-[10vh] md:h-[12vh] w-full py-2 bg-white z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <img
                src="https://i.ibb.co/bM5YrcT2/logored.png"
                alt="dd"
                className="w-28 md:w-35"
              />
            </button>

            <div className="nav-items hidden md:block">
              <ul
                className="flex space-x-4 lg:space-x-8"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("about")}
                    className={`transition-colors ${
                      activeSection === "about"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    About
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("features")}
                    className={`transition-colors ${
                      activeSection === "features"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Features
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("dep")}
                    className={`transition-colors ${
                      activeSection === "dep"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Departments
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("faq")}
                    className={`transition-colors ${
                      activeSection === "faq"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Help & FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex space-x-6">
              <button
                className="custom-button flex items-center gap-2"
                onClick={() => window.open("/Dashboard", "_blank")}
              >
                Go to Dashboard{" "}
                <img
                  src="https://i.ibb.co/jvt9xNnc/arrow.png"
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </div>

            <div
              className="md:hidden text-2xl text-gray-600 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <>&#9932;</> : <>&#9776;</>}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white pb-4 pt-2 border-b border-gray-200 shadow-lg px-4">
            <ul
              className="flex flex-col space-y-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("about")}
                    className={`transition-colors ${
                      activeSection === "about"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    About
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("features")}
                    className={`transition-colors ${
                      activeSection === "features"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Features
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("dep")}
                    className={`transition-colors ${
                      activeSection === "dep"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Departments
                  </button>
                </li>

                <li>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("faq")}
                    className={`transition-colors ${
                      activeSection === "faq"
                        ? "text-[#E2343C]"
                        : "text-[#00000096]"
                    }`}
                  >
                    Help & FAQ
                  </button>
                </li>
              <li className="pt-2">
                <button className="custom-button flex items-center gap-2" onClick={() => window.open("/Dashboard", "_blank")}>
                  Go to Dashboard
                  <img
                    src="https://i.ibb.co/jvt9xNnc/arrow.png"
                    alt=""
                    className="w-4 h-4"
                  />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div
        style={{ marginTop: "10vh" }}
        className="w-full relative bg-[#419CE1de] h-[90vh] mt-10vh flex flex-col justify-center"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://i.ibb.co/CpChHbQn/Gemini-Generated-Image-o7iwpeo7iwpeo7iw.png"
            alt="kit"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        <div className="linear absolute inset-0 bg-[#ffffff09] backdrop-blur-[2px] w-full h-full flex items-center z-10">
          <div className="w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center px-4 pt-10 md:pt-0">
            <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col justify-center items-center md:pl-8 mb-8 md:mb-0">
              <h2
                className="text-4xl lg:text-6xl font-bold text-gray-700 mb-2 md:mb-6"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Welcome to
              </h2>
              <div
                className="font-bold text-white mb-4 md:mb-6 text-5xl lg:text-7xl xl:text-8xl leading-tight"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                KIT{" "}
                <span style={{ color: "#E2343C" }} className="">
                  eCampus
                </span>
              </div>
              <p
                className="text-sm text-center md:p-4 md:rounded-lg sm:text-base md:text-sm lg:text-lg text-gray-900 md:text-black  mb-6 md:mb-12 max-w-xl md:max-w-3xl lg:max-w-2xl leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Your gateway to seamless campus management, empowering students
                and faculty with intuitive tools, streamlined communication, and
                smart services for a more connected, efficient, and vibrant
                campus experience.
              </p>
              <button className="custom-button flex items-center gap-2" onClick={() => window.open("/Dashboard", "_blank")}>
                Get Started{" "}
                <img
                  src="https://i.ibb.co/jvt9xNnc/arrow.png"
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </div>

            <div className="w-full md:w-[70%] lg:w-[50%] h-[50vh] md:h-full flex items-end justify-center md:justify-end overflow-hidden">
              <img
                src="https://i.ibb.co/ccjHDKsM/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDI1-LTA2-L3-Jhd3-Bpe-GVsb2-Zma-WNl-N19wa-G90b19v-Zl95b3-Vu-Z19pb.png"
                alt=""
                className="max-h-full w-auto object-contain md:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid justify-center lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
                <span
                  className="text-[#E2343C] font-bold tracking-widest uppercase text-sm"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Institutional LMS
                </span>
              </div>
              <h2
                className="text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                What is <span className="text-[#E2343C]">KIT eCampus?</span>
              </h2>
              <div
                className="space-y-6 text-lg text-gray-600"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <p>
                  KIT eCampus is a centralized Learning Management System
                  designed for
                  <span className="font-semibold text-gray-900">
                    {" "}
                    Kalaignar Karunanidhi Institute of Technology
                  </span>{" "}
                  to digitally manage teaching and learning.
                </p>
                <p>
                  The system simplifies academic workflows, reduces manual
                  tracking, and bridges the gap between classroom learning and
                  digital education by providing an organized, secure, and
                  scalable platform.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Structured",
                  desc: "Content organized by course and module.",
                  icon: "https://i.ibb.co/rfRYnZjk/read-svgrepo-com.png",
                },
                {
                  title: "Tracked",
                  desc: "Real-time progress for every student.",
                  icon: "https://i.ibb.co/HfnWWwMC/discover-svgrepo-com.png",
                },
                {
                  title: "Assessments",
                  desc: "Online MCQs and instant results.",
                  icon: "https://i.ibb.co/6frFPJm/question-and-answer-svgrepo-com.png",
                },
                {
                  title: "Interaction",
                  desc: "Role-based collaborative environment.",
                  icon: "https://i.ibb.co/Kch2rcbJ/attend-class-svgrepo-com.png",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                >
                  <div className="text-3xl mb-3">
                    <img src={item.icon} alt="" className="w-14" />
                  </div>
                  <h4
                    className="font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-right mb-8 md:mb-16">
            <div className="flex items-center gap-2 mb-4 justify-end">
              <span
                className="text-[#E2343C] font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                User Groups
              </span>
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Who is <span className="text-[#E2343C]">KIT eCampus</span> for?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-3xl border border-dashed border-gray-200">
              <h3
                className="text-3xl font-bold text-[#E2343C] mb-8"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                For Students
              </h3>
              <ul className="space-y-5">
                {[
                  "Access enrolled subjects and lessons 24/7",
                  "Learn at your own pace with structured content",
                  "Attempt assessments and track completions",
                  "Visualize academic growth in one dashboard",
                  "Access enrolled subjects and lessons 24/7",
                  "View academic progress clearly in one place",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-gray-700 text-lg">
                    <svg
                      className="w-6 h-6 text-[#E2343C] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-700 p-10 rounded-3xl text-white">
              <h3
                className="text-3xl font-bold text-[#E2343C] mb-8"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                For Mentors
              </h3>
              <ul className="space-y-5">
                {[
                  "Easily manage assigned subjects and content",
                  "Design and deploy MCQ assessments",
                  "Monitor real-time student performance",
                  "Analyze learning outcomes with data",
                  "Access enrolled subjects and lessons 24/7",
                  "View academic progress clearly in one place",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-gray-300 text-lg">
                    <svg
                      className="w-6 h-6 text-[#E2343C] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24  bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-8 md:mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
              <span
                className="text-[#E2343C] font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Capabilities
              </span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Features of <span className="text-[#E2343C]">KIT eCampus</span>
            </h2>
            <p
              className="max-w-2xl text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              A comprehensive ecosystem designed to modernize the educational
              experience, bridging the gap between traditional learning and
              digital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border border-dashed border-gray-300 rounded-2xl">
              <div className="w-18 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl transition-transform">
                  <img
                    src="https://i.ibb.co/7dJPY0P9/online-class-svgrepo-com.png"
                    alt="🧑🏻‍💻"
                  />
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-gray-800"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Online Learning
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                KIT eCampus provides a structured environment where academic
                content is organized by subjects, modules, and lessons. Students
                can access materials anytime, enabling self-paced learning
                beyond the traditional classroom.
              </p>
            </div>

            <div className="group p-8 bg-white border border-dashed border-gray-300 rounded-2xl">
              <div className="w-20 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl transition-transform">
                  <img
                    src="https://i.ibb.co/6frFPJm/question-and-answer-svgrepo-com.png"
                    alt="📝"
                  />
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-gray-800"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                MCQs & Assessments
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                The platform supports MCQ-based assessments lesson-wise.
                Students receive immediate results, helping in continuous
                evaluation and improved academic performance through regular
                self-assessment.
              </p>
            </div>

            <div className="group p-8 bg-white border border-dashed border-gray-300 rounded-2xl">
              <div className="w-18 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6 ">
                <span className="text-3xl transition-transform">
                  <img
                    src="https://i.ibb.co/0RndtrN2/statistics-svgrepo-com.png"
                    alt="📊"
                  />
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-gray-800"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Progress Tracking
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Offers transparent tracking at lesson, module, and subject
                levels. Students can monitor their completion percentage, while
                instructors track performance to identify areas that need
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 bg-white" id="dep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
              <span
                className="text-[#E2343C] font-bold tracking-widest uppercase text-xs md:text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Academic Portfolio
              </span>
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Our <span className="text-[#E2343C]">Departments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div className="p-6 md:p-8 rounded-3xl border border-dashed border-gray-300 bg-gray-50 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Undergraduate <span className="text-[#E2343C]">(UG)</span>
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {ugGroup1.map((dept, idx) => (
                  <div
                    key={`ug1-${idx}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-[#E2343C] rounded-full"></div>
                    <span
                      className="text-gray-700 font-medium text-sm"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {dept}
                    </span>
                  </div>
                ))}
                <div className="contents lg:hidden">
                  {ugGroup2.map((dept, idx) => (
                    <div
                      key={`ug2-mobile-${idx}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-[#E2343C] rounded-full"></div>
                      <span
                        className="text-gray-700 font-medium text-sm"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {dept}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full gap-4">
              <div className="hidden lg:block p-8 rounded-3xl border border-dashed border-gray-300 bg-gray-50">
                <div className="flex flex-col gap-3">
                  {ugGroup2.map((dept, idx) => (
                    <div
                      key={`ug2-desktop-${idx}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-[#E2343C] rounded-full"></div>
                      <span
                        className="text-gray-700 font-medium text-sm"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {dept}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-3xl border border-dashed border-gray-300 bg-gray-50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <span className="text-3xl text-white">📜</span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Postgraduate <span className="text-[#E2343C]">(PG)</span>
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {pgDepartments.map((dept, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-[#E2343C] rounded-full"></div>
                      <span
                        className="font-medium text-sm"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {dept}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-12 md:py-24 bg-gray-50"
        id="faq"
        onClick={() => setActiveIndex(null)}
      >
        <div
          className="max-w-4xl mx-auto px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center mb-8 md:mb-16">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
              <span
                className="text-[#E2343C] font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Support Center
              </span>
              <span className="h-1 w-12 bg-[#E2343C] rounded-full"></span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Help & <span className="text-[#E2343C]">FAQs</span>
            </h2>
            <p
              className="text-gray-500"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Everything you need to know about the KIT eCampus platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-dashed border-gray-300 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left bg-transparent border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none hover:outline-none hover:ring-0 active:outline-none select-none"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span
                    className={`flex justify-between items-center w-full text-lg font-bold transition-colors duration-300 ${
                      activeIndex === index ? "text-[#E2343C]" : "text-gray-800"
                    }`}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {faq.question}
                    <span
                      className={`text-3xl leading-none transition-transform duration-300 ease-in-out transform ${
                        activeIndex === index
                          ? "rotate-45 text-[#E2343C]"
                          : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="p-6 pt-4 text-gray-600 leading-relaxed"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p
              className="text-gray-500 flex flex-col md:flex-row justify-center items-center gap-2"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Still have questions?{" "}
              <a href="mailto:hadilkk63@gmail.com" className="custom-link">
                Contact Technical Support
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer
        className="bg-gray-50 pt-12 pb-12 bg-gray-700"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <a href="/">
                  <img
                    src="https://i.ibb.co/jZ5kx9bm/logo-white.png"
                    alt="logo-white"
                    className="w-45 -ml-1"
                  />
                </a>
              </div>
              <p className="text-[#ffffff97] leading-relaxed mb-6">
                Empowering students with world-class digital learning resources
                and technical support for a seamless academic journey.
              </p>
              <button className="custom-button" onClick={() => window.open("/Dashboard", "_blank")}>
                Get started
                <img
                  src="https://i.ibb.co/jvt9xNnc/arrow.png"
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["About", "Features", "Departments", "Help & FAQ"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        style={{ color: "#ffffff97" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#ffffffc5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "#ffffff97")
                        }
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                Support
              </h4>
              <ul className="space-y-4">
                {["Technical Support", "FAQs", "Contact Us", "Feedback"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        style={{ color: "#ffffff97" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#ffffffc5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "#ffffff97")
                        }
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <p className="text-[#ffffff97] leading-relaxed">
                  Computer Science & Engineering,
                  <br />
                  2nd Year, BE, KIT CBE
                </p>

                <p className="text-[#ffffff97]">
                  <span className="text-white font-semibold block text-xs uppercase tracking-wide mb-1">
                    Email
                  </span>
                  hadilkk63@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KIT eCampus Platform. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                style={{ color: "#ffffff97" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffffc5")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff97")}
                className="text-xs lg:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "#ffffff97" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffffc5")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff97")}
                className="text-xs lg:text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                style={{ color: "#ffffff97" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffffc5")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff97")}
                className="text-xs lg:text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
