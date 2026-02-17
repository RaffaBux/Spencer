import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  clientPort: number;
  apiUrl: string;
  nodeEnv: string;
  mongoUri: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  clientPort: Number(process.env.CLIENT_PORT) || 5173,
  apiUrl: process.env.API_URL || '/api/items',
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/items',
};

export default config;