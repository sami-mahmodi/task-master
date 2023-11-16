import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://samiullahmahmodi1212:X3QGEEN06YFSg1OZ@cluster0.5ppojng.mongodb.net/?retryWrites=true&w=majority', { 
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
