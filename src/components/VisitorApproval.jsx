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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Weekly Signups */}
        <div className="border rounded-md p-4 bg-white shadow-md border-black">
          <h3 className="text-lg font-bold text-orange-800">Total Signups this Week</h3>
          <Bar data={weeklyData} options={options} />
        </div>

        {/* Yearly Signups */}
        <div className="border rounded-md p-4 bg-white shadow-md border-black">
          <h3 className="text-lg font-bold text-orange-800">Total Signups this Year</h3>
          <Bar data={yearlyData} options={options} />
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-8 bg-white text-orange-800 border border-gray-200 rounded-md p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-gray-200">
            <thead className="bg-orange-200 border-b border-gray-200">
              <tr>
                <th className="p-3 text-center border-gray-200">NAME</th>
                <th className="p-3 text-center border-gray-200">EMAIL</th>
                <th className="p-3 text-center border-gray-200">APPROVE</th>
                <th className="p-3 text-center border-gray-200 relative">
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
                <th className="p-3 text-center border-gray-200">BAN PERIOD</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Janice Han", email: "janicehan@gmail.com", banPeriod: "5 Months" },
                { name: "Name 2", email: "name@two.com", banPeriod: "5 Years" },
                { name: "Name 3", email: "name@three.com", banPeriod: "5 Days" },
              ].map((user, index) => (
                <tr
                  key={index}
                  className={`text-center border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } border-gray-50`}
                >
                  <td className="p-3 border-gray-200">{user.name}</td>
                  <td className="p-3 border-gray-200">{user.email}</td>
                  <td className="p-3 border-gray-200">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </td>
                  <td className="p-3 border-gray-200">
                    <button className="hover:underline">
                      <FaBan />
                    </button>
                  </td>
                  <td className="p-3 border-gray-200">{user.banPeriod}</td>
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
