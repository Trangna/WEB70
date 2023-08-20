function checkAPIKey(req, res, next) {
  const apiKey = req.headers.apiKey;

  if (!apiKey) {
    res.send("Missing apiKey");
    return;
  }
  next();
}

module.exports = checkAPIKey();
