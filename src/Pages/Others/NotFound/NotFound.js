import React from 'react';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from './../../Shared/Footer/Footer';
import Navbar2 from './../../Shared/Navbar/Navbar2';

const NotFound = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="flex justify-center">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=600" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;