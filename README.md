Backend Deployed link: https://s85-shivang-capstone-campuskart.onrender.com
Frontend Deployed link: https://681c94b24d92cb32b5108cfb--fascinating-lebkuchen-7aef0f.netlify.app/
# 🛍️ Capstone Project: **CampusKart**  
*A Marketplace for Hostel Students*

---

## 🧠 Idea Brief

- **Project Name**: CampusKart  
- **Domain**: E-commerce (Hostel Students)

### 📄 Description

**CampusKart** (previously Maggie Mart) is a full-stack web application designed to help hostel students buy and sell pre-owned items like books, electronics, clothing, eatables, and daily-use products. The goal is to create a sustainable and student-friendly campus marketplace — solving the problem of unused belongings and lack of access to affordable second-hand essentials.

The platform ensures smooth usability and a modern interface, offering features like:

- User authentication (email + Google)
- Image-based listings
- Category filters
- Buyer-seller chat system

🎯 *Future versions will include AI-based item recommendations and online payment integration.*

---

## 🛠️ Core Features

| Feature               | Description                                      |
|----------------------|--------------------------------------------------|
| 👤 **Authentication** | Email/Password & Google OAuth via Passport.js   |
| 🛒 **CRUD Listings**  | Create, Read, Update, Delete item entries       |
| 🔎 **Search & Filters** | Category-wise filter, price range, keyword search |
| 💬 **Messaging**      | Buyer-Seller chat (real-time or delayed)        |
| 📸 **Image Uploads**  | Cloudinary-based file uploads for listings      |
| 🗃️ **Database**        | PostgreSQL to store all structured relational data |

---

## 🧩 Bonus (Stretch Goals)

| Feature                             | Tech Used                  |
|------------------------------------|----------------------------|
| ⚡ Real-time Chat                   | WebSocket / Socket.IO      |
| 💳 Online Payments                 | Razorpay or Stripe         |
| 🧠 AI Recommendations              | OpenAI integration         |

---

## ⚙️ Tech Stack

| Layer         | Technology Used                        |
|---------------|-----------------------------------------|
| **Frontend**  | React + Vite, Tailwind CSS              |
| **Backend**   | Node.js, Express.js                     |
| **Database**  | PostgreSQL (primary), MongoDB (optional)|
| **Auth**      | JWT, Google OAuth (Passport.js)         |
| **File Upload**| Cloudinary, Node.js                    |
| **Deployment**| Vercel/Netlify (Frontend), Render (Backend) |

---

## 🗓️ Weekly Timeline + Daily Plan

### ✅ **Week 1: Project Initialization & Authentication**

| Day | Task                                      |
|-----|-------------------------------------------|
| 1   | Create GitHub Repo & Project Board        |
| 2   | Initialize backend with Express.js        |
| 3   | Setup PostgreSQL DB schema: users table   |
| 4   | Implement email/password signup/login     |
| 5   | Add JWT authentication                    |
| 6   | Add Google OAuth using Passport.js        |
| 7   | Test all auth flows (Postman + UI)        |

---

### ✅ **Week 2: Item Listings (CRUD APIs + Frontend)**

| Day | Task                                      |
|-----|-------------------------------------------|
| 8   | Design DB schema: items table             |
| 9   | Create backend APIs for item CRUD         |
| 10  | Test APIs (GET, POST, PUT, DELETE)        |
| 11  | Initialize React app                      |
| 12  | Build UI for item listing form            |
| 13  | Build `ItemCard` component                |
| 14  | Integrate item listing with backend APIs  |

---

### ✅ **Week 3: Search, Filter & Image Uploads**

| Day | Task                                          |
|-----|-----------------------------------------------|
| 15  | Implement category/price filters              |
| 16  | Add search bar (frontend + backend)           |
| 17  | Connect Cloudinary for file uploads           |
| 18  | Update DB schema with media_url               |
| 19  | Enable image upload in listing form           |
| 20  | Display images in item cards                  |
| 21  | Testing & bug fixes (filters, uploads)        |

---

### ✅ **Week 4: Messaging System (Basic)**

| Day | Task                                           |
|-----|------------------------------------------------|
| 22  | DB schema: messages table                      |
| 23  | Create messaging APIs                          |
| 24  | Build basic chat UI                            |
| 25  | Connect frontend to messaging APIs             |
| 26  | Restrict messages to logged-in users           |
| 27  | Show chat history based on item ID             |
| 28  | Test full buyer-seller flow                    |

---

### ✅ **Week 5: Stretch Features + Final Touches**

| Day | Task                                             |
|-----|--------------------------------------------------|
| 29  | Add AI-based "Similar Items" using OpenAI        |
| 30  | Implement WebSocket-based real-time chat         |
| 31  | Integrate Razorpay or Stripe for payment         |
| 32  | Deploy backend to Render                         |
| 33  | Deploy frontend to Vercel                        |
| 34  | Test full end-to-end flow                        |
| 35  | Collect feedback from peers & mentors            |

---

### ✅ **Week 6: Final Submission + Concept Proof**

| Day | Task                                                   |
|-----|--------------------------------------------------------|
| 36  | Finalize Figma UI (Lo-Fi + Hi-Fi)                      |
| 37  | Proof of Work for GET, POST, PUT, Auth                 |
| 38  | Update Bruno + API templates                           |
| 39  | Add Dockerfile & test deployment                       |
| 40  | Add JEST test cases for API endpoints                  |
| 41  | Reflect on project learnings & usage metrics           |
| 42  | Submit concept proofs to Kalvium portal                |

---

## 🤝 Contribution

We welcome contributions!  
Please fork the repository, create a feature branch, and open a pull request.  
For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.

---

## 📬 Contact

📧 Email: **iamshivanggautam@gmail.com**

---
