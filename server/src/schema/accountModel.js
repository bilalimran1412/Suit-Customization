
import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  accountId: { type: String, required: true },
  providerId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accessToken: String,
  refreshToken: String,
  idToken: String,
  accessTokenExpiresAt: Date,
  refreshTokenExpiresAt: Date,
  scope: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Account = mongoose.model('Account', accountSchema);
export default Account;