import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    designation: {
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
    },
    accountCreatedDate: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model('Users', userSchema);

export default Users;