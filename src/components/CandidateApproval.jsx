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


    // Data for "Total Signups this Week"
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
    
      // Data for "Total Signups this Year"
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
    
      // Options for charts
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Signups Data",
          },
        },
      };

  const candidates = [
    {
      id: 1,
      name: "Joey Tribbs",
      email: "joeytribbs@gmail.com",
      profile: {
        name: "Joey Tribbs",
        email: "joeytribbs@gmail.com",
        location: "NYC",
        image: "https://tbcdn.talentbrew.com/company/152/cms/v4_0/img/hero-home-sm.webp",
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
  ];

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className=" min-h-screen ml-[30%] w-full">
      {/* Header */}
           <div className="flex justify-between items-center">
             <h1 className="text-4xl font-bold text-usedColor mb-6">Visitor Approval</h1>
             <CgProfile className="text-3xl text-usedColor" />
           </div>
           <h2 className="text-3xl font-semibold text-usedColor mb-6">Dashboard</h2>
     
           {/* Graph Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Weekly Signups */}
             <div className="border rounded-md p-4 bg-white shadow-md">
               <h3 className="text-lg font-bold text-orange-800">Total Signups this Week</h3>
               <Bar data={weeklyData} options={options}  />
             </div>
     
             {/* Yearly Signups */}
             <div className="border rounded-md p-4 bg-white shadow-md">
               <h3 className="text-lg font-bold text-orange-800">Total Signups this Year</h3>
               <Bar data={yearlyData} options={options} />
             </div>
           </div>
     
      <table className="mt-8 w-full border-collapse border border-orange-200">
        <thead>
          <tr>
            <th className="p-4 border border-orange-200">NAME</th>
            <th className="p-4 border border-orange-200">EMAIL</th>
            <th className="p-4 border border-orange-200">APPROVE</th>
            <th className="p-4 border border-orange-200">ACTION</th>
            <th className="p-4 border border-orange-200">BAN PERIOD</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="p-4 border border-orange-200">{candidate.name}</td>
              <td className="p-4 border border-orange-200">{candidate.email}</td>
              <td className="p-4 border border-orange-200">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={candidate.approve}
                    className="h-5 w-5"
                    readOnly
                  />
                </label>
              </td>
              <td className="p-4 border border-orange-200">
                <button
                  className="text-orange-700 underline"
                  onClick={() => handleViewProfile(candidate.profile)}
                >
                  View Profile
                </button>
              </td>
              <td className="p-4 border border-orange-200">{candidate.banPeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CandidateApproval;
