const { Resolver } = require("@parcel/plugin");

module.exports = new Resolver({
  async resolve({dependency, options, filePath}) {
    if (filePath.startsWith("{{")) {
      return { isExcluded: true };
    }

    return null; // let the other resolvers handle this
  }
});
