import { toNodeHandler } from 'better-auth/node';
import { Router } from 'express';
import { auth } from '../lib/auth.js';

const AuthRouter = Router();

AuthRouter.all("/api/auth/*", toNodeHandler(auth));

export default AuthRouter;