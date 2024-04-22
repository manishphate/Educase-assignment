import React, { useState } from 'react';
import '../css/Signup.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        full_Name: 'Marry Doe',
        phone_Number: 'Marry Doe',
        email: 'marrydoe@gmail.com',
        password: 'Marry Doe',
        company: 'Marry Doe',
        agency: ''

    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        setFormData({
            full_Name: '',
            phone_Number: '',
            email: '',
            password: '',
            company: '',
            agency: ''
        });

        navigate('/profile')
    };

    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        // Use the saved form data
        console.log("local strorage",savedFormData);
    }

    return (
        <>
            <div className="form-container">
                <div className='header-div'>
                    <h1 className='header'>Create your</h1>
                    <h1 className='header'>PopX account</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="name">Name:</label> */}

                    <div className='input-group'>
                        <input
                            type="text"
                            id="full_Name"
                            name="full_Name"
                            value={formData.full_Name}
                            onChange={handleChange}
                            className='input'
                        // required
                        />
                        <label className="label" htmlFor="full_Name">Full Name <span className='span'>*</span></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type="text"
                            id=""
                            name="phone_Number"
                            value={formData.phone_Number}
                            onChange={handleChange}
                            className='input'
                        // required
                        />
                        <label className="label" htmlFor="phone_Number">Phone Number <span className='span'>*</span></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='input'
                        // required
                        />
                        <label className="label" htmlFor="email">Email <span className='span'>*</span></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='input'
                        // required
                        />
                        <label className="label" htmlFor="password">Password <span className='span'>*</span></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type="text"
                            id="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className='input'
                        // required
                        />
                        <label className="label" htmlFor="Company">Company <span className='span'>*</span></label>
                    </div>


                    <div>
                        <label className="radio-header">Are you an agency?</label>
                    </div>
                    <div className='radio-group'>

                        <input
                            type="radio"
                            id="agency_yes"
                            name="agency"
                            value="Yes"
                            className='radio-button'
                            onChange={handleChange}
                            required
                        />
                        <label className='radio-label' htmlFor="agency_yes">Yes</label>
                        <input
                            type="radio"
                            id="agency_no"
                            name="agency"
                            value="No"
                            className='radio-button'
                            onChange={handleChange}
                            required
                        />
                        <label className='radio-label' htmlFor="agency_no">No</label>
                    </div>


                    {/* <button type="submit">Submit</button> */}

                    <div className="bottom-button-container">
                        <input
                            type="submit"
                            className='input-button'
                            value="Create Account"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
