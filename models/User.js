const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
        username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
        email: {
        type: String,
        unique: true, 
        required: true,
        // match a valid email address
    },
        // subdocument for thoughts 
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            // referring to the thought document model 
            ref: 'Thought'
        }
        ],
        friends: [UserSchema]
    },
{
    toJSON: {
        getters: true
    }
});

// virtual to count friends
CommentSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;