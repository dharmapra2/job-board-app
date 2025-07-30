import Header from "../components/Header";
import {
  FiArrowLeft,
  FiEdit2,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const educationList = [
    {
      title: "MCA (2020–22)",
      institute: "Khallikote Autonomous College, Berhampur",
      marks: "81.26%",
    },
    {
      title: "BCA (2017–20)",
      institute: "Berhampur University",
      marks: "81.10%",
    },
    {
      title: "+2 (2015–17)",
      institute: "NSBM College (CHSE)",
      marks: "51.33%",
    },
    {
      title: "10th (2013–15)",
      institute: "Govt High School, Nuapada",
      marks: "67.16%",
    },
  ];

  return (
    <section className="min-h-screen text-white py-2">
      <header className="flex items-center">
        <Link to="/" className="flex items-center text-sm text-slate-300">
          <FiArrowLeft className="mr-2" />
        </Link>
        <span className="text-center font-semibold flex-1">Profile</span>
      </header>

      {/* Page Title */}
      <div className="flex items-center gap-4 mb-4">
        <meter
          className="w-full h-4 rounded-full overflow-hidden bg-slate-800 [&::-webkit-meter-bar]:bg-slate-800 [&::-webkit-meter-optimum-value]:bg-violet-500"
          value="86"
          max="100"
        ></meter>
        <span className="text-sm text-violet-400 font-medium">9/10</span>
      </div>

      {/* Contact Info */}
      <div className="bg-[#1E1B4B] p-4 rounded-xl mb-4 shadow-md">
        <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-2">
          <h2 className="text-base font-semibold">Contact Info</h2>
          <FiEdit2 className="text-slate-400" />
        </div>
        <div className="space-y-2 text-sm text-slate-200">
          <p className="flex items-center gap-2">
            <FiMapPin className="text-violet-400" /> Bhubaneswar, Odisha, India
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-violet-400" /> +91-8658680939
          </p>
          <a
            href="mailto:dharmapradhan01@gmail.com"
            className="flex items-center gap-2"
          >
            <FiMail className="text-violet-400" /> dharmapradhan01@gmail.com
          </a>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-[#1E1B4B] p-4 rounded-xl mb-4 shadow-md">
        <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-2">
          <h2 className="text-base font-semibold">About Me</h2>
          <FiEdit2 className="text-slate-400" />
        </div>

        <p className="text-sm text-slate-300">
          I’m a Frontend Developer with 3 years of experience building
          responsive, performant, and accessible web apps using React, Next.js,
          Tailwind CSS, and TypeScript. I focus on clean UI/UX and scalable
          architecture. I’m passionate about solving user problems with elegant
          frontend solutions.
        </p>
      </div>

      {/* Experience */}
      <div className="bg-[#1E1B4B] p-4 rounded-xl mb-4 shadow-md">
        <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-2">
          <h2 className="text-base font-semibold">Experience</h2>
          <button className="text-violet-400 text-sm font-medium">+ Add</button>
        </div>
        <div className="text-sm text-slate-200">
          <h3 className="font-semibold">Frontend Developer</h3>
          <p>HyScaler | BBSR, Odisha</p>
          <p className="text-xs text-slate-400">Jun 2022 - Jun-2025</p>
        </div>
      </div>

      {/* Education */}
      <div className="bg-[#1E1B4B] p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-2">
          <h2 className="text-base font-semibold">Education</h2>
          <button className="text-violet-400 text-sm font-medium">+ Add</button>
        </div>

        <div className="relative border-l-2 border-violet-500 pl-3">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className={`relative ${
                index !== educationList.length - 1 ? "mb-6" : ""
              }`}
            >
              <span className="absolute -left-[19px] top-0 w-3 h-3 bg-violet-500 rounded-full"></span>
              <p className="text-sm text-slate-300 font-semibold">
                {edu.title}
              </p>
              <p className="text-sm text-slate-400">
                {edu.institute} — {edu.marks}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
