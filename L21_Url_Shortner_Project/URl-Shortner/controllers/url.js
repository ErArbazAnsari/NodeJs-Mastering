const shortid = require("shortid");
const URL = require("../models/url");

const generateNewShortURL = async (req, res) => {
    const body = req.body;
    if (!body) return res.status(400).json({ error: "url is required" });

    const shortId = shortid();

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: [],
    });
    return res.status(201).json({ id: shortId });
};

const getAnalytics = async (req, res) => {
    const shortId = req.params.id;
    const result = await URL.findOne({ shortId });
    return res.status(200).json({
        totalClick: result.visitHistory.length,
        analytics: result.visitHistory,
    });
};

module.exports = {
    generateNewShortURL,
    getAnalytics,
};
