import { IoIosInformationCircle } from "react-icons/io";
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

const VisitorApproval = () => {
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

  return (
    <div className="min-h-screen ml-[30%] w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-usedColor mb-6">Visitor Approval</h1>
        <CgProfile className="text-3xl text-usedColor" />
      </div>
      <h2 className="text-2xl font-semibold text-usedColor mb-6">Dashboard</h2>

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

      {/* Table Section */}
      <div className="mt-8 bg-white text-orange-800 shadow-md rounded-md p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-black border-collapse">
            <thead className="bg-orange-200">
              <tr>
                <th className="p-3 text-center">NAME</th>
                <th className="p-3 text-center">EMAIL</th>
                <th className="p-3 text-center">APPROVE</th>
                <th className="p-3 text-center relative">
                  ACTION
                  <div className="inline-block ml-2 relative group">
                    <IoIosInformationCircle className="text-xl pt-1 cursor-pointer" />
                    {/* Tooltip */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 px-4 py-2 bg-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      This will grant you the authority to ban individuals for a certain time frame.
                    </div>
                  </div>
                </th>
                <th className="p-3 text-center">BAN PERIOD</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Janice Han", email: "janicehan@gmail.com", banPeriod: "5 Months" },
                { name: "Name 2", email: "name@two.com", banPeriod: "5 Years" },
                { name: "Name 3", email: "name@three.com", banPeriod: "5 Days" },
              ].map((user, index) => (
                <tr key={index} className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <input type="checkbox" className="toggle-checkbox" />
                  </td>
                  <td className="p-3">
                    <button className="hover:underline">
                      <FaBan />
                    </button>
                  </td>
                  <td className="p-3">{user.banPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitorApproval;
