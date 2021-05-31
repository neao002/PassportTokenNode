const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// sign up
router.post("/create", (req, res) => {
  // save a user
  const newUser = new User(req.body);
  newUser.save((err, doc) => {
    if (err) throw err.message;
    res.json(doc);
  });
});

// sign in
router.post("/signin", (req, res) => {
  //get token
  const user = req.body;
  const token = jwt.sign({ user }, "secretKey", { expiresIn: "30s" });

  const { email, password, id } = req.body;
  User.findOne({ email, password }, (err, data) => {
    res.json(data);
    console.log(data);
  });
});

// Test queries
router.get("/test/queries", (req, res) => {
  // find all users
  // User.find((err, users)=> {
  //     res.json(users);
  // })
  // find the user called "Jose"
  // method 1
  // User.findOne({username: 'Jose'},(err, users)=> {
  //     res.json(users);
  // })
  // method 2
  // User.find((err, users)=> {
  //     res.json(users);
  // }).where('username').equals('Jose')

  // find all user's email only
  // User.find((err, users)=> {
  //     res.json(users);
  // }).select(['email', 'password'])

  //find all users ascending order and only show 3 users
  User.find((err, users) => {
    res.json(users);
  })
    .sort({ _id: -1 })
    .limit(3);
});

module.exports = router;
