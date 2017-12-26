const express = require('express');
const router = express.Router();
const collection = require('../source/silicon-valley.json');
const episodes = collection['_embedded'].episodes;
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', (req, res) => {
    let result = episodes;

    if (typeof req.query.season !== 'undefined') {
        console.log('Season parameter: ', req.query.season);
        result = episodes.filter((val) => val.season == req.query.season);
    }

    res.send(result);
});

module.exports = router;