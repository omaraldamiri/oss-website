export default function Header() {
  return (
    <header className="site">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <img src="/logo.png" alt="" />
          Open Source Society
        </a>
        <nav aria-label="Main">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#do">What we do</a></li>
            <li><a href="#teams">Teams</a></li>
            <li><a className="btn" href="#join">Join us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}