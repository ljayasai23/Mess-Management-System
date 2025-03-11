import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewDashboard = () => {
    const [reviews, setReviews] = useState([
        { id: 1, question: "How was the food quality?", rating: 0, comment: "" },
        { id: 2, question: "Was the mess clean?", rating: 0, comment: "" },
        { id: 3, question: "Was the service prompt?", rating: 0, comment: "" }
    ]);

    const [profileVisible, setProfileVisible] = useState(false);

    const handleRating = (id, rating) => {
        setReviews(reviews.map(r => r.id === id ? { ...r, rating } : r));
    };

    const handleComment = (id, comment) => {
        setReviews(reviews.map(r => r.id === id ? { ...r, comment } : r));
    };

    return (
        <motion.div 
            className="container mt-5" 
            style={{ minHeight: "100vh", paddingTop: "70px", marginBottom: "70px" }} // Adjusted bottom space
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
        >   

            
            {/* Profile Section (Fixed to Top-Right) */}
            <div className="position-fixed top-0 end-0 p-3">
                <FaUserCircle 
                    size={40} 
                    className="text-secondary cursor-pointer" 
                    onClick={() => setProfileVisible(!profileVisible)} 
                />
                {profileVisible && (
                    <div className="bg-white border p-3 shadow rounded position-absolute mt-2" style={{ right: 0, width: "250px" }}>
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Hostel:</strong> Block D</p>
                        <p><strong>Mess No:</strong> 8</p>
                        <Button className="btn btn-danger w-100 mt-2">Logout</Button>
                    </div>
                )}
            </div>

            {/* Dashboard Title */}
            <h2 className="text-primary mb-4">Mess Feedback Dashboard</h2>

            {/* Feedback Questions */}
            {reviews.map(({ id, question, rating, comment }) => (
                <Card key={id} className="custom-card">
                    <div className="card-body">
                        <h5>{question}</h5>
                        <div className="d-flex align-items-center mb-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <FaStar 
                                    key={star} 
                                    size={25} 
                                    className={`mx-1 ${star <= rating ? "text-warning" : "text-secondary"}`} 
                                    onClick={() => handleRating(id, star)} 
                                    style={{ cursor: "pointer" }} 
                                />
                            ))}
                        </div>
                        <textarea 
                            className="form-control mt-2" 
                            placeholder="Leave a comment..." 
                            value={comment} 
                            onChange={(e) => handleComment(id, e.target.value)}
                        />
                    </div>
                </Card>
            ))}

            {/* Submit Button */}
            <Button className="mt-4 w-100 btn btn-primary">Submit Feedback</Button>
        </motion.div>
    );
};

export default ReviewDashboard;
