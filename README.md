About-
This is the backend for a quiz application built with the MERN stack (MongoDB, Express.js, Node.js). 
It integrates with an external API to fetch quiz questions and uses Socket.IO for real-time quiz interactions. 
The backend handles user authentication, quiz management, and real-time communication for live quiz sessions.

=>Features
-User Authentication: Secure signup, login, and logout using JWT and bcrypt.
-Quiz Management: Fetches questions from an external API and stores user quiz results.
-Real-Time Interaction: Supports live quiz sessions and score updates via Socket.IO.
-RESTful API: Endpoints for user profiles, quiz history, and question retrieval.
-Environment Configuration: Uses dotenv for managing environment variables.
-Logging: HTTP request logging with morgan for debugging.
-CORS Support: Enables cross-origin requests for frontend integration.

=>Technologies
-Node.js
-Express.js: API framework
-MongoDB/Mongoose: Database and ODM
-Socket.IO: Real-time communication
-Axios: HTTP requests to external APIs
-JWT: Token-based authentication
-bcryptjs: Password hashing
-dotenv: Environment variable management
-morgan: Request logging
-cors: Cross-origin resource sharing
-cookie-parser: Cookie handling

=>Prerequisites
-Node.js (v18.x)
-MongoDB (local or cloud, e.g., MongoDB Atlas)
-An API key for an external quiz API (e.g., Open Trivia Database)
