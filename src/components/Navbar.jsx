 
// ============================================================
// components/Navbar.jsx
// A simple top navigation bar with the app name and a cozy logo.
// Purely presentational — no props needed.
// ============================================================

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo" aria-hidden="true">✿</span>
        <span className="navbar-title">PassKey</span>
      </div>
      <div className="navbar-tagline">Cute, simple, secure</div>
    </nav>
  );
}

export default Navbar;
