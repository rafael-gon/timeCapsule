const Memories = require('../models/memoriesData'); // Correto

module.exports = {
  async read(request, response) {
    const memoriesList = await Memories.find();
    return response.json(memoriesList);
  },
};
