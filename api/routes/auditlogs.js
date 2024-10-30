const express = require("express");
const { Query } = require("mongoose");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
})
})


module.exports = router;