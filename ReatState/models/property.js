import mongoose from "mongoose";
import uuidv4 from "uuidv4";
import schema from "mongoose.Schema";

var propertyDetails = new schema({

    propertyName        : { type : String , required : true },
    propertyAddress     : { type : String , required : true },
    propertyDescription : { type : String , required : true },
    propertyAmenities   : { type : String , required : true },
    propertyName        : { type : String , required : true },
    contactDetais       : { type : String , required : true },
    city                : { type : String , required : true },
    state               : { type : String , required : true },
    prize               : { type : String , required : true },
    propertyImages      : { type : [String],required : true },
    active              : { type : Boolean ,default : true , required : true },
    userid              : { type : string }//For posting a proprty by a seller

});


