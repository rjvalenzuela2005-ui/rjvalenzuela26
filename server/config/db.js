const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<username>')) {
    console.warn('\n⚠️  MongoDB: MONGO_URI not set or still using placeholder.');
    console.warn('   Update server/.env with your real MongoDB Atlas connection string.');
    console.warn('   Server will run, but API endpoints that need DB will fail gracefully.\n');
    return;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    // Don't exit — let health check still respond
  }
};

module.exports = connectDB;
