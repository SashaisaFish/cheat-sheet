import { Entry } from "./entry.js";
import { h4Tag } from "./h4Tag.js";
import { pTag } from "./pTag.js";
import { aTag } from "./aTag.js";
import { imgTag } from "./imgTag.js";
// const { h4Tag, pTag, aTag, imgTag } = require("./entryTags.js");

Entry.hasMany(h4Tag);
h4Tag.belongsTo(Entry);

Entry.hasMany(pTag);
pTag.belongsTo(Entry);

Entry.hasMany(aTag);
aTag.belongsTo(Entry);

Entry.hasMany(imgTag);
imgTag.belongsTo(Entry);

export { Entry, h4Tag, pTag, aTag, imgTag };
