Project Title:
"Book & Pen Public School Website + Admin ERP System (Student Fee Management)"

Objective:
Create a complete full-stack web application for a small NGO-run school (less than 1000 students, classes 0 to 10) that includes:

A public-facing website to showcase school information.

An admin panel (ERP) to manage student fee records and generate reports.

📌 Frontend Requirements:
Use React.js (with Tailwind CSS or Bootstrap for styling).

Use React Router for navigation.

Mobile-friendly & responsive UI.

Pages:
Home Page – Mission, vision, intro to school.

About Page – Team, founders, history.

Academics Page – Curriculum and subjects by class.

Activities Page – Gallery, extracurriculars.

Success Stories – Testimonials, alumni.

Contact Page – Contact form (send email to admin).

(Optional) Donate Page.

📌 Backend Requirements:
Use Node.js + Express.js for the server.

Use MongoDB (via Mongoose) or MySQL/PostgreSQL (via Sequelize) for data storage.

Implement RESTful APIs.

Include JWT-based authentication for admin login.

📌 ERP Admin Panel Requirements:
Admin login/logout

Student Management:

Add/Edit/Delete student

Generate 6-digit random enrollmentNumber on admission

Store name, class, guardian, contact, address, date of admission

Fee Management:

Add new fee payment entry (amount, date, month, year)

View fee history per student (filterable)

Search student by name/enrollment number

Auto-calculate and display pending fees per student

Reports:

Class-wise and month-wise fee collection summary

Export reports to PDF and Excel

Use chart/graph (optional) to visualize monthly income

📌 Functional Specs:
On student admission, auto-generate a 6-digit enrollment number (e.g., 100000–999999)

Fee is non-mandatory (donation-based); allow zero or variable payments

Fee should be recorded by month and year (e.g., May 2025)

Prevent duplicate fee entries for the same student & month

Show pending fees by comparing expected vs paid months

Include download/export options (PDF, Excel) for:

Student fee records

Class-wise summaries

Monthly financial reports

📌 Tech Stack Suggestions (can be modified):
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Auth: JWT

PDF/Excel Export: jspdf, xlsx, or exceljs

📌 Bonus Features (if possible):
Allow profile image upload for each student

Add filters/search in admin tables

Responsive dashboard with statistics (charts)

Upload documents (admission form/ID) if needed

Print individual fee slips

📌 Deployment Instructions:
Host frontend (Netlify, Vercel)

Host backend (Render, Railway, or DigitalOcean)

Use environment variables for sensitive data

Ensure database backups

📌 Output Expected:
Complete codebase with:

Frontend folder (React)

Backend folder (Node/Express)

Clear README with setup & usage instructions

Admin login credentials pre-set (demo)

Working local setup + deployable build

