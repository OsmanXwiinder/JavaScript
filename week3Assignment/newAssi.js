const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {}; // Clears all stored user requests
}, 1000);

function rateLimitMiddleware(req, res, next) {
    const userId = req.header("user-id"); // Correct way to access headers

    if (!userId) {
        return res.status(400).json({ msg: "Missing 'user-id' in headers" });
    }

    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 0;
    }

    if (numberOfRequestsForUser[userId] >= 5) {
        return res.status(429).json({ msg: "Rate limit exceeded. Try again later." });
    }

    numberOfRequestsForUser[userId]++; // Increment request count
    next(); // Proceed to the next middleware/route
}


app.use(rateLimitMiddleware)
app.use(express.json())

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    // let userId = req.header.userId
  res.status(200).json({ msg: 'created dummy user' });
});



app.listen(3000)