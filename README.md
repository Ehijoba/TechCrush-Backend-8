#  TechCrush Task 15: Modular URL Shortener 

A high-performance, file-based URL shortener engineered by Group 15 of TechCrush Africa's cohort 5
This project demonstrates modular backend architecture, strict MVC patterns, and file system (`fs`) database management without relying on external database clusters.

## Key Features
- [cite_start]**Custom ID Generation:** Converts long URLs into short codes[cite: 116].
- [cite_start]**Dynamic Routing:** Instantly redirects short codes to the original mapped URL[cite: 118].
- **Analytics Tracking:** Records click frequency for every generated link.
- [cite_start]**Data Persistence:** Reads and writes securely to a `urls.json` mock database[cite: 117].
- **Input Validation:** Prevents invalid string formatting on the server side.

##  System Architecture 
[cite_start]To ensure zero merge conflicts among 14 developers, the codebase is strictly modularized[cite: 4, 6]:
- `/models`: Handles `fs` logic to parse and stringify `urls.json`.
- `/controllers`: The core engine processing requests and serving responses.
- `/routes`: Express router handling traffic distribution.
- `/utils`: Standalone helper functions (ID generators, validators).
- `/views`: EJS templates for the frontend UI.
- `/public`: Static CSS assets.

##  Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/Ehijoba/TechCrush-Backend-8>
   cd url-shortener-task15