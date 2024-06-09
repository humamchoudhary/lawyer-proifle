import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initialResults } from "./data";

const lawAreas = [
  "Family Law",
  "Criminal Law",
  "Corporate Law",
  "Immigration Law",
  "Intellectual Property Law",
  // Add more law areas as needed
];

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLawArea, setSelectedLawArea] = useState("");
  const [location, setLocation] = useState("");
  const [lawyerName, setLawyerName] = useState("");

  useEffect(() => {
    // Set initial search results to display all results
    setSearchResults(initialResults);
  }, []);

  const handleSearch = () => {
    // Filter results based on search criteria
    const filteredResults = initialResults.filter((result) => {
      const matchesLawArea = selectedLawArea
        ? result.lawArea === selectedLawArea
        : true;
      const matchesLocation = location
        ? result.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesLawyerName = lawyerName
        ? result.fullName.toLowerCase().includes(lawyerName.toLowerCase())
        : true;
      return matchesLawArea && matchesLocation && matchesLawyerName;
    });
    setSearchResults(filteredResults);
  };

  return (
    <div className="bg-gray-500 min-h-screen px-6">
      <div className=" max-w-7xl mx-auto py-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Lawyer Search</h1>
        <div className="bg-gray-400 p-6 rounded shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="lawArea" className="block text-white">
                Law Area
              </label>
              <select
                id="lawArea"
                className="w-full px-3 py-2 border rounded text-white bg-gray-300"
                value={selectedLawArea}
                onChange={(e) => setSelectedLawArea(e.target.value)}
              >
                <option value="" disabled>
                  Select Law Area
                </option>
                {lawAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="location" className="block text-white">
                City/Location
              </label>
              <input
                id="location"
                type="text"
                className="w-full px-3 py-2 border rounded text-white bg-gray-300"
                placeholder="Enter City or Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="lawyerName" className="block text-white">
                Lawyer Name
              </label>
              <input
                id="lawyerName"
                type="text"
                className="w-full px-3 py-2 border rounded text-white bg-gray-300"
                placeholder="Enter Lawyer's Name"
                value={lawyerName}
                onChange={(e) => setLawyerName(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {searchResults.map((result) => (
            <a
              href={`/profile?id=${result.id}`}
              key={result.id}
              className="bg-gray-400 hover:bg-gray-300 p-8 rounded shadow-md hover:shadow-lg duration-150 transition-all"
            >
              <div className="flex flex-row items-center space-x-4 justify-between">
                <div className="flex flex-row gap-6">
                  <img
                    src={result.profilePicture}
                    alt={result.fullName}
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {result.fullName}
                    </h2>
                    <p className="text-gray-100">{result.currentPosition}</p>
                    <p className="text-gray-100">
                      {result.yearsOfExperience} years of experience
                    </p>
                    <p className="text-gray-100">{result.location}</p>
                    <p className="text-gray-100">{result.lawArea}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex px-8 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-150 transition-all">
                    <p className=" text-white font-semibold">View</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
