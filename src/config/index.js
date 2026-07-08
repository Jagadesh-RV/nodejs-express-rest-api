// src/config/index.js
import dotenv from 'dotenv';
import { z } from 'zod'; // Zod provides runtime schema validation

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default('3000'),
    DATABASE_URL: z.string().url(),
    STRIPE_SECRET_KEY: z.string().min(1),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

// Validate process.env against schema
const _config = envSchema.parse(process.env);

export const config = Object.freeze({
    port: parseInt(_config.PORT, 10),
    dbUrl: _config.DATABASE_URL,
    stripeKey: _config.STRIPE_SECRET_KEY,
    isProduction: _config.NODE_ENV === 'production'
});