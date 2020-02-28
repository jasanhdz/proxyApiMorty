const express = require("express");
const { config } = require("../config");
const axios = require("axios");

function mortyApi(app) {
  const router = express.Router();
  app.use("/api/morty", router);

  router.get("/:page", async function(req, res, next) {
    const { page } = req.params;
    try {
      const characters = await axios({
        url: `${config.url}/api/character/?page=${page}`,
        method: "get"
      });
      console.log(characters);
      res.status(200).json({
        info: characters.data.info,
        results: characters.data.results
      });
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = mortyApi;
