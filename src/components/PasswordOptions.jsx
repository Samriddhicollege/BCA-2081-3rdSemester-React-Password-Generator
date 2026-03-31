 
// ============================================================
// components/PasswordOptions.jsx — Child Component
// Displays the password settings: length slider and checkboxes.
// Receives all values and handlers from PasswordGenerator via props.
//
// Props:
//   length        — current password length (number)
//   setLength     — function to update length
//   options       — object { uppercase, lowercase, numbers, symbols }
//   toggleOption  — function to flip a checkbox
//   onGenerate    — function to trigger password generation
// ============================================================

// Labels shown next to each checkbox toggle.
// These describe which character groups are enabled for password generation.
const OPTION_LABELS = {
  uppercase: "A–Z (Uppercase)",
  lowercase: "a–z (Lowercase)",
  numbers:   "0–9 (Digits)",
  symbols:   "!@# (Symbols)",
};

function PasswordOptions({ length, setLength, options, toggleOption, onGenerate }) {
  return (
    <div className="options-panel">

      {/* ---- Section title ---- */}
      <h2 className="section-title">Choose Character Sets</h2>

      {/* ---- Length Slider ---- */}
      <div className="length-control">
        <label className="control-label">
          Length
          <span className="length-value">{length}</span>
        </label>
        {/* onChange fires every time the slider moves — updates length state */}
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))} // onChange event
          className="slider"
        />
        <div className="slider-hints">
          <span>6</span>
          <span>32</span>
        </div>
      </div>

      {/* ---- Character Type Checkboxes ---- */}
      <div className="options-grid">
        {/* Loop over each option key and render a toggle */}
        {Object.keys(options).map((key) => (
          <label key={key} className={`option-toggle ${options[key] ? "active" : ""}`}>
            {/* onChange fires when checkbox is clicked — calls toggleOption */}
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggleOption(key)} // onChange event
              className="hidden-checkbox"
            />
            <span className="toggle-check">{options[key] ? "✓" : ""}</span>
            <span className="toggle-label">{OPTION_LABELS[key]}</span>
          </label>
        ))}
      </div>

      {/* ---- Generate Button ---- */}
      {/* onClick fires the main generation function from parent */}
      <button className="btn btn-primary" onClick={onGenerate}> {/* onClick event */}
        Generate Password
      </button>

    </div>
  );
}

export default PasswordOptions;
