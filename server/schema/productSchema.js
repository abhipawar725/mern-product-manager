import { model, Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
}, {timestamps: true});

const Product = model("Product", productSchema);

export default Product
