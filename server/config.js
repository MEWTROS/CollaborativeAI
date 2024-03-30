import dotEnv from "dotenv";
import path from 'path';

dotEnv.config({
    path: path.resolve(`${process.cwd()}`, `.env.${process.env.NODE_ENV}`),
});

const config = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT || 4000,
    OPEN_AI_API_KEY: process.env.CHATGPTAPIKEY || 'DUMMY-KEY',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/E_Commerce',
    JWT_LIFETIME: process.env.JWT_LIFETIME || 90,
    JWT_SECRET: process.env.JWT_SECRET || 'dummyJWTSecret123', // Default value is 'dummyJWTSecret123'
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:4000/',
    NODE_MAILER_USER: process.env.NODE_MAILER_USER || 'myemail@example.com',
    NODE_MAILER_PASS: process.env.NODE_MAILER_PASS || 'myemailpassword',
    NODE_MAILER_HOST: process.env.NODE_MAILER_HOST || "",
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@example.com',
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY || 'dummyMailgunAPIKey123',
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN || 'example.com',
    CC_EMAILS: process.env.CC_EMAILS,
    MONGODB_NAME: process.env.MONGODB_NAME,
    GOOGLE_CREDENTIALS_PATH: process.env.GOOGLE_CREDENTIALS_PATH,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID || '1abcdefg123456789',
    SHEET_NAME: process.env.SHEET_NAME || 'prompts',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'dummyAWSAccessKey123',
    AWS_SECRET_KEY_ID: process.env.AWS_SECRET_KEY_ID || 'dummyAWSSecretKey123',
    AWS_REGION: process.env.AWS_REGION || 'us-west-2',
    AWS_BUCKET_EXPIRE_TIME: process.env.AWS_BUCKET_EXPIRE_TIME,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || 'image-upload-bucket',
}

export default config;
