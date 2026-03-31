## Project Title

> **PassKey** - Cute, Simple, Secure Password Generator

A lightweight, modern password generator built with React and Vite. Generate strong, customizable passwords with real-time strength indicators and password history.

---
## Student Information

* **Name:** Anupa Lamichhane
* **Roll Number:** 03
* **Course / Program:** BCA
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

* **Instructor Name:** Mr. Dipak Shrestha
* **Course Title:** React Development / Full Stack Development
* **College Name:** XYZ International College

---

## Project Overview

PassKey is a user-friendly web application that helps users generate secure passwords with customizable options. The application allows users to:
- Generate passwords with adjustable length (up to 128 characters)
- Toggle character types (uppercase, lowercase, numbers, symbols)
- View real-time password strength indicators
- Save generated passwords to history
- Copy passwords to clipboard with instant feedback
- Clear password history when needed

---

## Key Features

* **Password Generation Engine** - Generates random, cryptographically secure passwords based on selected character sets
* **Customizable Options** - Adjust password length and choose which character types to include
* **Strength Indicator** - Real-time password strength calculation (Weak, Fair, Strong, Crispy)
* **Password History** - Tracks previously generated passwords with persistent localStorage
* **Copy to Clipboard** - One-click copying with visual toast notifications
* **Responsive Design** - Works seamlessly on desktop and mobile devices
* **Component-Based Architecture** - Modular, maintainable React components
* **State Management** - Modern React hooks (useState, useEffect)

---

## Technologies Used

* **React.js** - UI library
* **Vite** - Fast build tool and development server
* **HTML, CSS, JavaScript** - Core web technologies
* **localStorage API** - Client-side data persistence

---

## Project Structure

```
password-generator/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation with app branding
│   │   ├── PasswordGenerator.jsx # Main container & password logic
│   │   ├── PasswordOptions.jsx   # Controls for customization
│   │   ├── PasswordHistory.jsx   # Displays saved passwords
│   │   └── Toast.jsx             # Notification component
│   ├── App.jsx                  # Root component
│   ├── App.css                  # Application styling
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # Linting rules
```

---

## Installation & Setup

```bash
# Clone the repository (or extract the project folder)
cd password-generator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## How to Use

1. **Set Password Length** - Use the slider to choose desired length (8-128 characters)
2. **Select Character Types** - Toggle checkboxes for Uppercase, Lowercase, Numbers, and Symbols
3. **Generate Password** - Click the generate button to create a new password
4. **Check Strength** - View the strength indicator to assess password security
5. **Copy Password** - Click the copy button; a toast notification confirms the action
6. **View History** - See all previously generated passwords in the history section
7. **Manage History** - Remove individual passwords or clear all history

---

## Available Scripts

* `npm run dev` - Start development server with hot reload
* `npm run build` - Build optimized production bundle
* `npm run lint` - Run ESLint to check code quality
* `npm run preview` - Preview the production build locally

# Run backend (if applicable)
go run main.go
```

---

## Project Structure

```
/project-root
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│
│── database/
│── README.md
```

---

## GitHub & Live Demo

* **GitHub Repository:** https://github.com/johndoe/rms-project
* **Live URL (if deployed):** https://rms-demo.netlify.app

---

## Testing

* Tested UI responsiveness on different screen sizes (mobile, tablet, desktop)
* Verified API responses using Postman
* Checked edge cases (empty cart, invalid input, login errors)

---

## Challenges Faced

> Example:

* Difficulty in managing state across multiple components in React
* API integration issues between frontend and backend
* Database connection and schema handling challenges

---

## Future Enhancements

* Add online payment integration (eSewa/Khalti)
* Improve UI/UX design with animations
* Add real-time order tracking
* Implement notification system for orders

---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.
