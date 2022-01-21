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

 #### Functions of each endpoints

 - register: This is a post method and accepts name, email, password as input and make a new entry wrt new email.
 ```
 request 
 {
	 { "name" : "Aashima",
	  "email":"kansalashima9@gmail.com", 
	  "password": "secret" }
 }
 ```
 
```
response 
retruns the access token
```
 - login: This is a post method which takes in username and password and returns the access token of the particular user.
 ```
 request 
 {
	 username:"expname"
	 password:""
 }
 ```
 ```
 response
 {
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5MzYxZTk0Y2UyYTA2MDU0ZDdjYTQiLCJpYXQiOjE2NDI2ODM1NDUsImV4cCI6MTY0MjY4Mzg0NX0.-OETNlm39dJaKNREfEvk9Dpe9wLo55F8y5WmGnOMb08"
 }
 ```

** All the below request will need the access token **

 - addquestion/ :id : This is a post method and used to add new question it take input the access <token>, user id and question details
 ```
 { 	   
     "title": "laptop", 
	 "detail": "Best laptop in india",
	 "tags": ["hp", "laptop","mac"]
 }
 ```
```
{ 
	"user":
	 { 
		 "title": "laptop",
		 "detail": "Best laptop in india",
		 "tags": [ "hp", "laptop", "mac" ],
		 "userid": "61e94c5112d205e2411a15c0",
		 "upvote": 0,
		 "downvote": 0,
		 "_id": "61e95a6e96ed962fbb1d444a",
		 "__v": 0 
	 } 
 }

```

- addanswer: This is a post method and takes input access token, user id, question id and adds the answer for the respective question.

```
request format
{ 
	"description": "samsung"
}
```
```
response {
 "user": 
	{ 
		"description": "samsung",
		"upvote": 0,
		"downvote": 0,
		"accepted": false,
		"queid": "61e959ab6b26d6365f655a01",
		"userid": "61e9361e94ce2a06054d7ca4",
		"_id": "61e95cb854d6dfde61b39865",
		"__v": 0 
	}
}
```
- /vote : This is put method which is used to upvote or downvote both questions and answers. It takes input question or answer id and type of vote and proceeds further on the based of the input
```
request:
{ 
	"id": "61e959ab6b26d6365f655a01",
	"type": "ques",
	"voteType": "up"
 }
```
```
response:
{ 
	"_id": "61e959ab6b26d6365f655a01",
	"title": "smartphone",
	"detail": "Best mobile in india",
	"tags": [ "mobile", "iphone", "android", "oneplus" ],
	"userid": "61e94c5112d205e2411a15c0",
	"upvote": 1,
	"downvote": 0,
	"__v": 0 
}
```
- /updatequestion/:id : This is put method which is used to do changes in a already existing question. It takes input as the question id and updates the question
```
request:
{ 
	"title":"food",
	"detail":"what is your favourite dish?",
	"tags":["foodie","food","fav"] 
}

```
```
response:
{ 
	"_id": "61e94bb412d205e2411a15bd",
	"title": "food",
	"detail": "what is your favourite dish?",
	"tags": [ "foodie", "food", "fav" ],
	"userid": "61e9361e94ce2a06054d7ca4",
	"upvote": 0,
	"downvote": 0,
	"__v": 0
}
```
- /getque/:id : This is a get method which take input the question id and returns the question details.
```
request:
 /getque/<question-id>
```
```
response:
{ 
	"_id": "61e94bb412d205e2411a15bd",
	"title": "food",
	"detail": "what is your favourite dish?",
	"tags": [ "foodie", "food", "fav" ],
	"userid": "61e9361e94ce2a06054d7ca4",
	"upvote": 0,
	"downvote": 0,
	"__v": 0
}
```
- /showAllanswers/:id : This is a get method take input the question id and returns all the answer associated with it.
```
request:
/showAllanswer/<question-id>
```
```
response:
{
    "question": {
        "_id": "61e95a6e96ed962fbb1d444a",
        "title": "laptop",
        "detail": "Best laptop in india",
        "tags": [
            "hp",
            "laptop",
            "mac"
        ],
        "userid": "61e94c5112d205e2411a15c0",
        "upvote": 0,
        "downvote": 0,
        "__v": 0
    },
    "answers": [
        {
            "_id": "61e979fd289c0a7588391776",
            "description": "Macos",
            "upvote": 0,
            "downvote": 0,
            "accepted": true,
            "queid": "61e95a6e96ed962fbb1d444a",
            "userid": "61e9361e94ce2a06054d7ca4",
            "__v": 0
        }
    ]
}
```
- /getall/:tag: This is a get method which takes in the tag and return all the questions having the same tag.
```
request:
 getall/<tag>
```
```
response:
[
    {
        "_id": "61e959ab6b26d6365f655a01",
        "title": "smartphone",
        "detail": "Best mobile in india",
        "tags": [
            "mobile",
            "iphone",
            "android",
            "oneplus"
        ],
        "userid": "61e94c5112d205e2411a15c0",
        "upvote": 1,
        "downvote": 0,
        "__v": 0
    }
]
```
- /getallquebyuser/:id : This is a get method which takes in he user id and returns all the question posted by the user.
```
 request:
 getallquesbyuser/<user-id>
```
```
response:
[
    {
        "_id": "61e9370494ce2a06054d7ca6",
        "title": "DS algo",
        "detail": "what is time complexity of binary search?",
        "tags": [
            "algorithms",
            "binary search",
            "DS",
            "divide and conquer"
        ],
        "userid": "61e9361e94ce2a06054d7ca4",
        "upvote": 0,
        "downvote": 0,
        "createdAt": "2022-01-20T10:18:44.899Z",
        "updatedAt": "2022-01-20T10:18:44.899Z",
        "__v": 0
    },
    {
        "_id": "61e94b8412d205e2411a15bb",
        "title": "college name",
        "detail": "what is your college name?",
        "tags": [
            "college",
            "name",
            "cse"
        ],
        "userid": "61e9361e94ce2a06054d7ca4",
        "upvote": 0,
        "downvote": 0,
        "__v": 0
    },
    {
        "_id": "61e94bb412d205e2411a15bd",
        "title": "food",
        "detail": "what is your favourite dish?",
        "tags": [
            "foodie",
            "food",
            "fav"
        ],
        "userid": "61e9361e94ce2a06054d7ca4",
        "upvote": 0,
        "downvote": 0,
        "__v": 0
    }
]
```
- /pendinganswers/:id : This is a get method which takes in the user id and returns the list of the answers which are given by any other user and are yet pending for the approval. 
```
request:
 /pendinganswers/<user-id>
```
```
response:
[
    [
        {
            "_id": "61e94cad340bee65e899b632",
            "description": "chandigarh university",
            "upvote": 0,
            "downvote": 0,
            "accepted": false,
            "queid": "61e94b8412d205e2411a15bb",
            "userid": "61e94c5112d205e2411a15c0",
            "__v": 0
        }
    ]
]
```

