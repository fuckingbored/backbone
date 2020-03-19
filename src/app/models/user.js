
import mongoose from 'mongoose';

//SCHEMA
const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

//STATICS
//Get a list of all User's that satisfy the query(default=null)
UserSchema.statics.getAll = async function(query) {
    return await this.find(query);
} 

//Get a single User that satisfies the query
UserSchema.statics.getOne = async function(query) {
    return await this.findOne(query);
}

//Update a single User that satisfies the filter with doc
UserSchema.statics.updateOne = async function(filter, doc) {
    let instance = await this.findOne(filter);
    Object.assign(instance, doc);
    await instance.save();
    return instance;
}

let User = mongoose.model('User', UserSchema);

export default User;