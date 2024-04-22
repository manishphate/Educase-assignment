import React, { useState } from 'react'
import '../css/Signin.css'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        full_Name: 'Marry Doe',
        email: '',
        password: ''

    });
    const navigate = useNavigate();

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email) {

            formData.full_Name = 'Marry Doe';
            formData.email = 'marrydoe@gmail.com';
            formData.password = '';

            localStorage.setItem('formData', JSON.stringify(formData));
        } else {
            localStorage.setItem('formData', JSON.stringify(formData));
        }

        navigate('/profile');
    };

    return (
        <>
            <div className="home-form-container">
                <div className='profile-page'>
                    <form onSubmit={handleSubmit}>
                        <div className='signin-header' >
                            <div className='signin-header-container' style={{ marginTop: "40px", marginLeft: "20px" }}>
                                <h2 style={{ marginBottom: "10px" }}>Signin to your <br /> PopX account</h2>
                                <span style={{ paddingTop: "20px" }}>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</span>
                            </div>
                            
                                <div className='input-group'>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Enter email address'
                                    />
                                    <label className="label" htmlFor="email" style={{marginLeft:"25px"}}>Email </label>
                                </div>

                                <div className='input-group'>
                                    <input
                                        type="text"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Enter password'
                                    />
                                    <label className="label" htmlFor="password" style={{marginLeft:"20px"}}>Password </label>
                                </div>
                            
                        </div>
                        <div className="signin-button-container">
                            <input
                                type="submit"
                                className='input-button'
                                value="Login"
                                style={{ backgroundColor: '#c7c7c7', color: 'white' }} // Explicitly set background color here

                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn