import mongoose from 'mongoose';
import 'doteven/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// SCHEMA: Define the collection's schema.
const exerciseSchema = mongoose.Schema({
	name: { type: String, required: true },
	reps: { type: Number, min: 1, required: true },
	weight: { type: Number,  min: 1, required: true },
     	unit: { type: String, required: true },
    	date: {type: Date, required: true }
});

// Compile the model from the schema.
const Exercise = mongoose.model("Exercise", exerciseSchema);

// CREATE model *****************************************
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ 
        name: name, 
        reps: reps, 
        weight: weight,
        unit: unit,
        date: date 
    });
    return exercise.save();
}
