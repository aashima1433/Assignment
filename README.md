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
- Create a .env file in the directory and add PORT, DB_URL and JWT secret key and in DB_URL put some string like this
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

 # How Data is being stored

Users
| field-name   | data-type    | description                   |
| :---         |     :---:    |                           ---:|
| _id          |  string      | it stores id of the user      |
| name         | string       | it stores name of the user    |
| email-id     | string       | it stores email of the user   |
| password     | string       | it stores password of the user|

Questions
| field-name   | data-type      | description                                        |
| :---         |     :---:      |                                                ---:|
| _id          | string         | it stores the id of the question                   |
| title        | string         | it stores the title of the question                |
| detail       | string         | it stores the details of the question              |
| tags         | array          | it stores the tags of the question                 |
| userid       | string         | it stores the userid of user who asked the question|
| upvote       | int            | it stores the upvotes of the question              |
| downvote     | int            | it stores the downvotes of the question            |

Answers
| field-name   | data-type      | description                                                   |
| :---         |     :---:      |                                                           ---:|
| _id          | string         | it stores the id of the answer                                |
| description  | string         | it stores the description of the answer                       |
| queid        | string         | it stores the question id of the question whose answer is this|
| userid       | string         | it stores the userid of user who answered the question        |
| upvote       | int            | it stores the upvotes of the answer                           |
| downvote     | int            | it stores the downvotes of the answer                         |
| accepted     | boolean        | it stores whether the naswer is accepted or not               |
