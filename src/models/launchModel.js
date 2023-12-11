const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let launchSchema = new Schema({
    flight_number :{
        type : Number,
        required : 'le contenu est requis'
    },
    mission_name :{
        type : String,
        required : 'le contenu est requis'
    },
    mission_id :{
        type : [String],
        required : 'le contenu est requis'
    },
    created_at :{
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model('Launch', launchSchema);