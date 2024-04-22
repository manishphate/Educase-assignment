import React from 'react'
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    const handleSignIn = () => {
        navigate('/sign-in')
    }

    return (
        <>
            <div className="home-form-container">
                <div className='profile-page'>
                    <div className='home-header' style={{ marginTop: "20px" }}>
                        <div className='home-header-container'>
                            <h2 style={{ marginBottom: "10px" }}>Welcome to PopX</h2>
                            <span style={{ marginBottom: "15px" }}>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</span>
                        </div>
                    </div>
                    <div className="home-bottom-button-container" style={{ marginTop: "20px" }}>
                        <input
                            type="submit"
                            className='home-input-button'
                            value="Create Account"
                            onClick={handleSignUp}
                        />
                    </div>
                    <div className="home-bottom-button-container">
                        <input
                            type="submit"
                            className='home-input-button'
                            value="Already Registered? Login"
                            style={{ backgroundColor: '#d8bbff', color: 'black' }} // Explicitly set background color here
                            onClick={handleSignIn}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home