import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  work: { type: String, required: true }, // Type of project/work
  budget: { type: String },
  message: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Inquiry = mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
export default Inquiry;
