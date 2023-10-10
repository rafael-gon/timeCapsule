const Memories = require('../models/memoriesData');

module.exports = {
  async update(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    const memorie = await Memories.findOne({ _id: id })

    if (title) {
      memorie.title = title;
      await memorie.save();
    }
    
    if (description) {
      memorie.description = description;
      await memorie.save();
    }

    return res.json(memorie);

  },
};
