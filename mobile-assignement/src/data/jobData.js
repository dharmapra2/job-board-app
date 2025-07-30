// Helper functions to generate random data
const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomDate = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * days));
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const generatePhoneNumber = () =>
  `+91 (${Math.floor(Math.random() * 900) + 100}) ${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 9000) + 1000}`;

const randomSalary = (min, max) =>
  `${Math.floor(Math.random() * (max - min) + min)}k - ${Math.floor(
    Math.random() * (max - min) + min + 10
  )}k`;

// Data pools for randomization
const jobTitles = [
  "Python Developer",
  "Frontend Engineer",
  "Data Scientist",
  "DevOps Engineer",
  "UX Designer",
  "UI Designer",
  "Product Manager",
  "Mobile Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Cloud Architect",
  "Machine Learning Engineer",
  "Security Analyst",
  "QA Engineer",
  "Systems Administrator",
  "Data Analyst",
  "Product Owner",
  "Technical Lead",
  "Engineering Manager",
  "UX Researcher",
];

const companies = [
  "TechCorp",
  "CodeHub",
  "DataSystems",
  "WebCraft",
  "CloudNine",
  "ByteSolutions",
  "Innovatech",
  "DigitalFront",
  "FutureSoft",
  "AlgoMasters",
  "NeuralNet",
  "QuantumLeap",
  "PixelPerfect",
  "SecureIT",
  "FastTrack",
  "MetaSoft",
  "InnoVate",
  "DataWorks",
  "AppFactory",
  "CloudScale",
];

const locations = [
  "New York, USA",
  "Berlin, Germany",
  "London, UK",
  "Tokyo, Japan",
  "Toronto, Canada",
  "Sydney, Australia",
  "Paris, France",
  "Singapore",
  "Remote",
  "San Francisco, USA",
  "Austin, USA",
  "Bangalore, India",
  "Amsterdam, Netherlands",
  "Dubai, UAE",
  "Stockholm, Sweden",
];

const levels = ["Junior", "Mid-Level", "Senior", "Lead", "Principal"];
const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance"];
const techStack = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Rust",
  "React",
  "Angular",
  "Vue",
  "Django",
  "Flask",
  "Node.js",
  "TypeScript",
  "Swift",
  "Kotlin",
  "TensorFlow",
  "PyTorch",
];

// Enhanced descriptions and responsibilities by category
const descriptions = {
  developer:
    "We're looking for a skilled developer to join our team. You'll work on building innovative software solutions that impact millions of users. The ideal candidate has strong problem-solving skills and experience with modern development practices.",
  designer:
    "Join our design team to create beautiful, intuitive user experiences. We value creativity, attention to detail, and a user-first approach to design. You'll collaborate with engineers to bring your designs to life.",
  manager:
    "We need a product manager to drive our product strategy and execution. You'll work at the intersection of business, technology, and user experience to deliver products that customers love.",
  data: "Looking for a data professional to help us derive insights from complex datasets. You'll build data pipelines, create models, and help drive data-informed decisions across the company.",
  operations:
    "Join our operations team to build and maintain robust, scalable infrastructure. You'll work with cutting-edge cloud technologies to ensure our systems are reliable and secure.",
  testing:
    "We're seeking a quality assurance engineer to help us maintain the highest standards for our software products. You'll develop test plans, automate tests, and work closely with developers.",
};

const responsibilities = {
  developer: [
    "Develop and maintain software applications",
    "Write clean, maintainable, and efficient code",
    "Collaborate with cross-functional teams",
    "Participate in code reviews",
    "Troubleshoot and debug applications",
    "Implement new features and improvements",
  ],
  designer: [
    "Create user-centered designs and prototypes",
    "Conduct user research and usability testing",
    "Develop and maintain design systems",
    "Collaborate with product and engineering teams",
    "Create wireframes and high-fidelity mockups",
  ],
  manager: [
    "Define product strategy and roadmap",
    "Gather and prioritize product requirements",
    "Work with engineering teams to deliver products",
    "Analyze market trends and competition",
    "Coordinate with marketing and sales teams",
  ],
  data: [
    "Build and maintain data pipelines",
    "Develop machine learning models",
    "Create dashboards and reports",
    "Clean and analyze large datasets",
    "Optimize data storage and retrieval",
  ],
  operations: [
    "Maintain and improve CI/CD pipelines",
    "Monitor system performance and reliability",
    "Implement security best practices",
    "Automate infrastructure provisioning",
    "Troubleshoot production issues",
  ],
  testing: [
    "Develop and execute test plans",
    "Write and maintain automated tests",
    "Report and track software defects",
    "Perform manual testing when needed",
    "Work with developers to reproduce issues",
  ],
};

