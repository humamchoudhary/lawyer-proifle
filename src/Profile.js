import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { initialResults } from "./data";
import StarRating from "./components/StarRating";

const Profile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewCategory, setReviewCategory] = useState("");

  const lawyer = initialResults.find((lawyer) => lawyer.id === parseInt(id));

  const handleAddReview = () => {
    // Here you can call the addReview function with the review data
    console.log("Adding Review:", reviewCategory, reviewRating, reviewText);
  };

  if (!lawyer) {
    return (
      <div className="bg-gray-500 min-h-screen px-6 py-24">
        <p className="text-white">Lawyer not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-500 min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto bg-gray-400 p-8 rounded shadow-md">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={lawyer.profilePicture}
            alt={lawyer.fullName}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full"
          />
          <div className="md:ml-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              {lawyer.fullName}
            </h1>
            <p className="text-white mb-2">{lawyer.currentPosition}</p>
            <p className="text-white mb-2">
              {lawyer.yearsOfExperience} years of experience
            </p>
            <p className="text-white mb-2">{lawyer.location}</p>
            <p className="text-white mb-2">{lawyer.lawArea}</p>
            <div className="flex items-center mb-2">
              <p className="text-yellow-400 mr-2">Rating:</p>
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < lawyer.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.87a1 1 0 011.902 0l1.29 3.964a1 1 0 00.95.69h4.178a1 1 0 01.592 1.806l-3.39 2.458a1 1 0 00-.364 1.118l1.29 3.964a1 1 0 01-1.54 1.118L10 12.317l-3.39 2.458a1 1 0 01-1.54-1.118l1.29-3.964a1 1 0 00-.364-1.118L2.606 7.33a1 1 0 01.592-1.806h4.178a1 1 0 00.95-.69L9.049.87z" />
                </svg>
              ))}
            </div>
            <p className="text-white mb-4">{lawyer.description}</p>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Basic Information
            </h2>
            <p className="text-white">Areas: {lawyer.areas.join(", ")}</p>
            <p className="text-white">
              Bar Affiliation: {lawyer.barAffiliation}
            </p>
            <p className="text-white">
              Bar Association: {lawyer.barAssociation}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Personal Details
            </h2>
            <p className="text-white">Name: {lawyer.fullName}</p>
            <p className="text-white">Province: {lawyer.province}</p>
            <p className="text-white">City: {lawyer.city}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Education</h2>
            <p className="text-white">Education: {lawyer.education}</p>
            <p className="text-white">LLB: {lawyer.llb}</p>
            <p className="text-white">LLM: {lawyer.llm}</p>
            <p className="text-white">LLD: {lawyer.lld}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Professional Details
            </h2>
            <p className="text-white">
              Current Position: {lawyer.currentPosition}
            </p>
            <p className="text-white">
              Duration of Practice: {lawyer.yearsOfExperience} years
            </p>
            <p className="text-white">Lower Courts: {lawyer.lowerCourts}</p>
            <p className="text-white">High Court: {lawyer.highCourt}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              License and Certifications
            </h2>
            <p className="text-white">
              Certifications: {lawyer.certifications.join(", ")}
            </p>
            <p className="text-white">
              Case Experience: {lawyer.caseExperience}
            </p>
            <p className="text-white">Notable Cases: {lawyer.notableCases}</p>
            <p className="text-white">
              Success Stories: {lawyer.successStories}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Office Details
            </h2>
            <p className="text-white">Office Address: {lawyer.officeAddress}</p>
            <p className="text-white">Office Hours: {lawyer.officeHours}</p>
            <p className="text-white">
              Consultation Modes: {lawyer.consultationModes.join(", ")}
            </p>
            <div className="text-white">
              <p className="font-bold">Consultation Fees:</p>
              {lawyer.consultationTypes.map((consultation, index) => (
                <p key={index}>
                  {consultation.type}: {consultation.price}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Reviews</h2>
            {lawyer.reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold text-white">{review.title}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-5 h-5 ${
                        starIndex < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049.87a1 1 0 011.902 0l1.29 3.964a1 1 0 00.95.69h4.178a1 1 0 01.592 1.806l-3.39 2.458a1 1 0 00-.364 1.118l1.29 3.964a1 1 0 01-1.54 1.118L10 12.317l-3.39 2.458a1 1 0 01-1.54-1.118l1.29-3.964a1 1 0 00-.364-1.118L2.606 7.33a1 1 0 01.592-1.806h4.178a1 1 0 00.95-.69L9.049.87z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white">{review.reviewText}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Add a Review</h2>
            <div className="flex flex-col md:flex-col items-start mb-3 ">
              <label className="text-white font-bold mb-2" htmlFor="category">
                Review Category:
              </label>
              <select
                id="category"
                value={reviewCategory}
                onChange={(e) => setReviewCategory(e.target.value)}
                className=" p-2  border border-gray-300 rounded"
              >
                <option value="">Select Category</option>
                <option value="Consultation">Consultation</option>
                <option value="Case Handling">Case Handling</option>
                <option value="Communication">Communication</option>
                <option value="Professionalism">Professionalism</option>
                <option value="Results Achieved">Results Achieved</option>
              </select>
            </div>
            <div className="mb-4">
              <StarRating
                rating={reviewRating}
                onRatingChange={setReviewRating}
              />
            </div>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleAddReview}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
