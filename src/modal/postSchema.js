import mongoose from 'mongoose';

// Define the schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create and export the Photo model

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post