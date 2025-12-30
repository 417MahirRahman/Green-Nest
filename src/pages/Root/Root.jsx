import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';


const Root = () => {
    return (
        <div data-theme="light" className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            
            <main className='grow bg-[#F0FDF4]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>    
        </div>
    );
};

export default Root;