// Improved category detection
const determineCategory = (title) => {
  const lowerTitle = title.toLowerCase();

  if (/design|ux|ui|research/.test(lowerTitle)) return "designer";
  if (/manager|director|lead|owner|head/.test(lowerTitle)) return "manager";
  if (
    /data|analyst|scientist|engineer/.test(lowerTitle) &&
    lowerTitle.includes("data")
  )
    return "data";
  if (/devops|cloud|infrastructure|sre|reliability/.test(lowerTitle))
    return "operations";
  if (/qa|test|quality/.test(lowerTitle)) return "testing";

  return "developer";
};

// Category-specific tech stacks
const getTechStackForCategory = (category) => {
  const baseTech = [...techStack];
  switch (category) {
    case "designer":
      return [
        "Figma",
        "Sketch",
        "Adobe XD",
        "Photoshop",
        ...baseTech.filter((t) => ["JavaScript", "HTML", "CSS"].includes(t)),
      ];
    case "data":
      return ["Python", "SQL", "R", "TensorFlow", "PyTorch", "Pandas", "Spark"];
    case "operations":
      return ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Jenkins"];
    case "testing":
      return ["Selenium", "Jest", "Cypress", "Postman", "JMeter", "Appium"];
    default:
      return [randomFromArray(baseTech), randomFromArray(baseTech)];
  }
};

// Improved date generator with both exact date and relative time
const generateJobDate = () => {
  const now = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 90); // Up to 3 months old
  const jobDate = new Date(now);
  jobDate.setDate(now.getDate() - randomDaysAgo);

  // Format as ISO string for exact date
  const exactDate = jobDate.toISOString();

  // Calculate relative time
  const seconds = Math.floor((now - jobDate) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return {
      exact: exactDate,
      relative: `${interval} year${interval === 1 ? "" : "s"} ago`,
    };
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return {
      exact: exactDate,
      relative: `${interval} month${interval === 1 ? "" : "s"} ago`,
    };
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return {
      exact: exactDate,
      relative: `${interval} day${interval === 1 ? "" : "s"} ago`,
    };
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return {
      exact: exactDate,
      relative: `${interval} hour${interval === 1 ? "" : "s"} ago`,
    };
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return {
      exact: exactDate,
      relative: `${interval} minute${interval === 1 ? "" : "s"} ago`,
    };
  }
  return {
    exact: exactDate,
    relative: `${Math.floor(seconds)} second${seconds === 1 ? "" : "s"} ago`,
  };
};

// Generate 300 realistic job listings
const generateJobs = () => {
  const jobs = [];

  for (let i = 1; i <= 300; i++) {
    const time = generateJobDate();

    const isRemote = Math.random() > 0.5;
    const jobType = randomFromArray(jobTypes);
    const title = randomFromArray(jobTitles);
    const isSuggested = Math.random() > 0.7;
    const category = determineCategory(title);

    const job = {
      id: i,
      title,
      company: randomFromArray(companies),
      location: isRemote
        ? "Remote"
        : randomFromArray(locations.filter((loc) => loc !== "Remote")),
      level: randomFromArray(levels),
      type: jobType,
      salary: randomSalary(50, 150),
      remote: isRemote,
      suggest: isSuggested,
      timeDisplay: time.relative,
      posted: randomDate(30),
      techStack: getTechStackForCategory(category),
      description: descriptions[category],
      responsibilities: [
        ...responsibilities[category],
        `Work with ${randomFromArray(techStack)}`,
        `Participate in ${randomFromArray([
          "agile",
          "scrum",
          "kanban",
        ])} processes`,
      ],
      contact: {
        address: isRemote
          ? "Remote"
          : randomFromArray(["123 Tech Street", "456 Innovation Blvd"]),
        phone: generatePhoneNumber(),
        email: `careers@${randomFromArray(companies)
          .toLowerCase()
          .replace(/\s/g, "")}.com`,
      },
      category,
    };

    jobs.push(job);
  }

  return jobs;
};

const allJobs = generateJobs();

// Separate suggested and recommended jobs
const suggestedJobs = allJobs.filter((job) => job.suggest);
const recommendedJobs = allJobs.filter((job) => !job.suggest);

export { allJobs, suggestedJobs, recommendedJobs };
