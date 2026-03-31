// ============================================================
// App.jsx — Root component
// This is the top-level component. It holds the page layout,
// the Navbar, and renders the main PasswordGenerator container.
// ============================================================

import { useState } from "react";
import Navbar from "./components/Navbar";
import PasswordGenerator from "./components/PasswordGenerator";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  // toastMsg holds the text shown in the popup notification
  // when the user copies a password. Empty string = hidden.
  const [toastMsg, setToastMsg] = useState("");

  // showToast is passed down as a prop so child components
  // can trigger a toast notification from anywhere
  const showToast = (msg) => {
    setToastMsg(msg);
    // Auto-hide the toast after 2 seconds
    setTimeout(() => setToastMsg(""), 2000);
  };

  return (
    <div className="app-wrapper">
      {/* Decorative background glyphs (purely visual) */}
      <div className="bg-glyphs" aria-hidden="true">
        <span>⟡</span><span>⌬</span><span>⧉</span>
        <span>⟠</span><span>⧫</span><span>⌁</span>
      </div>

      {/* Navbar component at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
        {/* PasswordGenerator contains the main UI: length slider, character-set toggles, strength badge, and history */}
        {/* We pass showToast down so copy/save actions can provide quick feedback */}
        <PasswordGenerator showToast={showToast} />
      </main>

      {/* Toast notification — only visible when toastMsg is not empty */}
      {toastMsg && <Toast message={toastMsg} />}
    </div>
  );
}

export default App;
