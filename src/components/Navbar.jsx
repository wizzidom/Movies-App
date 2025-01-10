export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Movie Engine</div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>Favorites</li>
          </ul>
        </div>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search movies" />
        <button type="submit">Search</button>
      </div>
    </header>
  );
}
