'use Strict'

const mongoose = require(mongoose);
const Schema = mongoose.Schema;

var FollowSchema = Schema({
    user: {
        type: Schema.ObjecId, ref: 'User'
    },
    followed: { type: Schema.ObjecId, ref:'User'}
});

module.exports = mongoose.model('Follow', FollowSchema);