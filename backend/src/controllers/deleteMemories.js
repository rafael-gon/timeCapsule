const Memories = require('../models/memoriesData');

module.exports = {
  async delete(req, res) {
    const { id } = req.params;
    const deletedMemories = await Memories.findByIdAndDelete({ _id:id })

    return res.json(deletedMemories);
  },
};
