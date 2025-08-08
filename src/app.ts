import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:3005' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Budget App Backend' });
});

export default app;