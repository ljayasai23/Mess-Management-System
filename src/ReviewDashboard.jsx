import "./ReviewDashboard.css";
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
        <div>
            {/* Profile Button Outside Dashboard */}
            <div className="position-fixed" style={{ top: "15px", right: "15px", zIndex: 1050 }}>
                <FaUserCircle size={40} className="text-secondary cursor-pointer" onClick={() => setProfileVisible(!profileVisible)} />
                {profileVisible && (
                    <div className="position-absolute bg-white border p-3 shadow rounded" 
                         style={{ right: 0, top: "50px", width: "250px", textAlign: "left", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <h6 className="mb-2 text-dark"><strong>Profile Info</strong></h6>
                        <p className="mb-1 text-dark"><strong>Name:</strong> John Doe</p>
                        <p className="mb-1 text-dark"><strong>Hostel:</strong> Block A</p>
                        <p className="mb-1 text-dark"><strong>Room No:</strong> 101</p>
                    </div>
                )}
            </div>

            {/* Dashboard Content */}
            <motion.div className="container mt-5 mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="text-primary text-center mb-4">Mess Feedback Dashboard</h2>
                {reviews.map(({ id, question, rating, comment }) => (
                    <Card key={id} className="custom-card">
                        <div className="card-body">
                            <h5>{question}</h5>
                            <div className="d-flex align-items-center">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} size={24} className={index < rating ? "text-warning" : "text-secondary"} onClick={() => handleRating(id, index + 1)} />
                                ))}
                            </div>
                            <textarea className="form-control mt-2" placeholder="Leave a comment..." value={comment} onChange={(e) => handleComment(id, e.target.value)} />
                        </div>
                    </Card>
                ))}
                <Button className="mt-4 w-100 btn btn-primary">Submit Feedback</Button>
            </motion.div>
        </div>
    );
};

export default ReviewDashboard;
