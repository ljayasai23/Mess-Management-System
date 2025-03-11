import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    messNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!/^[A-Za-z ]+$/.test(value)) error = "Only letters and spaces allowed";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "rollNumber":
        if (!/^[A-Za-z0-9]+$/.test(value)) error = "Invalid roll number";
        break;
      case "messNumber":
        if (!/^[0-9]+$/.test(value)) error = "Mess number must be numeric";
        break;
      case "password":
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
          error = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      alert("Registration Successful!");
    }
  };

  return (
    <div className="registration-page d-flex justify-content-center align-items-center min-vh-100">
      <div className="registration-container shadow-lg p-4 rounded w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-3">
              <label className="form-label text-muted">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
              <input
                type={key.includes("password") ? "password" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className={`form-control ${errors[key] ? "is-invalid" : ""}`}
              />
              {errors[key] && <div className="invalid-feedback">{errors[key]}</div>}
            </div>
          ))}
          <button type="submit" className="btn btn-success w-100 shadow-sm mt-3">Register</button>
        </form>
      </div>
    </div>
  );
  
}
