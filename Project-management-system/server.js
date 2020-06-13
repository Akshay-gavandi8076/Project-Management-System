var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/project-management-system-DB'

mongoose
.connect(mongoURI, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true})
.then(() => console.log("MongoDB database connection established successfully"))
.catch(err => console.log(err))

var Users = require('./routes/Users');

app.use('/users', Users);

const projectsRouter = require('./routes/projects');
const teamsRouter = require('./routes/teams');

app.use('/projects', projectsRouter);
app.use('/teams', teamsRouter);

app.listen(port, () => {
    console.log("Server is running on port: " +port)
})