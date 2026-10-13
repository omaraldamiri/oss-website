const teams = [
  { name: 'Technical', description: 'Develops the society\'s projects and website, runs workshops, and reviews code. For people who like to build.' },
  { name: 'Social Media', description: 'Designs and publishes our posts, stories and videos, and grows our audience across platforms.' },
  { name: 'PR & HR', description: 'Handles partnerships, communication with other societies and companies, and keeps our members welcomed and organized.' },
  { name: 'Just a member', description: 'Come to events, learn, meet people and enjoy the community, with no team commitments.' }
];

export default function Teams() {
  return (
    <section id="teams">
      <div className="wrap">
        <div className="section-head">
          <h2>Our teams</h2>
          <p>Pick the team that fits you best when you apply. You can always change later.</p>
        </div>
        <div className="teams-grid">
          {teams.map((team, i) => (
            <article key={i} className="team">
              <h3>{team.name}</h3>
              <p>{team.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}