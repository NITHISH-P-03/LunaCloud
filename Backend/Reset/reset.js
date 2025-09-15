require("dotenv").config();
const mongoose = require("mongoose");
const supabase = require("../config/supabase"); // your supabase config
const User = require("../models/User");
const File = require("../models/file");

const MONGO_URI = process.env.MONGO_URL; // make sure this is set in .env
const BUCKET = "lunacloud"; // your Supabase bucket name

async function resetWebsite() {
  try {
    // 1️⃣ Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    // 2️⃣ Delete all files from Supabase
    const allFiles = await File.find({});
    console.log(`Found ${allFiles.length} files in DB`);

    for (const file of allFiles) {
      if (file.filename) {
        const { error } = await supabase.storage.from(BUCKET).remove([file.filename]);
        if (error) {
          console.error(`❌ Error deleting file ${file.filename} from Supabase:`, error.message);
        } else {
          console.log(`✅ Deleted file from Supabase: ${file.filename}`);
        }
      }
    }

    // 3️⃣ Delete all file records from MongoDB
    await File.deleteMany({});
    console.log("✅ Deleted all file records from MongoDB");

    // 4️⃣ Delete all users from MongoDB
    await User.deleteMany({});
    console.log("✅ Deleted all users from MongoDB");

    console.log("🎉 Website reset complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Reset failed:", err);
    process.exit(1);
  }
}

resetWebsite();
