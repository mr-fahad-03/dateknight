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
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Signups",
        data: [50, 75, 100, 120, 150, 200, 250],
        backgroundColor: "#9a3412",
        borderRadius: 5,
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
        borderRadius: 5,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="min-h-screen  w-full ml-[20%] lg:ml-[30%]  lg:px-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4 pb-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-usedColor">Visitor Approval</h1>
        </div>
        <CgProfile className="text-3xl sm:text-4xl text-usedColor" />
      </div>

      <h2 className="text-lg sm:text-3xl font-semibold text-usedColor mb-4 sm:mb-6">Dashboard</h2>

      {/* Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Weekly Signups */}
        <div className="border rounded-md p-4 bg-white shadow-md border-gray-200">
          <h3 className="text-lg font-bold text-orange-800 mb-4">
            Total Signups this Week
          </h3>
          <div className="relative h-64">
            <Bar data={weeklyData} options={chartOptions} />
          </div>
        </div>

        {/* Yearly Signups */}
        <div className="border rounded-md p-4 bg-white shadow-md border-gray-200">
          <h3 className="text-lg font-bold text-orange-800 mb-4">
            Total Signups this Year
          </h3>
          <div className="relative h-64">
            <Bar data={yearlyData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-8 bg-white text-orange-800 border border-gray-200 rounded-md p-4 shadow-md">
        <h3 className="text-lg font-bold text-orange-800 mb-4">Visitors</h3>
        <div className="overflow-x-auto">
          <table className="w-full  text-sm text-left border-collapse">
            <thead className="bg-orange-200 border-b border-gray-200">
              <tr>
                <th className="p-3 text-center border-gray-200">NAME</th>
                <th className="p-3 text-center border-gray-200">EMAIL</th>
                <th className="p-3 text-center border-gray-200">APPROVE</th>
                <th className="p-3 text-center border-gray-200">ACTION</th>
                <th className="p-3 text-center border-gray-200">BAN PERIOD</th>
              </tr>
            </thead>
            <tbody>
              {[{ name: "Janice Han", email: "janicehan@gmail.com", banPeriod: "5 Months" },
               { name: "Name 2", email: "name@two.com", banPeriod: "5 Years" },
               { name: "Name 3", email: "name@three.com", banPeriod: "5 Days" }].map((user, index) => (
                <tr key={index} className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-200`}>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </td>
                  <td className="p-3">
                    <button className="text-red-500 hover:text-red-700">
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
