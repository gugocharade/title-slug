const MurmurHash3 = require('imurmurhash');

module.exports = (title) => {
  return `${title.trim().toLowerCase().replace(/ /g, '-')}-${new MurmurHash3(
    title + Date.now() + Math.random()
  )
    .result()
    .toString(32)
    .substr(-6)}`;
};
