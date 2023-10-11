import {Schema,model} from 'mongoose';
import {fairyTaleSchema} from './fairyTaleModel.js'

const userSchema = new Schema( {
    name:String,
    email:String,
    // fairytales 
    fairyTales_collection: [fairyTaleSchema]
})


const User = model('User',userSchema)

export default User;