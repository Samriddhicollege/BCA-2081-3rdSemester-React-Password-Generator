 
// ============================================================
// components/Toast.jsx — Reusable Notification Component
// A small popup that slides in from the bottom to confirm
// an action (copy, save, delete, etc.).
//
// Props:
//   message — the text to display inside the toast
//
// Visibility is controlled by App.jsx: when message is empty,
// the Toast is simply not rendered at all.
// ============================================================

function Toast({ message }) {
  return (
    <div className="toast" role="alert">
      {message}
    </div>
  );
}

export default Toast;
