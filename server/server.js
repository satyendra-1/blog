// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';         // your DB connection
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
await connectDB(); // connect to MongoDB or other DB

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Vercel backend ✅');
});

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

//  Do NOT use app.listen()
export default app; // Required by Vercel
