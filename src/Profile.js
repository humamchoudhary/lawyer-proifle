import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { initialResults } from "./data";
import { useLocation } from "react-router-dom";
import StarRating from "./components/StarRating";

const Profile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  console.log(id);
  const lawyer = initialResults.find((lawyer) => lawyer.id === parseInt(id));
  const handleAddReview = () => {
    // Here you can call the addReview function with the review data
    console.log("Adding Review:", reviewRating, reviewText);
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
              Consultation Types:
              <ul className="ml-4 list-disc">
                {lawyer.consultationTypes.map((type, index) => (
                  <li key={index}>
                    {type.type}: {type.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Social Media and Contact
            </h2>
            <p className="text-white">Contact Number: {lawyer.contactNumber}</p>
            <div className="flex space-x-4">
              <a
                href={lawyer.socialMedia.facebook}
                className="text-white hover:text-blue-600"
              >
                Facebook
              </a>
              <a
                href={lawyer.socialMedia.whatsapp}
                className="text-white hover:text-blue-600"
              >
                WhatsApp
              </a>
              <a
                href={lawyer.socialMedia.linkedin}
                className="text-white hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Reviews and Ratings
            </h2>
            <div className="space-y-4">
              {lawyer.reviews.map((review, index) => (
                <div key={index} className="bg-gray-300 p-4 rounded shadow-md">
                  <p className="text-white font-bold">{review.title}</p>
                  <div className="flex items-center mb-2">
                    <p className="text-yellow-400 mr-2">Rating:</p>
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
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Add a Review
              </h2>
              <div className="mb-4">
                <StarRating
                  rating={reviewRating}
                  onRatingChange={setReviewRating}
                />
              </div>
              <textarea
                placeholder="Write your review here..."
                rows="4"
                className="w-full px-3 py-2 border rounded text-gray-800 bg-white"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleAddReview}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
