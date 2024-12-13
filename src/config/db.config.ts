import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  MONGODB_URI: process.env.MONGODB_URI,
}));
