import React from 'react';
import '../css/Profile.css'; // Make sure to import your CSS file
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = () => {

    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        // Use the saved form data
        console.log("local strorage",savedFormData);
    }
    return (
        <>
            <div className='profile-container'>
                <div className="profile-page">
                    <div className="profile-header">
                        <h4 style={{ marginLeft: "15px" }}>Account setting</h4>
                    </div>
                    <div className="profile-content">
                        <div className="profile-info">
                            <div className="profile-image">
                                <img
                                    src={require('../images/assign.jpeg')}
                                    alt=''
                                    style={{ height: '70px', width: '70px' }}
                                    className="profile-image"
                                />
                                <CameraAltIcon
                                    className="camera-icon"
                                    style={{
                                        fontSize: '13px',
                                        color: '#FFFFFF',
                                        backgroundColor: '#7d2ae8',
                                        borderRadius: '50%',
                                        padding: '3px'
                                    }}
                                />
                            </div>
                            <div className="user-info">
                                <p style={{ fontWeight: 'bold', marginBottom: '2px', marginTop: '-4px' }}>{savedFormData.full_Name}</p>
                                <p style={{ marginTop: '2px' }}>{savedFormData.email}</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.9rem' }}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </p>
                        </div>
                    </div>
                    <div className='content-section'>
                        <span style={{ fontWeight: 'bold', fontSize: '1rem', color: "gray" }}>-------------------------------------------------------</span>
                        <span style={{ fontWeight: 'bold', fontSize: '1rem', color: "gray" }}>-------------------------------------------------------</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
