# ❄️ Chill Thrive - Recovery & Wellness Center Website

**Chill Thrive** is a modern, full-stack web application designed for a Recovery Center. It allows users to explore wellness services (like Ice Baths, Jacuzzis), view a dynamic media gallery, and book sessions online.

The project features a **custom-built Admin Portal** that allows the business owner to manage services, bookings, and content without writing code.

---

## 🚀 Key Features

### 1. **User Interface (Frontend)**
* **Glassmorphism Design:** Premium, modern UI with frosted glass effects.
* **Particle Background:** Interactive geometric particles on the Home page that react to mouse movement.
* **Smart Video Services:**
    * Services are displayed as **16:9 Cinema Cards**.
    * **Hover-to-Play:** Hovering over a service card automatically plays a preview video (muted).
    * Supports both **YouTube Embeds** and **Direct MP4 Links**.
* **Dynamic Gallery:** A smart grid that auto-detects if a link is an image or a video and displays it correctly.
* **Booking System:** Users can book sessions dynamically based on the available services in the database.

### 2. **Admin Panel (Backend Management)**
* **Secure Login:** Simple authentication to access the dashboard.
* **Service Management:** Create, Read, and Delete services. Add prices, durations, and video links.
* **Booking Management:** View incoming customer bookings and cancel them.
* **Content Management System (CMS):**
    * **Awareness:** Add educational tips about recovery.
    * **Gallery:** Upload images or videos via URL.
    * **Testimonials:** Manage client reviews.
    * **Inbox:** Read messages sent via the Contact form.

---

## 🛠️ Technology Stack

* **Frontend:** HTML5, CSS3 (Custom Animations), JavaScript (ES6 Modules).
* **Backend / Database:** Firebase Firestore (NoSQL Real-time Database).
* **Icons:** FontAwesome 6.
* **Fonts:** Google Fonts (Segoe UI / Helvetica Neue).

---

## 📂 Folder Structure

```text
/chill-thrive
│
├── index.html          # Home Page (Particle Effects & Glass UI)
├── services.html       # Services Page (Video Cards)
├── booking.html        # Booking Form
├── gallery.html        # Media Gallery
├── admin.html          # Admin Dashboard (CMS)
├── contact.html        # Contact Page
├── awareness.html      # Educational Content
├── founder.html        # Founder's Story
│
├── css/
│   └── style.css       # Main Stylesheet (Premium Theme)
│
└── js/
    └── firebase.js     # Firebase Configuration & Database Logic