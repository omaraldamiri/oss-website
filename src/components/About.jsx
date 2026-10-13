export default function About() {
  const interests = [
    'Open source',
    'Linux',
    'Git & GitHub',
    'Web development',
    'Software tools',
    'Student communities'
  ];

  return (
    <section id="about" className="about">
      <div className="wrap about-grid">
        <div>
          <h2>Who we are</h2>
        </div>
        <div>
          <p>
            The Open Source Society is a student community at the University of Jordan. We believe software, knowledge and tools are better when they are shared, and we want every student to have a place to learn that and put it into practice.
          </p>
          <p>
            We work on real projects, write about the tools we use, and run workshops where you learn by doing. You don't need experience to join. You only need to be curious.
          </p>
          <div className="interests" aria-label="Our interests">
            {interests.map((interest, i) => (
              <span key={i}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}