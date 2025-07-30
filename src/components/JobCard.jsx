import { useState } from "react";
import { Link } from "react-router-dom";
import { FiBookmark, FiClock, FiMapPin } from "react-icons/fi";

const JobCard = ({ job, showRemoteFlag = true }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="w-full bg-[#1e293b] rounded-lg shadow-sm p-2 hover:shadow-md transition-shadow text-white">
      {/* Top Row - Title and Bookmark */}
      <div className="flex justify-between items-start">
        <Link to={`/job/${job.id}`}>
          <h3 className="text-lg font-semibold text-gray-200">{job.title}</h3>
          <div className="flex items-center text-gray-200 text-sm mt-1">
            <FiMapPin className="mr-1" size={14} />
            <em>
              {job.company} | {job.location}
            </em>
          </div>
        </Link>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`p-1 rounded-full ${
            isBookmarked ? "text-yellow-500" : "text-gray-200"
          }`}
        >
          <FiBookmark size={18} fill="currentColor" />
        </button>
      </div>

      {/* Middle Row - Badges */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-[#2C2E5A] text-xs px-2 py-1 rounded-sm">
          {job.level}
        </span>
        <span className="bg-[#2C2E5A] text-xs px-2 py-1 rounded-sm">
          {job.type}
        </span>
        {job.salary && (
          <span className="bg-[#2C2E5A] text-xs px-2 py-1 rounded-sm">
            <span>{job.salary}</span>
          </span>
        )}
      </div>

      {/* Bottom Row - Salary and Time */}
      <div className="flex justify-between items-center mt-3">
        {job.timeDisplay && (
          <div className="flex items-center text-sm">
            <FiClock className="mr-1 mt-0.5" size={14} />
            <span>{job.timeDisplay}</span>
          </div>
        )}
        {job.remote && (
          <span className="bg-[#2C2E5A] text-xs px-2 py-1 rounded-sm">
            Remote
          </span>
        )}
      </div>
    </div>
  );
};
export default JobCard;
