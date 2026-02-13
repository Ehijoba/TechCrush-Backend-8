# 🔗 TechCrush Task 15: Modular URL Shortener

A high-performance, file-based URL shortener engineered by Group 15 of TechCrush Africa's cohort 5

##  Key Features
* **Custom ID Generation:** Converts long URLs into short codes.
* **Dynamic Routing:** Instantly redirects short codes to the original mapped URL.
* **Analytics Tracking:** Records click frequency for every generated link.
* **Data Persistence:** Reads and writes securely to a `urls.json` mock database.
* **Input Validation:** Prevents invalid string formatting on the server side.

##  Installation & Setup

**Step 1: Clone the repository**
git clone [https://github.com/Ehijoba/url-shortener-task15.git](https://github.com/Ehijoba/url-shortener-task15.git)
cd url-shortener-task15

Step 2: Install core dependencies
npm install

Step 3: Boot the server
npm start



## API Endpoints
1. GET / : Renders the primary URL submission form.
2. POST /shorten : Accepts { longUrl }, validates, generates ID, and updates DB.
3.GET /:id : Queries the DB for the ID, increments clicks, and triggers HTTP Redirect.

## Engineering Team (Group 15)

Core & Management: Simeon Alende (Lead), Emmanuel
Data Engineering: Sodeeq, Micheal, Babatunde
Backend Logic: Sampson, Kenean, Smart
Frontend UI: Olaoluwaseyi, Niamandy, Praise, Sadeleke
QA & Analytics: Hamidu, Temitayo

## Developed for the TechCrush Backend Engineering Cohort - Feb 2026.
