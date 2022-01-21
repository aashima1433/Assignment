# Welcome to StackOverflow Backend!

This project is a clone of Stackoverflow and work similarly as the real one with it's base functionalities. 


# Dependencies 


- NodeJs: 14.16+
- "bcrypt": "^5.0.1"
-  "dotenv": "^14.2.0"
-  "esm": "^3.2.25",
- "express": "^4.17.2"
-  "joi": "^17.5.0"
-  "jsonwebtoken": "^8.5.1"
-  "mongoose": "^6.1.7"
-  "nodemon": "^2.0.15"
 

## Steps to run the project

- Clone the repo into your local system.
- Run npm install command
- create a .env file in the directory and add PORT, DB_URL and JWT secret key and in DB_URL put some string like this
-` mongodb+srv://</username>:</password>@cluster0.bkd1v.mongodb.net/stackoverflow?retryWrites=true&w=majority` 
- Run command  npm run dev
- Goto your local server

### API Endpoints

 1. /register
 2. /login
 3. /addquestion/:id
 4. /addanswer/:id/:userid
 5. /vote
 6. /updatequestion/:id
 7. /getque/:id
 8. /showAllanswers/:id
 9. /getall/:tag
 10. /getallquebyuser/:id
 11. /pendinganswers/:id
 12. /allquesans
 13. /acceptanswer/:ansid