import File from "../models/File.js";

// Upload file
export const uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size
    });
    await file.save();
    res.json(file);
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
};

// Get all files
export const getFiles = async (req, res) => {
  const files = await File.find().sort({ uploadedAt: -1 });
  res.json(files);
};

// Delete file
export const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ error: "File not found" });

    await File.findByIdAndDelete(req.params.id);
    res.json({ message: "File deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
