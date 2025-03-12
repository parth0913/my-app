import React from 'react'

export default function Categories(){
    return(
        <>
        <section id="test-section">
        <div className="menu-wrapper">
            <button className="scroll-btn left" onclick="document.getElementById('menu').scrollLeft -= 200">&#8249;</button>
        
            <div className="menu-container" id="menu">
                <div className="menu">
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="All Flowers"/>
                        <span>All Flowers</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="New Arrivals"/>
                        <span>New Arrivals</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Luxe Arrangements"/>
                        <span>Luxe Arrangements</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Birthdays"/>
                        <span>Birthdays</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Anniversaries"/>
                        <span>Anniversaries</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                    <div className="menu-item">
                        <img src="images/fav1.png" alt="Get Same Day"/>
                        <span>Get Same Day</span>
                    </div>
                </div>
            </div>
        
            <button className="scroll-btn right" onclick="document.getElementById('menu').scrollLeft += 200">&#8250;</button>
        </div>
    </section>
    </>
    )
}