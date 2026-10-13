const items = [
  { title: 'Projects', description: 'Build and contribute to open source projects together, from first commit to release.' },
  { title: 'Tools and open source posts', description: 'Short posts that introduce useful tools and explain open source ideas simply.' },
  { title: 'Blogs', description: 'Longer write-ups of what we build, what we learn, and how we solved problems.' },
  { title: 'Workshops', description: 'Practical sessions on Git, Linux, web development and more, open to every level.' },
  { title: 'And much more', description: 'Meetups, talks, collaborations and events. Follow us to see what\'s next.' }
];

export default function WhatWeDo() {
  return (
    <section id="do" className="do">
      <div className="wrap">
        <div className="section-head">
          <h2>What we do</h2>
          <p>Throughout the year we run a mix of hands-on and community activities.</p>
        </div>
        <div className="do-grid">
          {items.map((item, i) => (
            <article key={i} className="do-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}