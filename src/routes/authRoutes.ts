import express from 'express';
import { signup, login, getProfile } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/profile', protect, getProfile);

export default router;
