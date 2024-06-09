import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen px-4 pt-8 pb-4">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold mb-8">LEGAL-INSIGHT</div>
        <ul className="w-full">
          <li className="mb-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/judgments"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>All Judgments</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/add-judgment"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>Add Judgment</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/delete-judgment"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>Delete Judgment</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/edit-judgment"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>Edit Judgment</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/review-requests"
              className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded"
            >
              <span>Review Requests</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
