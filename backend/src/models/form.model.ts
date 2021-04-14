import mongoose from "mongoose"
const Schema = mongoose.Schema

const questionsSchema = new Schema(
  {
    option: {
      type: String
    }
  }
)

const cardsSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    questions: [questionsSchema]
  }
)

const formSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    cards: [cardsSchema]
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Form", formSchema)