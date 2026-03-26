 
// ============================================================
// components/Navbar.jsx
// A simple top navigation bar with the app name and a dumpling
// emoji logo. Purely presentational — no props needed.
// ============================================================

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🥟</span>
        <span className="navbar-title">DumpKey</span>
      </div>
      <div className="navbar-tagline">
        Freshly Steamed Passwords
      </div>
    </nav>
  );
}

export default Navbar;
