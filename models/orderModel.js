const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Đang Xử Lý",
      enum: ["Đang Xử Lý",
      "Đã Xử Lý",
      "Đang Giao",
      "Đã Giao",
      "Đã Hủy",],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);