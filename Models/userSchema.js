import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Users = mongoose.model('Users', userSchema);

export default Users;