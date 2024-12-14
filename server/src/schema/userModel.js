
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  emailVerified: { type: Boolean, required: true },
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
});

const User = mongoose.model('User', userSchema);
export default User;