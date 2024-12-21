import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManageEvent = () => {
  const [events, setEvents] = useState([
    { id: 24, challenger: "Joey Tribbs", opponent: "Chan Bing", date: null, time: null, approved: false },
    { id: 18, challenger: "Name 2", opponent: "Name 2", date: null, time: null, approved: false },
    { id: 8, challenger: "Name 3", opponent: "Name 3", date: null, time: null, approved: false },
  ]);
  const [showScheduleOptions, setShowScheduleOptions] = useState(null);

  const handleDateChange = (date, index) => {
    const updatedEvents = [...events];
    updatedEvents[index].date = date;
    setEvents(updatedEvents);
  };

  const handleTimeChange = (time, index) => {
    const updatedEvents = [...events];
    updatedEvents[index].time = time;
    setEvents(updatedEvents);
  };

  const toggleApproval = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].approved = !updatedEvents[index].approved;
    setEvents(updatedEvents);
  };

  return (
    <div className="min-h-screen ml-[30%] w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-bold text-usedColor mt-2">Manage Event</h1>
        <CgProfile className="text-4xl text-usedColor" />
      </div>

      {/* Table */}
      <div className="mt-4 bg-white shadow-md rounded-md text-orange-800 p-4">
        <div className="overflow-x-auto">
          <table className="w-full border border-collapse">
            <thead className=" text-orange-800">
              <tr>
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center">CHALLENGER</th>
                <th className="p-3 text-center">OPPONENT</th>
                <th className="p-3 text-center">EVENT DATE</th>
                <th className="p-3 text-center">EVENT TIME</th>
                <th className="p-3 text-center">APPROVE</th>
                <th className="p-3 text-center">EVENT ACTION</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={index}
                  className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-white"}`}
                >
                  <td className="p-3">{event.id}</td>
                  <td className="p-3">{event.challenger}</td>
                  <td className="p-3">{event.opponent}</td>
                  {/* Event Date Picker */}
                  <td className="p-3">
                    <DatePicker
                      selected={event.date}
                      onChange={(date) => handleDateChange(date, index)}
                      placeholderText="Choose"
                      className="text-center border rounded-md p-1 w-28"
                      dateFormat="dd/MM/yyyy"
                    />
                  </td>
                  {/* Event Time Picker */}
                  <td className="p-3">
                    <DatePicker
                      selected={event.time}
                      onChange={(time) => handleTimeChange(time, index)}
                      placeholderText="Choose"
                      className="text-center border rounded-md p-1 w-28"
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </td>
                  {/* Toggle Approval */}
                  <td className="p-3">
                    <div
                      onClick={() => toggleApproval(index)}
                      className={`w-12 h-6 flex items-center cursor-pointer rounded-full p-1 ${
                        event.approved ? "bg-orange-800" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform ${
                          event.approved ? "translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </td>
                  {/* Schedule Button with Dropdown */}
                  <td className="p-3 relative">
                    <button
                      onClick={() =>
                        setShowScheduleOptions(showScheduleOptions === index ? null : index)
                      }
                      className="bg-orange-800 text-white py-2 px-4 rounded-md hover:bg-orange-900"
                    >
                      Schedule Event
                    </button>
                    {showScheduleOptions === index && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-md border rounded-md z-10">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => alert("Schedule Later selected")}
                        >
                          Schedule Later
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => alert("Go Live selected")}
                        >
                          Go Live
                        </button>
                      </div>
                    )}
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

export default ManageEvent;
