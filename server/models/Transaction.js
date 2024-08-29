import mongoose from "mongoose";

const TransactionScema = new mongoose.Schema({
    userId: String,
    cost: String,
    products: {
        type: [mongoose.Types.ObjectId],
        of: Number,
    },
},{timestamps: true})

const Transaction = mongoose.model("Transaction", TransactionScema)
export default Transaction;