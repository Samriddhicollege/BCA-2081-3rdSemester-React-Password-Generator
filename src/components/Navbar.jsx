 
// ============================================================
// components/Navbar.jsx
// A simple top navigation bar with the app name and a cipher glyph logo.
// Purely presentational — no props needed.
// ============================================================

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">⌁</span>
        <span className="navbar-title">CipherForge</span>
      </div>
      <div className="navbar-tagline">
        Configurable password generation
      </div>
    </nav>
  );
}

export default Navbar;
