var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require("bcryptjs"); // run npm install bcryptjs in client and server
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken"); // run  npm install jwt in server
const path = require("path");
// const fs = require("fs").promises;
// const sharp = require("sharp");

/* POST new user added to DB works for postman /api/register*/
router.post("/register", async (req, res) => {
	let { name, password, email } = req.body;

	let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

	try {
		let sql = `
          INSERT INTO users (name, password, email)
          VALUES ('${name}', '${hashedPassword}', '${email}')
      `;
		console.log("testing if it insert:", sql);

		await db(sql);
		res.send({
			message: "Success! You created a new account.",
		});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

// router.post("/register", async (req, res) => {
// 	let { name, password, email } = req.body;

// 	// generate a random number between 1 and 8
// 	const randomNum = Math.floor(Math.random() * 8) + 1;

// 	let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

// 	try {
// 		// get the file name of a random avatar image
// 		const avatarFileName = `av${randomNum}.png`;

// 		// get the full path of the avatar image file
// 		const avatarPath = path.join(__dirname, "../public/images", avatarFileName);

// 		// read the avatar image file as binary data
// 		const avatarData = await fs.readFile(avatarPath);

// 		// convert the binary data to base64-encoded string
// 		const avatarBase64 = avatarData.toString("base64");

// 		let sql = `
//       INSERT INTO users (name, password, email, avatar)
//       VALUES ('${name}', '${hashedPassword}', '${email}', 'data:image/jpeg;base64,${avatarBase64}')
//     `;
// 		console.log("testing if it insert:", sql);

// 		await db(sql);
// 		res.send({
// 			message: "Success! You created a new account.",
// 		});
// 	} catch (err) {
// 		res.status(500).send({ error: err.message });
// 	}
// });
// router.post("/register", async (req, res) => {
// 	let { name, password, email } = req.body;

// 	// generate a random number between 1 and 8
// 	const randomNum = Math.floor(Math.random() * 8) + 1;

// 	let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

// 	try {
// 		// get the file name of a random avatar image
// 		const avatarFileName = `av${randomNum}.png`;

// 		// get the full path of the avatar image file
// 		const avatarPath = path.join(__dirname, "../public/images", avatarFileName);

// 		// read the avatar image file as binary data
// 		const avatarData = await fs.readFile(avatarPath);

// 		// convert the binary data to base64-encoded string
// 		const avatarBase64 = avatarData.toString("base64");

// 		// Load the image using Sharp
// 		const image = sharp(avatarData);

// 		// Resize the image to a maximum width of 500 pixels
// 		const resizedImage = image.resize({ width: 500 });

// 		// Compress the image with a quality of 80%
// 		const compressedImage = resizedImage.jpeg({ quality: 20 });

// 		// Get the compressed image data as a buffer
// 		const avatar = await compressedImage.toBuffer();

// 		let sql = `
//       INSERT INTO users (name, password, email, avatar)
//       VALUES ('${name}', '${hashedPassword}', '${email}', 'data:image/jpeg;base64,${avatar.toString(
// 			"base64"
// 		)}')
//     `;

// 		console.log("testing if it insert:", sql);

// 		await db(sql);
// 		res.send({
// 			message: "Success! You created a new account.",
// 		});
// 	} catch (err) {
// 		res.status(500).send({ error: err.message });
// 	}
// });
//POST- log in user ( for POSTMAN /api/login)
router.post("/login", async (req, res) => {
	let { emailLogin, passwordLogin } = req.body;

	try {
		let results = await db(`SELECT * FROM users WHERE email = '${emailLogin}'`);
		if (results.data.length === 0) {
			//email not found
			res.status(401).send({ error: "Login failed" });
		} else {
			let user = results.data[0]; //the user's row/record from the db
			let passwordsEqual = await bcrypt.compare(passwordLogin, user.password);
			if (passwordsEqual) {
				//passwords match
				let payload = { id: user.id };
				//create a token containing the ID
				let token = jwt.sign(payload, SECRET_KEY);
				//also return user (without password)
				delete user.password;
				res.send({
					message: "Login succeeded",
					token: token,
					user: user,
				});
			} else {
				//password doesn't match
				res.status(401).send("Login failed");
			}
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

module.exports = router;
