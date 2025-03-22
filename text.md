- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 3005
- Write request handlers for /test , /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde ( ^ vs ~ )

- initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, / , /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on Postman
- Explore routing and use of ?, +, (), \* in the routes
- Use of regex in routes /a/, /.\*fly$/
- Reading the query params in the routes
- Reading the dynamic routes
- Multiple Route Handlers – Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5);
- What is a Middleware? Why do we need this?
- How Express.js basically handles requests behind the scenes
- Difference app.use and app.all
- Write a dummy middleware for admin
- Write a dummy middleware for all user routes, except /user/login
- Error handling using app.use('/', (err, req, res, next) => {});

- Create a cluster on MongoDb Official Website(Mongo Atlas)
- Install Mongoose library
- Connect Application to Database(not Cluster)
- Call the connectDB function and connect to database before starting application on 7777
- Create a User Schema & User Model

- Create POST signup/ API to add data to database
- Push some documents using API calls From Postman
- Error handling using try catch

- JS Object vs JSON difference?
- Add the express.json() middleware to app
- Make /signup API dynamic to receive data from Postman/Client
- Multiple mongo documents to one on Model.findone - on what basis does it get that one document?
- API - /user /feed added

- A DELETE /user API added
- Find difference between PATCH & PUT?

- API PATCH - Update a user added
- Explore the Mongoose Documentation on API Model Methods further?
- What are options in a Model.findOneAndUpdate method, explore more?
- API PATCH - Update a user added with emailId?
