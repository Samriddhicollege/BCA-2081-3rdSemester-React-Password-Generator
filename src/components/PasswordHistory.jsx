 
// ============================================================
// components/PasswordHistory.jsx — Child Component (Reusable)
// Shows the list of saved passwords with copy and delete buttons.
// This component is purely for display — all logic lives in
// PasswordGenerator and is passed down via props.
//
// Props:
//   history   — array of saved password strings
//   onDelete  — function(index) to remove one password
//   onClear   — function to wipe the entire history
//   onCopy    — function(pwd) to copy a password to clipboard
// ============================================================

function PasswordHistory({ history, onDelete, onClear, onCopy }) {
  return (
    <div className="history-panel">

      {/* ---- Header row with title and clear button ---- */}
      <div className="history-header">
        <h2 className="section-title">Steamed Batch</h2>
        {/* Conditional rendering: only show Clear All if history has items */}
        {history.length > 0 && (
          <button className="btn btn-danger-ghost" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>

      {/* ---- Empty state message (conditional rendering) ---- */}
      {history.length === 0 ? (
        <p className="empty-state">No saved passwords yet. Steam some! 🥟</p>
      ) : (
        // ---- List rendering with .map() and unique keys ----
        <ul className="history-list">
          {history.map((pwd, index) => (
            // key={index} gives React a unique identifier for each item
            <li key={index} className="history-item">
              <span className="history-pwd">{pwd}</span>
              <div className="history-item-actions">
                {/* onClick copies this specific password */}
                <button
                  className="icon-btn"
                  onClick={() => onCopy(pwd)} // onClick event
                  title="Copy"
                >
                  📋
                </button>
                {/* onClick deletes this specific password by index */}
                <button
                  className="icon-btn icon-btn-delete"
                  onClick={() => onDelete(index)} // onClick event
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default PasswordHistory;
