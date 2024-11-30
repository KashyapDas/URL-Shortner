import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://kashyap12345:kashyap123456789@cluster0.mwsas.mongodb.net/url-shortner").then(()=>{
  console.log("Database connect successfully...")
}).catch(err=>console.log("Database has got some error..."));

// Define the interface for the document
interface IShortner extends mongoose.Document {
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema
const shortnerSchema = new mongoose.Schema<IShortner>({
  originalUrl: { 
    type: String, 
    required: true 
  },
  shortUrl: { 
    type: String, 
    required: true, 
    unique: true 
  }
}, {
  // Enable timestamps
  timestamps: true
});

// Create the model
const ShortnerModel = mongoose.model<IShortner>('Shortner', shortnerSchema);

export default ShortnerModel;