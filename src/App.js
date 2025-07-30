import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetailsPage from "./pages/JobDetailsPage";
import JobListPage from "./pages/JobListPage";
import ProfilePage from "./pages/ProfilePage";
import ViewAllPage from "./pages/ViewAllPage";

function App() {
  return (
    <main className="w-full h-full px-4 bg-[#0f172a]">
      <Router>
        <Routes>
          <Route path="/" element={<JobListPage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/view-all/:type?" element={<ViewAllPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
