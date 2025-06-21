import React from 'react';

const Card = () => {
    return (
        <div className="card">
            {/* <img src="https://via.placeholder.com/300x180" alt="Card Image" /> */}
            <div className="card-content">
                <h3 className="card-title">Card Title</h3>
                <p className="card-text">This is a simple card description. You can add more text here to make it longer.</p>
                <a href="#" className="card-button">Learn More</a>
            </div>
        </div>
    );
}

export default Card;