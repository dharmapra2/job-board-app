export const suggestedJobs = [
  {
    id: 1,
    title: "Frontend Designer",
    company: "Info Corp",
    location: "New York",
    level: "Senior",
    type: "Full Time",
    salary: "50k - 70k",
    time: "10 hours ago",
    remote: false,
    description: "Lorem ipsum dolor sit amet...",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
  },
  // Add more suggested jobs as needed
];

export const recommendedJobs = [
  {
    id: 2,
    title: "Python Developer",
    company: "Code INC",
    location: "Germany",
    level: "Senior",
    type: "Full Time",
    salary: "80k - 90k",
    time: "2 days ago",
    remote: true,
    description: "Lorem ipsum dolor sit amet...",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
  },
  // Add 90+ recommended jobs here
  // You might want to split this into multiple categories
];

// Combine all jobs for the "View All" pages
export const allJobs = {
  suggested: [...suggestedJobs],
  recommended: [...recommendedJobs],
};
