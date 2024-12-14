
import mongoose from 'mongoose';

const verificationSchema = new mongoose.Schema({
  identifier: { type: String, unique: true, required: true },
  value: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Verification = mongoose.model('Verification', verificationSchema);
export default Verification;