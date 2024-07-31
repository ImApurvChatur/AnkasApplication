import timezone from 'moment-timezone';


const defaultSchemaUtility = {
  aImage: { type: String, trim: true },
  aTitle: { type: String, trim: true },
  aSubtitle: { type: String, trim: true },
  aDescription: { type: String, trim: true },
  aDetail: { type: String, trim: true },
  aStatus: { type: Boolean, default: true },
  aSlug: { type: String, trim: true },

  bCreatedAt: { type: Date, default: timezone(Date.now()).tz("Asia/Kolkata") },
  bUpdatedAt: { type: Date },
}

export default defaultSchemaUtility;
