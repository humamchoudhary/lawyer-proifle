import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">All Judgments</h2>
            <p className="text-4xl font-bold">6328</p>
            <p className="mt-2">See All</p>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup Requests</h2>
            <p>Requests pending: 13</p>
            <p>Requests approved: 56</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
