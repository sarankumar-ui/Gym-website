import "./styles/Hero.css";


const Hero = () => {
    return (<section className="hero" id="hero">
        <div className="hero-overlay">
            <div className="hero-content">
                <h1 className="hero-title">
                    Transform YOUR <span>BODY</span>& MIND
                </h1>
                <p className="hero-subtitle">
                    Unleash your inner strength with <strong>IronFit Elite</strong> - where passion meets power.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Join Now</button>
                    <button className="btn-secondary">Explore Programs</button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Hero;