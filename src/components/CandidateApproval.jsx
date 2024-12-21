import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { FaBan } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CandidateApproval = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Joey Tribbs",
      email: "joeytribbs@gmail.com",
      profile: {
        name: "Joey Tribbs",
        email: "joeytribbs@gmail.com",
        location: "NYC",
        image:
          "https://tbcdn.talentbrew.com/company/152/cms/v4_0/img/hero-home-sm.webp",
        facebook: "joeytribbs/facebook",
        instagram: "joeytribbs/instagram",
        contact: "6363113138",
        userType: "Candidate",
        banCount: 0,
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        events: [
          "Experience Name (Jul 2021 - Aug 2022)",
          "Experience Name (Jul 2021 - Aug 2022)",
          "Experience Name (Jul 2021 - Aug 2022)",
        ],
      },
      approve: false,
      banPeriod: "5 Months",
    },
    {
      id: 2,
      name: "Name 2",
      email: "name@two.com",
      approve: true,
      banPeriod: "5 Years",
      profile: {
        name: "Name 2",
        email: "name@two.com",
        location: "California",
        facebook: "name2/facebook",
        instagram: "name2/instagram",
        contact: "1234567890",
        userType: "Candidate",
        banCount: 2,
        about: "A brief description of the candidate...",
        events: ["Event 1", "Event 2", "Event 3"],
      },
    },
    {
      id: 3,
      name: "Name 3",
      email: "name@three.com",
      approve: false,
      banPeriod: "5 Days",
      profile: {
        name: "Name 3",
        email: "name@three.com",
        location: "Texas",
        facebook: "name3/facebook",
        instagram: "name3/instagram",
        contact: "9876543210",
        userType: "Candidate",
        banCount: 1,
        about: "An interesting bio about the candidate...",
        events: ["Event A", "Event B", "Event C"],
      },
    },
  ]);

  const weeklyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Signups",
        data: [50, 75, 100, 120, 150, 200, 250],
        backgroundColor: "#9a3412",
      },
    ],
  };

  const yearlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Signups",
        data: [400, 450, 300, 500, 600, 700, 650, 400, 300, 200, 100, 50],
        backgroundColor: "#9a3412",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Signups Data" },
    },
    scales: {
      x: {
        ticks: {
          // Allow rotation to prevent overlap
          maxRotation: 45,
          minRotation: 30,
          font: {
            size: window.innerWidth < 768 ? 10 : 12, // Adjust font size based on screen size
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12, // Adjust font size based on screen size
          },
        },
      },
    },
  };

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  const handleToggleApproval = (id) => {
    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === id ? { ...candidate, approve: !candidate.approve } : candidate
    );
    setCandidates(updatedCandidates);
  };

  return (
    <div className="min-h-screen w-screen px-6 sm:px-6 lg:px-8 ml-[30%] lg:w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-usedColor mb-6">Candidate Approval</h1>
        <CgProfile className="text-3xl text-usedColor" />
      </div>
      <h2 className="text-3xl font-semibold text-usedColor mb-6">Dashboard</h2>

      {/* Graph Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Weekly Signups */}
        <div className="border rounded-md p-4 bg-white border-black shadow-md" style={{ height: "300px" }}>
          <h3 className="text-lg font-bold text-orange-800">Total Signups this Week</h3>
          <Bar data={weeklyData} options={options}/>
        </div>

        {/* Yearly Signups */}
        <div className="border rounded-md p-4 bg-white border-black shadow-md" style={{ height: "300px" }}>
          <h3 className="text-lg font-bold text-orange-800">Total Signups this Year</h3>
          <Bar data={yearlyData} options={options} />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse border border-grey-300">
          <thead className="bg-orange-200 text-orange-800">
            <tr>
              <th className="p-4 border border-grey-300">NAME</th>
              <th className="p-4 border border-grey-300">EMAIL</th>
              <th className="p-4 border border-grey-300">APPROVE</th>
              <th className="p-4 border border-grey-300">ACTION</th>
              <th className="p-4 border border-grey-300">BAN PERIOD</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td className="p-4 border border-grey-300">{candidate.name}</td>
                <td className="p-4 border border-grey-300">{candidate.email}</td>
                <td className="p-4 border border-grey-300">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={candidate.approve}
                      onChange={() => handleToggleApproval(candidate.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </td>
                <td className="p-4 border border-grey-300">
                  <button
                    className="text-orange-700 underline"
                    onClick={() => handleViewProfile(candidate.profile)}
                  >
                    View Profile
                  </button>
                </td>
                <td className="p-4 border border-grey-300">{candidate.banPeriod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={handleCloseModal} />}
    </div>
  );
};

export default CandidateApproval;
