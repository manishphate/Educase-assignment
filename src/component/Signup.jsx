import React, { useState } from 'react';
import '../css/Signup.css';
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

    return (
        <>
            <div className="home-form-container">
                <div className='profile-page'>
                    <div className='header-div'>
                        <h1 className='header'>Create your</h1>
                        <h1 className='header'>PopX account</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <input
                                type="text"
                                id="full_Name"
                                name="full_Name"
                                value={formData.full_Name}
                                onChange={handleChange}
                                className='input'
                            />
                            <label className="label" htmlFor="full_Name" style={{marginLeft:"20px"}}>Full Name <span className='span'>*</span></label>
                        </div>

                        <div className='input-group'>
                            <input
                                type="text"
                                id="phone_Number"
                                name="phone_Number"
                                value={formData.phone_Number}
                                onChange={handleChange}
                                className='input'
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
                            />
                            <label className="label" style={{marginLeft:"25px"}} htmlFor="email">Email <span className='span'>*</span></label>
                        </div>

                        <div className='input-group'>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='input'
                           
                            />
                            <label className="label" htmlFor="password" style={{marginLeft:"20px"}}>Password <span className='span'>*</span></label>
                        </div>

                        <div className='input-group'>
                            <input
                                type="text"
                                id="Company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className='input'
                            />
                            <label className="label" htmlFor="Company" style={{marginLeft:"20px"}}>Company <span className='span'>*</span></label>
                        </div>


                        <div className="radio-header">
                            <label >Are you an agency?</label>

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
                        </div>

                        <div className="bottom-button-container">
                            <input
                                type="submit"
                                className='input-button'
                                value="Create Account"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
