const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

//to make sure that the token is still there
function ensureUserLoggedIn(req, res, next) {
  let token = _getToken(req);

  try {
    jwt.verify(token, SECRET_KEY);
    //if we get here, it means that a valid token was passed
    next(); // next is the router get user by id
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
}

//for example if we want to get access to the profile
function ensureSameUser(req, res, next) {
  let token = _getToken(req);

  try {
    // Throws error on invalid/missing token
    let payload = jwt.verify(token, SECRET_KEY);
    // if we get here, it means that a valid token was passed
    console.log("what are you showing here" + payload);
    if (payload.id === Number(req.params.id)) {
      next();
    } else {
      res.status(403).send({ error: "Forbidden" });
    }
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
}

function _getToken(req) {
  //return '' if header is not found
  if (!("authorization" in req.headers)) {
    return "";
  }

  // Split header into 'Bearer' and token
  let authHeader = req.headers["authorization"];
  let [str, token] = authHeader.split(" ");

  return str === "Bearer" ? token : "";
}

module.exports = {
  ensureUserLoggedIn,
  ensureSameUser,
};
