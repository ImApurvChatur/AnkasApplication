import mongoose from 'mongoose';
import defaultSchemaUtility from '../../cUtility/bDefaultSchemaUtility';


const schema = new mongoose.Schema({
  ...defaultSchemaUtility
})

export const BaseModel = mongoose.model("BaseModel", schema);
