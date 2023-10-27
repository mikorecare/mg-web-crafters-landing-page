import { useEffect } from 'react';
import Navbar from "./navbar"
import Footer from "./footer"
import HomeContent from "../home-content/home-content"
export default function Home(){

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey === true) {
                e.preventDefault(); // Prevent default zoom behavior when the control key is pressed
            }
        };

        const homeContentElement = document.getElementById('home-content');

        if (homeContentElement) {
            homeContentElement.addEventListener('wheel', handleWheel, { passive: false });

            // Cleanup by removing the event listener on component unmount
            return () => {
                homeContentElement.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);
    
    return(
        <>
            <Navbar/>
            <div id="home-content">
                <HomeContent/>
            </div>
            
            <Footer/>
        </>
    )
}