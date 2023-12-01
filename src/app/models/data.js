import mongoose, {Schema} from "mongoose";

const dataSchema = new Schema(
    {
        title: String,
        desc: String
    },
    {
        timestamps: true
    }
);

const Data = mongoose.model.Data || mongoose.model('Data', dataSchema);

export default Data;