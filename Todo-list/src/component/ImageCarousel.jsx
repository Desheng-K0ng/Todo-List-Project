import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel() {
    const images = [
        'https://picsum.photos/id/1018/600/300',
        'https://picsum.photos/id/1015/600/300',
        'https://picsum.photos/id/1019/600/300',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        startAutoPlay();
        return stopAutoPlay;
    }, []);

    const startAutoPlay = () => {
        stopAutoPlay();
        intervalRef.current = setInterval(() => {
            goToNext();
        }, 3000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div
            className="carousel"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
        >
            {/* 左侧按钮可选保留 */}
            <button className="carousel-button prev" onClick={goToPrevious}>
                &#10094;
            </button>

            <div
                className="carousel-images"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index}`} />
                ))}
            </div>

            {/* 去掉右侧按钮，改用指示点 */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
