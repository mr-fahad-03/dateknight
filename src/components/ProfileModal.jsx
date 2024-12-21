import React from "react";

const ProfileModal = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-3/4 max-w-4xl p-16 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-700 font-bold text-2xl"
        >
          &times;
        </button>

        {/* Header with Image and Name */}
        <div className="text-center   mb-6">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-orange-500 overflow-hidden mb-3">
            <img
              src={profile.image || "placeholder.jpg"} // Replace with actual image URL
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            
          <p className="mb-4">
              <strong>Name :</strong> {profile.name}
            </p>

            <p className="mb-4">
              <strong>Location :</strong> {profile.location || "N/A"}
            </p>

            
            <p className="mb-4">
              <strong>Facebook :</strong>{" "}
              <a
                href={`https://facebook.com/${profile.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {profile.facebook}
              </a>
            </p>

            <p className="mb-4">
              <strong>UserType :</strong> {profile.userType}
            </p>
          </div>
          {/* Right Column */}
          <div>

          <p className="mb-4">
              <strong>Email :</strong> {profile.email}
            </p>

            <p className="mb-4">
              <strong>Contact :</strong> {profile.contact || "N/A"}
            </p>

            <p className="mb-4">
              <strong>Instagram :</strong>{" "}
              <a
                href={`https://instagram.com/${profile.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {profile.instagram}
              </a>
            </p>

            <p className="mb-4">
              <strong>Ban Count :</strong> {profile.banCount}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <p className="text-gray-700">
            <strong>About:</strong> {profile.about}
          </p>
        </div>

        {/* Events Section */}
        <div className="mt-6">
          <strong>Events:</strong>
          <ul className="list-disc pl-5">
            {profile.events && profile.events.length > 0 ? (
              profile.events.map((event, index) => (
                <li key={index} className="text-gray-700">
                  {event}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No events available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
