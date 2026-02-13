#  TechCrush Task 15: Modular URL Shortener 

A high-performance, file-based URL shortener engineered by **Group 15** of TechCrush Africa's cohort. This project demonstrates modular backend architecture, strict MVC patterns, and file system (`fs`) database management without relying on external database clusters.

## Key Features
- **Custom ID Generation:** Converts long URLs into short codes.
- **Dynamic Routing:** Instantly redirects short codes to the original mapped URL.
- **Analytics Tracking:** Records click frequency for every generated link.
- **Data Persistence:** Reads and writes securely to a `urls.json` mock database.
- **Input Validation:** Prevents invalid string formatting on the server side.

##  System Architecture (MVC)
To ensure zero merge conflicts among 14 developers, the codebase is strictly modularized:
- `/models`: Handles `fs` logic to parse and stringify `urls.json`.
- `/controllers`: The core engine processing requests and serving responses.
- `/routes`: Express router handling traffic distribution.
- `/utils`: Standalone helper functions (ID generators, validators).
- `/views`: EJS templates for the frontend UI.
- `/public`: Static CSS assets.

##  Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ehijoba/url-shortener-task15.git](https://github.com/Ehijoba/url-shortener-task15.git)
   cd url-shortener-task15
2. **Install core dependencies:**
```Bash
   npm install
3. ** Boot the server:**
```Bash
   npm start
   The application will initialize on http://localhost:3000


 API Endpoints
   Method,Endpoint,Description
GET,/,Renders the primary URL submission form.
POST,/shorten,"Accepts { longUrl }, validates, generates ID, and updates DB."
GET,/:id,"Queries the DB for the ID, increments clicks, and triggers HTTP Redirect."

 Engineering Team (Group 15)
Functional Area,Developers
Core & Management,"Simeon Alende (Lead), Emmanuel"
Data Engineering,"Sodeeq, Micheal, Babatunde"
Backend Logic,"Sampson, Kene, Smart"
Frontend UI,"Olaoluwaseyi, Niamandy, Praise, Sadeleke"
QA & Analytics,"Hamidu, Temitayo"

Developed for the TechCrush Backend Engineering Cohort - Feb 2026.