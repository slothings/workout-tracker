const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a type of exercise"
        },
        name: {
          type: String,
          trim: true,
          requires: "Enter the name of the exercise"
        },
        duration: {
          type: Number,
          required: "Enter how long your workout is in minutes"
        },
        weight: {
          type: Number,
          required: "Enter the weight of the weights"
        },
        reps: {
          type: Number,
          required: "Enter how many reps you did"
        },
        sets: {
          type: Number,
          required: "Enter how many sets you did"
        },
        distance: {
          type: Number,
          require: "Enter how long you ran"
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;