const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const IngredientSchema = new Schema({
    ingredientName:{
        type:String,
        required: "Ingredient must have a name"
    },
    description:{
        type:String
    },
    quantity:{
        type:Number,
        required: "there must be a quanity"
    },
    quantityType:{
        type:String,
        required: "what measurement of this ingredient?"
    }

})

const RecipeSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:"Recipe name is required"
    },

})