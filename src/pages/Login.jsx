import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload =
      role === "instructor"
        ? {
            email: formData.email.trim(), 
            password: formData.password,
            role: "instructor",
          }
        : {
            regNo: formData.email.trim(),
            password: formData.password,
            role: "student",
          };

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("sessionId", data.sessionId);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.userId);

      navigate("/dashboard");
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-[100vh] w-full flex font-['DM_Sans'] overflow-hidden">
      <div className="hidden lg:flex lg:w-1/2 relative items-start justify-center overflow-hidden">
        <div className="relative z-10 p-12 text-white max-w-xl">
          <div className="flex justify-start items-end gap-2">
            <a href="/">
              <div className="flex justify-center border border-dashed border-gray-300 items-center rounded-md w-10 h-10 mb-6 hover:bg-gray-100 hover:cursor-pointer transition duration-300">
                <img
                  src="https://i.ibb.co/dsk8r3X0/arrow-left-3099.png"
                  alt="<"
                  className="w-5 pr-1"
                />
              </div>
            </a>
            <img
              src="https://i.ibb.co/bM5YrcT2/logored.png"
              alt="KIT Logo"
              className="w-48 mb-2"
            />
          </div>
          <h1 className="font-bold mb-6 leading-tight">
            <span className="text-3xl mb-12 text-black">Welcome to </span>{" "}
            <br />
            <br />
            <span className="text-7xl">
              <span className="text-black">KIT </span>
              <span className="text-[#E2343C]">eCampus</span>
            </span>
          </h1>
          <p className="text-md opacity-90 leading-relaxed mb-8 text-black">
            Your centralized platform for academic management. Access your
            courses, track attendance, and stay updated with campus
            announcements seamlessly.
          </p>

          <div className="bg-white backdrop-blur-md border border-gray-300 border-dashed p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-[#E2343C] rounded-full"></div>
              <div>
                <p className="font-bold text-lg text-[#E2343C]">
                  Did you know?
                </p>
                <p className="text-sm opacity-80 text-black">
                  You can now view your MCQ assessment marks directly from the
                  dashboard instantly after submission.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 border-dashed p-5 rounded-2xl ">
                <div className="bg-white w-10 h-10 rounded-full border border-dashed border-gray-300 flex items-center justify-center mb-3 text-[#E2343C]">
                  <svg
                    fill="#E2343C"
                    width="30px"
                    height="30px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M229.75146,196.61035l-8.28173-30.9082-.00049-.00195-.00049-.00184L196.62256,72.97217v-.00086l-8.28223-30.90979a12.00916,12.00916,0,0,0-14.69678-8.48437l-30.90966,8.28222a11.99256,11.99256,0,0,0-3.61182,1.656A12.01237,12.01237,0,0,0,128,36H96a11.93662,11.93662,0,0,0-8,3.081A11.93662,11.93662,0,0,0,80,36H48A12.01343,12.01343,0,0,0,36,48V208a12.01343,12.01343,0,0,0,12,12H80a11.93662,11.93662,0,0,0,8-3.08105A11.93662,11.93662,0,0,0,96,220h32a12.01343,12.01343,0,0,0,12-12V78.02l2.53027,9.44373.00049.00109.00049.00122,24.84619,92.72706v.00122l.00049.00146,8.28174,30.90772a11.98984,11.98984,0,0,0,14.69678,8.48535l30.90966-8.28223a11.99918,11.99918,0,0,0,8.48535-14.69629ZM151.293,89.25781,189.93066,78.9054l22.77588,85.00207-38.63672,10.353ZM96,44h32a4.00427,4.00427,0,0,1,4,4V172H92V48A4.00427,4.00427,0,0,1,96,44ZM48,44H80a4.00427,4.00427,0,0,1,4,4V76H44V48A4.00427,4.00427,0,0,1,48,44ZM80,212H48a4.00427,4.00427,0,0,1-4-4V84H84V208A4.00427,4.00427,0,0,1,80,212Zm48,0H96a4.00427,4.00427,0,0,1-4-4V180h40v28A4.00427,4.00427,0,0,1,128,212ZM142.37549,51.4502a3.97587,3.97587,0,0,1,2.4292-1.86426l30.90918-8.28223a3.99814,3.99814,0,0,1,4.89892,2.82813l7.24756,27.04687L149.22266,81.53113l-7.24659-27.04578A3.9718,3.9718,0,0,1,142.37549,51.4502Zm79.249,150.26562a3.97594,3.97594,0,0,1-2.4292,1.86426l-30.90918,8.28222a4.00907,4.00907,0,0,1-4.89892-2.8291l-7.24707-27.04614,38.63672-10.353,7.24707,27.04663A3.97183,3.97183,0,0,1,221.62451,201.71582Z"></path>{" "}
                    </g>
                  </svg>{" "}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Study materials
                </h3>
                <p className="text-xs text-gray-500 mt-1">All Module Topics</p>
              </div>

              <div className="bg-white border border-gray-200 border-dashed p-5 rounded-2xl ">
                <div className="bg-white w-10 h-10 rounded-full flex border border-dashed border-gray-300 items-center justify-center mb-3 text-[#E2343C]">
                  <svg
                    fill="#E2343C"
                    width="30px"
                    height="30px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M222.97559,105.584c-4.02832-4.20019-8.19434-8.54394-9.95606-12.80273-1.64648-3.97852-1.73047-9.53027-1.81933-15.4082-.13575-8.999-.29-19.19727-6.833-25.74024S187.626,44.93555,178.627,44.7998c-5.87793-.08886-11.42968-.17285-15.4082-1.81933-4.25879-1.76172-8.60254-5.92774-12.80273-9.95508C143.73926,26.62109,136.835,20,128,20c-8.834,0-15.73828,6.62109-22.416,13.02441-4.20019,4.02832-8.54394,8.19434-12.80273,9.95606C88.80273,44.627,83.251,44.71094,77.37305,44.7998c-8.999.13575-19.19727.29-25.74024,6.833S44.93555,68.374,44.7998,77.37305c-.08886,5.87793-.17285,11.42968-1.81933,15.4082-1.76172,4.25879-5.92774,8.60254-9.95508,12.80273C26.62109,112.26074,20,119.165,20,128c0,8.834,6.62109,15.73828,13.02441,22.416,4.02832,4.20019,8.19434,8.54394,9.95606,12.80273,1.64648,3.97852,1.73047,9.53027,1.81933,15.4082.13575,8.999.29,19.19727,6.833,25.74024s16.74121,6.69726,25.74024,6.833c5.87793.08886,11.42968.17285,15.4082,1.81933,4.25879,1.76172,8.60254,5.92774,12.80273,9.95508C112.26074,229.37891,119.165,236,128,236c8.834,0,15.73828-6.62109,22.416-13.02441,4.20019-4.02832,8.54394-8.19434,12.80273-9.95606,3.97852-1.64648,9.53027-1.73047,15.4082-1.81933,8.999-.13575,19.19727-.29,25.74024-6.833s6.69726-16.74121,6.833-25.74024c.08886-5.87793.17285-11.42968,1.81933-15.4082,1.76172-4.25879,5.92774-8.60254,9.95508-12.80273C229.37891,143.73926,236,136.835,236,128,236,119.166,229.37891,112.26172,222.97559,105.584Zm-5.77442,39.29493c-4.541,4.73437-9.23633,9.63086-11.57422,15.28125-2.22949,5.38964-2.3291,11.97656-2.42578,18.3457-.124,8.20508-.24121,15.95508-4.49023,20.20508-4.25,4.249-12,4.36621-20.20508,4.49023-6.36914.09668-12.95606.19629-18.3457,2.42578-5.65039,2.33789-10.54688,7.03321-15.28125,11.57422C139.08789,222.75488,133.61816,228,128,228c-5.61914,0-11.08789-5.24512-16.87891-10.79883-4.73437-4.541-9.63086-9.23633-15.28125-11.57422-5.38964-2.22949-11.97656-2.3291-18.3457-2.42578-8.20508-.124-15.95508-.24121-20.20508-4.49023-4.249-4.25-4.36621-12-4.49023-20.20508-.09668-6.36914-.19629-12.95606-2.42578-18.3457-2.33789-5.65039-7.03321-10.54688-11.57422-15.28125C33.24512,139.08789,28,133.61816,28,128c0-5.61914,5.24512-11.08789,10.79883-16.87891,4.541-4.73437,9.23633-9.63086,11.57422-15.28125,2.22949-5.38964,2.3291-11.97656,2.42578-18.3457.124-8.20508.24121-15.95508,4.49023-20.20508,4.25-4.249,12-4.36621,20.20508-4.49023,6.36914-.09668,12.95606-.19629,18.3457-2.42578,5.65039-2.33789,10.54688-7.03321,15.28125-11.57422C116.91211,33.24512,122.38184,28,128,28c5.61914,0,11.08789,5.24512,16.87891,10.79883,4.73437,4.541,9.63086,9.23633,15.28125,11.57422,5.38964,2.22949,11.97656,2.3291,18.3457,2.42578,8.20508.124,15.95508.24121,20.20508,4.49023,4.249,4.25,4.36621,12,4.49023,20.20508.09668,6.36914.19629,12.95606,2.42578,18.3457,2.33789,5.65039,7.03321,10.54688,11.57422,15.28125C222.75488,116.91211,228,122.38184,228,128,228,133.61914,222.75488,139.08789,217.20117,144.87891ZM135.99951,180a8,8,0,1,1-8-8A8.00009,8.00009,0,0,1,135.99951,180ZM159.999,108.00488a32.04847,32.04847,0,0,1-28,31.751v4.249a4,4,0,0,1-8,0v-8a4.0002,4.0002,0,0,1,4-4,24,24,0,1,0-24-24,4,4,0,0,1-8,0,32,32,0,1,1,64,0Z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  MCQ Assessments
                </h3>
                <p className="text-xs text-gray-500 mt-1">Real-time updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 relative">
        <div className="w-full max-w-md p-4 md:p-10 rounded-3xl border border-dashed border-gray-300">
          <div className="lg:hidden mb-8 text-center">
            <img
              src="https://i.ibb.co/bM5YrcT2/logored.png"
              alt="Logo"
              className="w-42 md:32 mx-auto"
            />
          </div>

          <div className="text-center mb-8 hidden md:block">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hello <span className="text-[#E2343C]">Again!</span> 👋
            </h2>
            <p className="text-gray-500 text-sm">
              Please login to access your dashboard.
            </p>
          </div>

          <div className="flex bg-gray-100 p-1 mx-4 md:mx-0 rounded-xl mb-8 relative">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg border border-dashed border-gray-300 transition-all duration-300 ease-in-out transform ${
                role === "instructor" ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
            <button
              onClick={() => setRole("student")}
              className={`flex-1 relative z-10 py-2 text-sm font-bold text-center transition-colors ${
                role === "student" ? "text-[#E2343C]" : "text-gray-500"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("instructor")}
              className={`flex-1 relative z-10 py-2 text-sm font-bold text-center transition-colors ${
                role === "instructor" ? "text-[#E2343C]" : "text-gray-500"
              }`}
            >
              Faculty
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                {role === "student" ? "Register Number" : "Employee ID / Email"}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 group-focus-within:text-[#E2343C] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E2343C]/20 focus:border-[#E2343C] transition-all"
                  placeholder={
                    role === "student"
                      ? "e.g., 711520104001"
                      : "name@kitcbe.com"
                  }
                />
              </div>
            </div>

            <div className="space-y-1 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 group-focus-within:text-[#E2343C] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E2343C]/20 focus:border-[#E2343C] transition-all"
                  placeholder="• • • • • • • •"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end text-sm">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#E2343C] hover:text-[#c02b32]"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              style={{ padding: "12px" }}
              className="custom-button w-full"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-4 md:mt-8 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              Don't have an account?{" "}
              <Link
                to="/contact"
                className="font-bold text-[#E2343C] hover:underline"
              >
                Contact Admin
              </Link>
            </p>
          </div>
        </div>

        <p className="hidden md:block absolute bottom-10 lg:bottom-6 text-gray-400 text-xs text-center px-4">
          © {new Date().getFullYear()} KIT eCampus Platform. Restricted Access.
        </p>
      </div>
    </div>
  );
}

export default Login;
