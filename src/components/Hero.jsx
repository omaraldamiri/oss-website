export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1>Open source starts with an open door.</h1>
          <p className="lead">
            We are the Open Source Society at the University of Jordan: students who build together, share what we learn, and help each other grow, whether you write code or not.
          </p>
          <div className="actions">
            <a className="btn" href="#join">Join the society</a>
            <a className="btn alt" href="#do">See what we do</a>
          </div>
        </div>
        <div className="keyhole">
          <img src="/logo.png" alt="Open Source Society logo: a penguin standing inside a keyhole" />
        </div>
      </div>
    </section>
  );
}