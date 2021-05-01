import express from 'express';
import Podcast from './Podcast';

const router = express();
router.disable('x-powered-by');

router.use('/episodes', Podcast);

export default router;
