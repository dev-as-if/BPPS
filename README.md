# Book & Pen Public School Website + Admin ERP System (Student Fee Management)

## Objective
Develop a full-stack web application tailored for a small NGO-run school with fewer than 1000 students (classes 0 to 10). The system comprises:

- A **public-facing website** to showcase school information.
- An **Admin ERP panel** for managing student fee records and generating detailed reports.

---

## 📌 Frontend Features

- **Technology:** React.js styled with Tailwind CSS or Bootstrap.
- **Routing:** Implemented with React Router for smooth navigation.
- **Design:** Fully responsive and mobile-friendly UI.

### Pages
- **Home:** School's mission, vision, and introduction.
- **About:** Information on the team, founders, and school history.
- **Academics:** Curriculum details and subjects per class.
- **Activities:** Gallery and extracurricular activities overview.
- **Success Stories:** Testimonials and alumni achievements.
- **Contact:** Contact form enabling users to send emails directly to admin.
- **(Optional) Donate:** Page to facilitate donations.

---

## 📌 Backend Features

- **Platform:** Node.js and Express.js.
- **Database:** MongoDB (via Mongoose) or MySQL/PostgreSQL (via Sequelize).
- **API:** RESTful services for smooth frontend-backend communication.
- **Security:** JWT-based authentication for secure admin access.

---

## 📌 ERP Admin Panel

### Admin Authentication
- Secure login and logout functionality.

### Student Management
- Add, edit, and delete student records.
- Auto-generate unique 6-digit enrollment numbers on admission.
- Store vital details including name, class, guardian info, contact, address, and admission date.

### Fee Management
- Record fee payments with amount, date, month, and year.
- View and filter fee payment history for each student.
- Search students by name or enrollment number.
- Automatically calculate and display pending fees.

### Reporting
- Generate class-wise and monthly fee collection summaries.
- Export reports as PDF and Excel files.
- (Optional) Visualize monthly income using charts and graphs.

---

## 📌 Functional Specifications

- Enrollment numbers auto-generated within the range 100000–999999.
- Fees are donation-based and non-mandatory; zero or variable payments allowed.
- Fees recorded by month and year (e.g., May 2025).
- Duplicate monthly fee entries per student prevented.
- Display pending fees by comparing expected vs. paid months.
- Provide download/export options (PDF, Excel) for:
  - Student fee records
  - Class-wise summaries
  - Monthly financial reports

---

## 📌 Suggested Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT
- **Export Tools:** jspdf, xlsx, or exceljs

---

## 📌 Bonus Features (Optional)

- Upload profile images for students.
- Add search and filters in admin data tables.
- Responsive dashboard showcasing real-time statistics with charts.
- Upload capability for documents such as admission forms or IDs.
- Ability to print individual fee slips.

---

## 📌 Deployment Recommendations

- **Frontend Hosting:** Platforms like Netlify or Vercel.
- **Backend Hosting:** Services such as Render, Railway, or DigitalOcean.
- **Security:** Use environment variables for all sensitive credentials and keys.
- **Maintenance:** Schedule regular database backups.

---

## 📌 Deliverables

- Complete source codebase with separate:
  - Frontend folder (React app).
  - Backend folder (Node/Express server).
- Clear **README.md** with setup and usage instructions.
- Pre-configured admin login credentials for demo purposes.
- Fully functional local setup with deployable production builds.

---

Thank you for using this system to streamline school management and improve transparency for Book & Pen Public School. For any questions or support, please refer to the documentation or contact the admin.


``` ⬤
