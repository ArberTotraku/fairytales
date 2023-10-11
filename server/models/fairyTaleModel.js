import mongoose,{Schema,model} from "mongoose";

const fairytaleSchema = new Schema( {
    title:String,
    author:String,
    published:Date,
    pages:Number,
    minimumAge:Number
} )

const Tale = model('Tale',fairytaleSchema)

export default Tale