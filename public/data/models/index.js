import {Entry} from './entry.model'
import {h4Tag, pTag, aTag, imgTag} from './entryTags.model'

Entry.hasMany(h4Tag);
h4Tag.belongsTo(Entry);

Entry.hasMany(pTag);
pTag.belongsTo(Entry);

Entry.hasMany(aTag);
aTag.belongsTo(Entry);

Entry.hasMany(imgTag);
imgTag.belongsTo(Entry);

export {Entry, h4Tag, pTag, aTag, imgTag}