import { useParams } from "react-router-dom";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { allJobs } from "../data/jobData";

const ViewAllPage = () => {
  const { type } = useParams();

  const jobsToRender =
    type && allJobs[type] ? allJobs[type] : Object.values(allJobs).flat();

  return (
    <section className="min-h-screen bg-inherit text-white py-2">
      <Header />

      <Link to="/" className="flex items-center mb-4 h-5 lg:hidden">
        <FiArrowLeft className="mr-4" />
        Back to jobs
      </Link>

      <h1 className="text-xl font-bold mb-6 capitalize">
        {type === "suggested"
          ? "Suggested Jobs"
          : type === "recommended"
          ? "Recommended Jobs"
          : "All Jobs"}
      </h1>

      <section className="w-full flex flex-col gap-3">
        {jobsToRender.length > 0 ? (
          jobsToRender.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-slate-300">No jobs found.</p>
        )}
      </section>
    </section>
  );
};

export default ViewAllPage;
