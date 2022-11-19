import { Entry } from "./entry.js";
import { H4Tag } from "./h4Tag.js";
import { PTag } from "./pTag.js";
import { ATag } from "./aTag.js";
import { ImgTag } from "./imgTag.js";

Entry.hasMany(H4Tag, {
	foreignKey: "parentId",
	sourceKey: "elementId",
});
H4Tag.belongsTo(Entry);

Entry.hasMany(PTag, {
	foreignKey: "parentId",
	sourceKey: "elementId",
});
PTag.belongsTo(Entry);

Entry.hasMany(ATag, {
	foreignKey: "parentId",
	sourceKey: "elementId",
});
ATag.belongsTo(Entry);

Entry.hasMany(ImgTag, {
	foreignKey: "parentId",
	sourceKey: "elementId",
});
ImgTag.belongsTo(Entry);

export { Entry, H4Tag, PTag, ATag, ImgTag };