-  /acceptanswer/:ansid : This is a put method which takes in the answer id and updates it as accepted.
```
request:
	 /acceptanswer/<answer-id>
```
 
```
response:
{ 
	"_id": "61e95cb854d6dfde61b39865",
	"description": "samsung",
	"upvote": 0,
	"downvote": 0,
	"accepted": true,
	"queid": "61e959ab6b26d6365f655a01",
	"userid": "61e9361e94ce2a06054d7ca4",
	"__v": 0
}
```
- /allqueans: This is a get method which returns all question and related accepted answers.
```
request:
 /allqueans
```
```
response:
{
    "que": [
        {
            "_id": "61e9370494ce2a06054d7ca6",
            "title": "DS algo",
            "detail": "what is time complexity of binary search?",
            "tags": [
                "algorithms",
                "binary search",
                "DS",
                "divide and conquer"
            ],
            "userid": "61e9361e94ce2a06054d7ca4",
            "upvote": 0,
            "downvote": 0,
            "createdAt": "2022-01-20T10:18:44.899Z",
            "updatedAt": "2022-01-20T10:18:44.899Z",
            "__v": 0
        },
        {
            "_id": "61e94b8412d205e2411a15bb",
            "title": "college name",
            "detail": "what is your college name?",
            "tags": [
                "college",
                "name",
                "cse"
            ],
            "userid": "61e9361e94ce2a06054d7ca4",
            "upvote": 0,
            "downvote": 0,
            "__v": 0
        },
        {
            "_id": "61e94bb412d205e2411a15bd",
            "title": "food",
            "detail": "what is your favourite dish?",
            "tags": [
                "foodie",
                "food",
                "fav"
            ],
            "userid": "61e9361e94ce2a06054d7ca4",
            "upvote": 0,
            "downvote": 0,
            "__v": 0
        },
        {
            "_id": "61e959ab6b26d6365f655a01",
            "title": "smartphone",
            "detail": "Best mobile in india",
            "tags": [
                "mobile",
                "iphone",
                "android",
                "oneplus"
            ],
            "userid": "61e94c5112d205e2411a15c0",
            "upvote": 1,
            "downvote": 0,
            "__v": 0
        },
        {
            "_id": "61e95a6e96ed962fbb1d444a",
            "title": "laptop",
            "detail": "Best laptop in india",
            "tags": [
                "hp",
                "laptop",
                "mac"
            ],
            "userid": "61e94c5112d205e2411a15c0",
            "upvote": 0,
            "downvote": 0,
            "__v": 0
        }
    ],
    "answers": [
        [
            {
                "_id": "61e94ccd340bee65e899b634",
                "description": "chandigarh university",
                "upvote": 0,
                "downvote": 0,
                "accepted": true,
                "queid": "61e94bb412d205e2411a15bd",
                "userid": "61e94c5112d205e2411a15c0",
                "__v": 0
            }
        ],
        [
            {
                "_id": "61e95cb854d6dfde61b39865",
                "description": "samsung",
                "upvote": 0,
                "downvote": 0,
                "accepted": true,
                "queid": "61e959ab6b26d6365f655a01",
                "userid": "61e9361e94ce2a06054d7ca4",
                "__v": 0
            }
        ],
        [
            {
                "_id": "61e979fd289c0a7588391776",
                "description": "Macos",
                "upvote": 0,
                "downvote": 0,
                "accepted": true,
                "queid": "61e95a6e96ed962fbb1d444a",
                "userid": "61e9361e94ce2a06054d7ca4",
                "__v": 0
            }
        ]
    ]
}
```


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

