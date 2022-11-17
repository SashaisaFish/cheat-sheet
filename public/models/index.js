const { Entry } = require("./entry.model.js");
const { h4Tag, pTag, aTag, imgTag } = require("./entryTags.model.js");

Entry.hasMany(h4Tag);
h4Tag.belongsTo(Entry);

Entry.hasMany(pTag);
pTag.belongsTo(Entry);

Entry.hasMany(aTag);
aTag.belongsTo(Entry);

Entry.hasMany(imgTag);
imgTag.belongsTo(Entry);

module.exports = [Entry, h4Tag, pTag, aTag, imgTag];
