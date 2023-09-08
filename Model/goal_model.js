const mongoose = require('mongoose')

const goal_schema = mongoose.Schema(
  {
    user:{
      type:String,
      required:true
    },
    text: {
      type: String,
      required: true
    }
    // user: {
    //   type: String,
    //   required: true,
    //   ref: 'User',
    // },
    // text: {
    //   type: String,
    //   required: [true, 'Please add a text value'],//required: [true, 'Please add a text value']: This line indicates that the text field is required. The [true, 'Please add a text value'] array syntax is used to define the requirement along with an error message that will be shown if a document is attempted to be saved without a value in the text field.
    // },
  },
  {
    timestamps: true,
  }
)

// const user_model=mongoose.model("user",user_schema);
// module.exports=user_model;

const goal_model= mongoose.model('goal', goal_schema)
module.exports=goal_model;
