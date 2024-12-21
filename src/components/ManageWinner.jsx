import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const ManageWinner = () => {
  const [events, setEvents] = useState([
    { id: 24, challenger: "Joey Tribbs", opponent: "Chan Bing", date: "24-08-2000", status: "Completed", winner: "Joey Tribbs" },
    { id: 18, challenger: "Name 2", opponent: "Name 2", date: "24-08-2000", status: "Tied", winner: "" },
    { id: 8, challenger: "Name 3", opponent: "Name 3", date: "24-08-2000", status: "Tied", winner: "" },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedEvents = [...events];
    updatedEvents[index].status = newStatus;
    setEvents(updatedEvents);
  };

  const handleWinnerChange = (index, winner) => {
    const updatedEvents = [...events];
    updatedEvents[index].winner = winner;
    setEvents(updatedEvents);
  };

  return (
    <div className="min-h-screen ml-[30%] w-full">
      {/* Header */}
      <div className="flex justify-between mt-3 items-center mb-6">
        <h1 className="text-3xl font-bold text-usedColor">Manage Winner</h1>
        <CgProfile className="text-4xl text-usedColor" />
      </div>

      {/* Table */}
      <div className="mt-10 bg-white text-orange-800 shadow-md rounded-md p-4">
        <div className="overflow-x-auto">
          <table className="w-full border border-collapse">
            <thead className="bg-orange-100 text-orange-800">
              <tr>
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center">CHALLENGER</th>
                <th className="p-3 text-center">OPPONENT</th>
                <th className="p-3 text-center">EVENT DATE</th>
                <th className="p-3 text-center">EVENT STATUS</th>
                <th className="p-3 text-center">WINNER</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={index}
                  className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="p-3">{event.id}</td>
                  <td className="p-3">{event.challenger}</td>
                  <td className="p-3">{event.opponent}</td>
                  <td className="p-3">{event.date}</td>
                  {/* Event Status Dropdown */}
                  <td className="p-3">
                    <select
                      value={event.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      className={`text-center border rounded-md p-1 w-32 ${
                        event.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <option value="Completed">Completed</option>
                      <option value="Tied">Tied</option>
                    </select>
                  </td>
                  {/* Winner Dropdown */}
                  <td className="p-3">
                    <select
                      value={event.winner}
                      onChange={(e) => handleWinnerChange(index, e.target.value)}
                      className="text-center border rounded-md p-1 w-40 bg-orange-50"
                    >
                      <option value="">Pending</option>
                      <option value={event.challenger}>{event.challenger}</option>
                      <option value={event.opponent}>{event.opponent}</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageWinner;
