

const User = require("../models/User"); 
const File = require("../models/file");
const supabase = require("../config/supabase");

const MAX_STORAGE = 50 * 1024 * 1024; // 50 MB per user

// Get all files for logged-in user
exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Upload file with storage limit
exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    // Calculate current storage used
    const userFiles = await File.find({ user: req.user.id });
    const usedStorage = userFiles.reduce((acc, f) => acc + (f.size || 0), 0);

    if (usedStorage + file.size > MAX_STORAGE) {
      return res.status(400).json({
        message: "Upload exceeds 50 MB limit",
        used: usedStorage,
        max: MAX_STORAGE,
        fileSize: file.size,
      });
    }

    const bucket = "lunacloud";
    const filePath = `${req.user.id}/${Date.now()}_${file.originalname}`;

    // Upload to Supabase
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file.buffer, { contentType: file.mimetype, upsert: false });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    const publicUrl = data.publicUrl;

    // Save metadata in MongoDB
    const newFile = new File({
      user: req.user.id,
      originalname: file.originalname,
      filename: filePath,
      path: publicUrl,
      type: file.mimetype,
      size: file.size,
    });
    await newFile.save();

    res.status(201).json(newFile);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete file
exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    const bucket = "lunacloud";
    const { error } = await supabase.storage.from(bucket).remove([file.filename]);
    if (error) throw error;

    await File.findByIdAndDelete(req.params.id);
    res.json({ message: "File deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: err.message });
  }
};

// Rename file
exports.renameFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { newName } = req.body;

    const file = await File.findById(id);
    if (!file) return res.status(404).json({ message: "File not found" });

    file.originalname = newName;
    await file.save();

    res.json(file);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Download / Open file
exports.downloadFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);
    if (!file) return res.status(404).json({ message: "File not found" });

    // Redirect to Supabase public URL
    res.redirect(file.path);
  } catch (err) {
    console.error("Download error:", err);
    res.status(500).json({ message: "Server error" });
  }
};




//Account delete
exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("Deleting account for user:", userId);

    // 1. Find all files for the user
    const files = await File.find({ user: userId });
    console.log(`Found ${files.length} files for user.`);

    // 2. Delete from Supabase storage
    const bucket = "lunacloud";
    for (const file of files) {
      console.log("Deleting from Supabase:", file.filename);
      const { error } = await supabase.storage.from(bucket).remove([file.filename]);
      if (error) {
        console.error("Error deleting from Supabase:", error.message);
      }
    }

    // 3. Delete files from MongoDB
    const deletedFiles = await File.deleteMany({ user: userId });
    console.log(`Deleted ${deletedFiles.deletedCount} file records from MongoDB.`);

    // 4. Delete user from MongoDB
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Account and all files deleted" });
  } catch (err) {
    console.error("Delete account error:", err);
    res.status(500).json({ message: err.message });
  }
};
