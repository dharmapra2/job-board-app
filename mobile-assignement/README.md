# 💼 Job Board App — React + Tailwind CSS

A fully responsive and optimized **Job Board Application** built using **React**, **React Router**, and **Tailwind CSS**.

This platform allows users to browse, search, and explore jobs with detailed filtering and intuitive design. It's ideal for showcasing frontend and UI/UX capabilities, performance optimizations, and modular architecture.

---

## ✨ Features

### 📋 Dynamically Generated Job Listings

All job data is **dynamically generated** from arrays — including:

- 🧑‍💻 **Job Roles** (Frontend Developer, Backend, UI/UX, etc.)
- 🏢 **Company Names** and Contact Info
- 📍 **Locations** (Bangalore, Mumbai, Remote, etc.)
- 💸 **Salary Ranges**
- 🛠️ **Skills & Responsibilities**
- 🕒 **Job Types** (Full-time, Part-time, Contract)
- 🏷️ **Levels** (Junior, Mid, Senior)

No hardcoding — everything is **flexibly mapped** from dynamic datasets.

---

## 🚀 Key Functionalities

- 🔍 **Live Search Filtering** (title, company, location)
- ⚡ Optimized with:
  - `useDeferredValue()` for smooth UX
  - `useCallback()` for stable props
  - `React.memo()` for low re-render count
- 📱 Fully **responsive layout** (mobile, tablet, desktop)
- 🧭 Route-based navigation with:
  - `/`
  - `/view-all`, `/view-all/suggested`, `/view-all/recommended`
  - `/job/:id`
  - `/profile`
- 📑 **Job Details Page**
  - Tabbed: Job Details / Company Info
  - Sticky Apply Now button
- 🧑 **Profile Page**
  - Contact Info
  - About Me
  - Experience
  - Education timeline (rendered from array)

---

## 🛠 Tech Stack

| Technology       | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| **React**        | Frontend library for UI                                 |
| **Tailwind CSS** | Utility-first styling                                   |
| **React Router** | Page-based navigation                                   |
| **Hooks**        | `useState`, `useRef`, `useCallback`, `useDeferredValue` |
| **JSX**          | UI + logic in components                                |

---

## 🧪 Optimization Techniques

- `useDeferredValue()` to improve filtering performance
- `useCallback()` to memoize handlers
- `React.memo()` to prevent re-renders of static components
- Debounced search via controlled input pattern

---

## ⚙️ Getting Started

### 1. 🔽 Clone the Repository

```bash
git clone https://github.com/dharmapra2/job-board-app.git
cd job-board-app
```
