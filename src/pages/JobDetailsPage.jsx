import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { allJobs } from "../data/jobData";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const job = allJobs.find((job) => job.id === +id);

  return (
    <section className="min-h-screen text-white py-2">
      <header className="relative flex items-center justify-between mb-4 h-12">
        <Link to="/" className="flex items-center text-sm text-slate-300">
          <FiArrowLeft className="mr-2" />
        </Link>
        <span className="self-center">job Description</span>
        <Link to="/" className="flex items-center text-sm text-slate-300">
          <FiShare2 className="mr-2" />
        </Link>
      </header>
      {/* Job Logo */}
      <div className="w-12 h-12 bg-violet-400 rounded-xl flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-xl font-bold">💼</span>
      </div>
      {/* Job Title & Company */}
      <h1 className="text-xl font-semibold text-center">{job.title}</h1>
      <p className="text-center text-slate-300 italic text-sm">
        {job.company} &nbsp;|&nbsp; {job.location}
      </p>
      <p className="text-center font-medium mt-1">{job.salary}</p>
      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">
          {job.level}
        </span>
        <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">
          {job.type}
        </span>
        {job.remote && (
          <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">
            Remote
          </span>
        )}
      </div>
      {/* Tab Buttons */}
      <div className="mt-6 flex text-sm bg-slate-800 rounded-full overflow-hidden">
        <button
          onClick={() => setActiveTab("details")}
          className={`w-1/2 py-2 font-medium transition ${
            activeTab === "details"
              ? "bg-violet-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          Job Details
        </button>
        <button
          onClick={() => setActiveTab("company")}
          className={`w-1/2 py-2 font-medium transition ${
            activeTab === "company"
              ? "bg-violet-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          About Company
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === "details" ? (
        <>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Job Description</h2>
            <p className="text-slate-300 text-sm">{job.description}</p>
          </div>

          <div className="my-6">
            <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
              {job.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Company Info</h2>
          <p className="text-slate-300 text-sm mb-2">
            <strong>Company:</strong> {job.company}
          </p>
          <p className="text-slate-300 text-sm mb-2">
            <strong>Location:</strong> {job.contact.address}
          </p>
          <p className="text-slate-300 text-sm mb-2">
            <strong>Phone:</strong> {job.contact.phone}
          </p>
          <p className="text-slate-300 text-sm">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${job.contact.email}`}
              className="text-violet-400 hover:underline"
            >
              {job.contact.email}
            </a>
          </p>
        </div>
      )}
      <Link
        to="/profile"
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl bg-violet-500 hover:bg-violet-600 text-white py-1 md:py-3 rounded-full font-semibold text-center shadow-md transition z-50"
      >
        Apply Now
      </Link>
    </section>
  );
};

export default JobDetailsPage;
