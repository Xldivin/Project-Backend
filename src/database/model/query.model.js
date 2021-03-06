//import { string } from "@hapi/joi";
import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const Query = mongoose.model('Query', QuerySchema);
export default Query;