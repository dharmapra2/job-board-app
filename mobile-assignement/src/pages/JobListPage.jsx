import { useCallback, useDeferredValue, useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { suggestedJobs, recommendedJobs } from "../data/jobData";

const JobListPage = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const deferredSearch = useDeferredValue(searchQuery.toLowerCase());

  const filterJobs = (jobs) =>
    jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(deferredSearch) ||
        job.company.toLowerCase().includes(deferredSearch) ||
        job.location.toLowerCase().includes(deferredSearch)
    );

  const filteredSuggestedJobs = filterJobs(suggestedJobs);
  const filteredRecommendedJobs = filterJobs(recommendedJobs);

  const onDebouncedChange = useCallback((searchVal) => {
    setsearchQuery(searchVal);
  }, []);

  return (
    <section className="min-h-screen bg-inherit py-2">
      <Header />

      <h1 to="/" className="text-xl font-mono text-white">
        Let's Find Job
      </h1>
      <section className="max-w-6xl mx-auto">
        <SearchBar setSearch={onDebouncedChange} />

        {/* Suggested Jobs */}
        <section className="mb-6 overflow-hidden">
          <div className="my-3 flex justify-between items-center">
            <h3 className="text-white font-sans font-normal">
              Suggested for you
            </h3>
            <Link
              to="/view-all/suggested"
              className="text-blue-500 text-sm underline"
            >
              View All
            </Link>
          </div>
          <section className="relative flex space-x-4 overflow-x-auto scroll-smooth">
            {filteredSuggestedJobs.length > 0 ? (
              filteredSuggestedJobs.map((job) => (
                <article key={job.id} className="flex-shrink-0 w-72">
                  <JobCard job={job} showRemoteFlag={false} />
                </article>
              ))
            ) : (
              <p className="text-slate-300">No jobs found.</p>
            )}
          </section>
        </section>

        {/* Recommended Jobs */}
        <section className="overflow-hidden">
          <div className="my-3 flex justify-between items-center">
            <h3 className="text-white font-normal font-sans">
              Recommended for you
            </h3>
            <Link to="/view-all/recommended" className="text-blue-500 text-sm">
              View All
            </Link>
          </div>

          <section className="w-full flex flex-col gap-3">
            {filteredRecommendedJobs.length > 0 ? (
              filteredRecommendedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <p className="text-slate-300">No jobs found.</p>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default JobListPage;
