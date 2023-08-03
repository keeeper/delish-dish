import { Schema, model, models } from "mongoose";

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  photo: {
    title: {
      type: String,
    },
    url: {
      type: String,
    }
  },
  tags: {
    type: [
      {
        name: {
          type: String
        },
        url: {
          type: String
        }
      }
    ]
  },
  chef: {
    type: String
  }
});

const Recipe = models.Recipe || model("Recipe", recipeSchema);

export default Recipe;