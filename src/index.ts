import express from 'express';
import morgan from 'morgan';

// Define an express server application
const app = express();

// Use morgan as default logger for server
app.use(morgan('dev'));

// Demo RESTAPI endpoint setup
app.get('/', (req, res) => {
  res.json({
    hello: 'world',
  });
});

// Start the server & listen on specified port
const port = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
