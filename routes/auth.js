const express = require('express');
const { createUser, loginUser, getUser } = require('../controllers/auth');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', createUser)

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', loginUser);

// ROUTE 3: Get loggedin User Details using: GET "/api/auth/getuser". Login required
router.get('/getuser', fetchuser, getUser)

module.exports = router