import mongoose,{Schema,model} from "mongoose";

const bookSchema = new Schema( {
    title:String,
    author:String,
    published:Number,
    pages:Number,
    minimumAge:Number
},
{timestamps:true} )

const Book = model('Book',bookSchema)
export default Book;
