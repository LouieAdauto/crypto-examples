// Importing modules
const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.get('/', async (req, res, next)=> {
    res
	.status(200)
	.json({
	success: true,
	data: {	
	},
	});
    return res
})

// Handling post request
app.post("/login", async (req, res, next) => {
let { email, password } = req.body;

let existingUser;
try {
	existingUser = await User.findOne({ email: email });
} catch {
	const error = new Error("Error! Something went wrong.");
	return next(error);
}
if (!existingUser || existingUser.password != password) {
	const error = Error("Wrong details please check at once");
	return next(error);
}
let token;
try {
	//Creating jwt token
	token = jwt.sign(
	{ userId: existingUser.id, email: existingUser.email },
	"secretkeyappearshere",
	{ expiresIn: "1h" }
	);
} catch (err) {
	console.log(err);
	const error = new Error("Error! Something went wrong.");
	return next(error);
}

res
	.status(200)
	.json({
	success: true,
	data: {
		userId: existingUser.id,
		email: existingUser.email,
		token: token,
	},
	});
});

// Handling post request
app.post("/gettoken", async (req, res, next) => {
const { username, password } = req.body;

let token;
try {
	token = await jwt.sign(
	{ password, username},
	"secretkeyappearshere",
	{ expiresIn: "1h" }
	);
} catch (err) {
	const error = await new Error("Error! Something went wrong.");
	return next(error);
}
res
	.status(201)
	.json({
	success: true,
	data: {token},
	});    
});
app.listen("4000", () => {
	console.log("Server is listening on port 4000");
	});
