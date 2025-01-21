import React from 'react';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeOne({ className }) {
    const videoId = "Yei_a9GqpHk";

    return (
        <section className={`appie-features-area pt-100 ${className}`} id="features">
            <div className="container">
            <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                            Nossos diferencias
                            </h3>
                        </div>
                        <div className="youtube-video-container">
                        <div className="youtube-video-container" style={{ width: '100%', height: '600px' }}>
    <iframe
        title="Nossos Diferenciais"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        style={{ width: '100%', height: '100%' }}
    ></iframe>
</div>
                </div>

                <div className="row align-items-center">

                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeOne;
