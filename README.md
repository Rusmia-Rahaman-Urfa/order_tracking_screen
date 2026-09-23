# 📦 Order Tracking UI — E-Commerce Assessment

A modern, mobile-first Order Tracking interface built to handle dynamic shipping states, real-time progress timelines, and critical edge cases (Delayed Orders, Delivered but Missing Packages, and Unassigned Tracking).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8.svg)

---

## ✨ Features & Special States

This application addresses critical post-purchase scenarios instead of displaying standard static text:

1. **Standard Delivery State (`normal`)**
   - Displays real-time 4-stage tracking progress (`Processing` → `Shipped` → `Out for Delivery` → `Delivered`).
   - Clear ETA, order number, and itemized product breakdown.

2. **Delayed Order Handling (`delayed`)**
   - Highlights delayed confidence states with warning banners.
   - Adjusts estimated delivery messaging and provides direct action items to reach carrier support.

3. **Delivered but Not Received (`deliveredMissing`)**
   - Addresses instances where tracking marks the item delivered but the customer cannot locate it.
   - Replaces generic status with a dedicated "Report Missing Package" action flow.

4. **Tracking Not Available Yet (`noTracking`)**
   - Prevents broken UI layouts before tracking details exist.
   - Displays a clean awaiting-carrier state with an option to request tracking alerts.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 📁 Project Structure

```text
Order Tracking Screen/
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── mockOrder.js
    └── components/
        ├── StatePanel.jsx
        ├── DeliveryTimeline.jsx
        └── ProductSummary.jsx