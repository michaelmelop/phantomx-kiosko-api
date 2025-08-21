import { Router } from 'express';
import { home } from '../controllers/index';
import { authenticateToken } from '../middleware/security';

const router = Router();

router.get('/', home);
router.get('/secure', authenticateToken, (req, res) => {
  res.json({ message: 'Ruta protegida', user: (req as any).user });
});

export default router;