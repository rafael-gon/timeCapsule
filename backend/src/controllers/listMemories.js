const Memories = require('../models/memoriesData'); // Correto

module.exports = {
  async read(request, response) {
    const memoriesList = await Memories.find();
    return response.json(memoriesList);
  },
  async readOne(request, response) {
    const { id } = request.params;
    const memories = await Memories.findById(id);
    return response.json(memories);
  },
};
