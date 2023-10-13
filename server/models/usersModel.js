import {Schema,model} from 'mongoose';
import {bookSchema} from './bookModel.js'

const userSchema = new Schema( {
    name:String,
    email:String,
    // fairytales 
    books_collection: [bookSchema]
})


const User = model('User',userSchema)

export default User;