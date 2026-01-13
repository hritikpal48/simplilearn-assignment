# Simplilearn Executive Roundtable – RSVP Web App

A responsive event landing page with an RSVP form integrated with **Airtable** to collect attendee details. Built using **Next.js (App Router)** and **Bootstrap 5**.

---

## 🚀 Features

* Modern responsive landing page UI
* Executive event information section
* Speaker highlights
* Event agenda section
* RSVP form with validation
* Airtable integration for storing submissions
* Submission success & error handling
* Bootstrap-only styling (no custom CSS framework)

---

## 🛠 Tech Stack

* **Next.js 13+ (App Router)**
* **React**
* **Bootstrap 5**
* **Airtable API**
* JavaScript / TypeScript

---

## 📁 Project Structure

```
app/
 ├─ page.tsx        # Main landing page
 ├─ layout.tsx      # App layout
 ├─ globals.css     # Global styles
public/
 └─ imgs/           # Images & logo
submitRSVP.js       # Airtable submission logic
.env.local          # Environment variables
```

---

## 🔐 Environment Variables Setup

Create a file named `.env.local` in the root directory:

```
AIRTABLE_API_KEY=your_personal_access_token
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=RSVPs
```

> ⚠️ Never commit `.env.local` to GitHub.

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd simplilearn-assignment
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📝 RSVP Form Fields

* Name
* Email
* Company
* Designation

All submissions are stored securely in Airtable.

---

## 🧪 Git Workflow

```bash
git add .
git commit -m "Your message"
git push
```

---

## 📸 Screenshots

<img width="1426" height="945" alt="Screenshot 2026-01-14 020203" src="https://github.com/user-attachments/assets/f850c9ea-b665-4fc5-a9c8-f1abc75ff80b" />


---

## 🧑‍💻 Author

**Hritik Singh Pal**

---

## 📄 License

This project is created for the Simplilearn assignment and is intended for educational and evaluation purposes.

---

## 💡 Notes

* Ensure Airtable API key is valid and has write access.
* Make sure the table name matches exactly.
* Use Bootstrap utility classes for layout and styling.

---

If you have any questions or need setup help, feel free to reach out 🙂
