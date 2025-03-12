import React, { useState } from "react";
import "../styles/Franchise.css"; // Import styles

const Franchise = () => {
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        email: "",
        cellNumber: "",
        landlineNumber: "",
        cashAvailable: "",
        freeCash: "",
        fundsToBorrow: "",
        fundingSource: "",
        storesInterested: "",
        areasOfInterest: "",
        businessExperience: "",
        openingDate: { month: "", day: "", year: "" },
        additionalComments: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e) => {
        setFormData({ ...formData, openingDate: { ...formData.openingDate, [e.target.name]: e.target.value } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Franchise Inquiry Submitted!");
        console.log(formData);
        setFormData({
            title: "Mr",
            firstName: "",
            middleName: "",
            lastName: "",
            age: "",
            email: "",
            cellNumber: "",
            landlineNumber: "",
            cashAvailable: "",
            freeCash: "",
            fundsToBorrow: "",
            fundingSource: "",
            storesInterested: "",
            areasOfInterest: "",
            businessExperience: "",
            openingDate: { month: "", day: "", year: "" },
            additionalComments: "",
        });
    };

    return (
        <div className="franchise-container">
            <h1>Franchise Inquiry Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Personal Info */}
                <div className="form-group">
                    <label>Full Name *</label>
                    <select name="title" value={formData.title} onChange={handleChange}>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                    </select>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Age *</label>
                    <input type="number" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Phone Numbers *</label>
                    <input type="tel" name="cellNumber" placeholder="Cell Number" value={formData.cellNumber} onChange={handleChange} required />
                    <input type="tel" name="landlineNumber" placeholder="Landline Number" value={formData.landlineNumber} onChange={handleChange} />
                </div>

                {/* Financial Information */}
                <div className="form-group">
                    <label>Total Cash Available to Invest *</label>
                    <input type="number" name="cashAvailable" placeholder="Amount ($)" value={formData.cashAvailable} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Your Own (Free) Cash Available *</label>
                    <input type="number" name="freeCash" placeholder="Amount ($)" value={formData.freeCash} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Funds You Will Borrow *</label>
                    <input type="number" name="fundsToBorrow" placeholder="Amount ($)" value={formData.fundsToBorrow} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Who or Where Will You Borrow Funds From? *</label>
                    <input type="text" name="fundingSource" placeholder="Funding Source" value={formData.fundingSource} onChange={handleChange} required />
                </div>

                {/* Business Experience */}
                <div className="form-group">
                    <label>Business/Industry Experience *</label>
                    <div>
                        <input type="radio" name="businessExperience" value="Yes" onChange={handleChange} /> Yes, I have prior business experience
                        <input type="radio" name="businessExperience" value="No" onChange={handleChange} /> No, I am new to business ownership
                    </div>
                </div>

                {/* Store Interest */}
                <div className="form-group">
                    <label>Number of Stores Interested In *</label>
                    <input type="number" name="storesInterested" placeholder="Number of Stores" value={formData.storesInterested} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Areas of Interest *</label>
                    <textarea name="areasOfInterest" placeholder="List areas you want to open a store in" value={formData.areasOfInterest} onChange={handleChange} required></textarea>
                </div>

                {/* Planned Opening Date */}
                <div className="form-group">
                    <label>When Do You Plan to Open Your First Store? *</label>
                    <div className="date-inputs">
                        <input type="number" name="month" placeholder="Month" value={formData.openingDate.month} onChange={handleDateChange} required />
                        <input type="number" name="day" placeholder="Day" value={formData.openingDate.day} onChange={handleDateChange} required />
                        <input type="number" name="year" placeholder="Year" value={formData.openingDate.year} onChange={handleDateChange} required />
                    </div>
                </div>

                {/* Additional Comments */}
                <div className="form-group">
                    <label>Additional Comments/Questions *</label>
                    <textarea name="additionalComments" placeholder="Any other information..." value={formData.additionalComments} onChange={handleChange} required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Franchise;