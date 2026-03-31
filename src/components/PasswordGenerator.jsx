 
// ============================================================
// components/PasswordGenerator.jsx — Container Component
// This is the "brain" of the app. It manages all state,
// handles password generation logic, and talks to localStorage.
//
// It renders two child components:
//   - PasswordOptions  (the controls/settings)
//   - PasswordHistory  (the saved password list)
// ============================================================

import { useState, useEffect } from "react";
import PasswordOptions from "./PasswordOptions";
import PasswordHistory from "./PasswordHistory";

// ------------------------------------------------------------
// CHARACTER SETS used when building the password
// ------------------------------------------------------------
const CHARS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers:   "0123456789",
  symbols:   "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// Props received from App.jsx:
//   showToast(msg) — function to show a popup notification
function PasswordGenerator({ showToast }) {

  // ----------------------------------------------------------
  // STATE — all dynamic values live here (useState hook)
  // ----------------------------------------------------------

  // The currently generated password string
  const [password, setPassword] = useState("");

  // How long the password should be (slider value)
  const [length, setLength] = useState(16);

  // Which character types are toggled ON/OFF
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  // List of previously generated passwords (saved to localStorage)
  const [history, setHistory] = useState([]);

  // Strength label: "Weak" | "Fair" | "Strong" | "Crispy"
  const [strength, setStrength] = useState("");

  // ----------------------------------------------------------
  // useEffect #1 — Load saved history from localStorage on mount
  // This runs ONCE when the component first appears on screen.
  // ----------------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("dumpkey_history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []); // empty array = only runs on first render

  // ----------------------------------------------------------
  // useEffect #2 — Save history to localStorage whenever it changes
  // Anytime the history array updates, we sync it to storage.
  // ----------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("dumpkey_history", JSON.stringify(history));
  }, [history]); // runs whenever `history` changes

  // ----------------------------------------------------------
  // useEffect #3 — Recalculate strength whenever password changes
  // ----------------------------------------------------------
  useEffect(() => {
    setStrength(getStrength(password));
  }, [password]);

  // ----------------------------------------------------------
  // GENERATE PASSWORD — builds a random password based on options
  // ----------------------------------------------------------
  const generatePassword = () => {
    // Validation: make sure at least one character type is selected
    const activeTypes = Object.keys(options).filter((key) => options[key]);
    if (activeTypes.length === 0) {
      showToast("Select at least one character set!");
      return;
    }

    // Build the full character pool from active options
    let pool = "";
    activeTypes.forEach((type) => {
      pool += CHARS[type];
    });

    // Pick random characters from the pool
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      result += pool[randomIndex];
    }

    setPassword(result);
  };

  // ----------------------------------------------------------
  // COPY TO CLIPBOARD — copies password and shows toast
  // ----------------------------------------------------------
  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    showToast("Copied to clipboard.");
  };

  // ----------------------------------------------------------
  // SAVE PASSWORD — adds current password to history list
  // ----------------------------------------------------------
  const savePassword = () => {
    if (!password) return;
    // Avoid saving duplicates
    if (history.includes(password)) {
      showToast("Already saved this one!");
      return;
    }
    setHistory([password, ...history]); // newest first
    showToast("Password saved.");
  };

  // ----------------------------------------------------------
  // DELETE PASSWORD — removes one entry from history
  // This function is passed as a prop to PasswordHistory
  // ----------------------------------------------------------
  const deletePassword = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
  };

  // ----------------------------------------------------------
  // CLEAR ALL HISTORY — wipes the saved list
  // ----------------------------------------------------------
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("dumpkey_history");
    showToast("History cleared!");
  };

  // ----------------------------------------------------------
  // TOGGLE OPTION — flips a checkbox setting on/off
  // ----------------------------------------------------------
  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ----------------------------------------------------------
  // GET STRENGTH — returns a label based on password complexity
  // ----------------------------------------------------------
  const getStrength = (pwd) => {
    if (!pwd) return "";
    const activeCount = Object.values(options).filter(Boolean).length;
    if (pwd.length < 8 || activeCount === 1) return "Weak";
    if (pwd.length < 12 || activeCount === 2) return "Fair";
    if (pwd.length < 16 || activeCount === 3) return "Strong";
    return "Crispy"; // maximum strength!
  };

  // ----------------------------------------------------------
  // RENDER — pass state and handlers down to child components
  // ----------------------------------------------------------
  return (
    <div className="generator-container">

      {/* ---- Generated Password Display ---- */}
      <div className="password-display-wrapper">
        <div className="password-display" aria-label="Generated password">
          {password || <span className="placeholder-text">Your password appears here…</span>}
        </div>

        {/* Strength badge — only shown when a password exists */}
        {strength && (
          <div className={`strength-badge strength-${strength.split(" ")[0].toLowerCase()}`}>
            {strength}
          </div>
        )}

        {/* Action buttons for copy and save */}
        <div className="display-actions">
          <button className="btn btn-ghost" onClick={copyToClipboard} disabled={!password}>
            Copy
          </button>
          <button className="btn btn-ghost" onClick={savePassword} disabled={!password}>
            Save
          </button>
        </div>
      </div>

      {/* ---- Options Panel (child component) ---- */}
      {/* We pass down state values and handler functions as props */}
      <PasswordOptions
        length={length}
        setLength={setLength}        // prop: function from parent
        options={options}
        toggleOption={toggleOption}  // prop: function from parent
        onGenerate={generatePassword}
      />

      {/* ---- History Panel (child component) ---- */}
      {/* We pass the list and delete/clear handlers as props */}
      <PasswordHistory
        history={history}
        onDelete={deletePassword}    // prop: function from parent
        onClear={clearHistory}
        onCopy={(pwd) => {
          navigator.clipboard.writeText(pwd);
          showToast("Copied to clipboard.");
        }}
      />

    </div>
  );
}

export default PasswordGenerator;
