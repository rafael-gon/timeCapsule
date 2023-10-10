const Memories = require('../models/memoriesData');
const moment = require("moment");

module.exports = {
  async create(req, res) {
    const { title, description } = req.body;

    if (!title || !description){
      return res.status(400).json({ 
        error: "400 - Bad Request",
        mensage: "missing some filds",
        jus4fun: "https://http.cat/400"
      });
    }

    const newMemories = await Memories.create({
      title,
      description,
      date: moment().format()
    });

    return res.json(newMemories);
  },
};
