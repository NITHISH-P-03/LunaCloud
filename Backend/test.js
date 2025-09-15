require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabaseConnection() {
  console.log("Testing Supabase connection...");

  if (!supabase) {
    console.error("Failed to create Supabase client");
    return;
  }
  console.log("Supabase client created successfully");

  // List buckets
  const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
  if (bucketError) {
    console.error("Error listing buckets:", bucketError.message);
    return;
  }
  console.log("Buckets available:", buckets);

  // Upload test file
  const testBucket = 'lunacloud';
  const testFilePath = 'tests/testfile.txt';
  const fileBuffer = Buffer.from("This is a test file for Supabase connection", 'utf-8');

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(testBucket)
    .upload(testFilePath, fileBuffer, { contentType: 'text/plain' });

  if (uploadError) {
    console.error("Failed to upload test file:", uploadError.message);
    return;
  }
  console.log("Test file uploaded successfully:", uploadData);

  // Get public URL
  const { data: urlData, error: urlError } = supabase.storage.from(testBucket).getPublicUrl(testFilePath);
  if (urlError) console.error("Error getting public URL:", urlError.message);
  console.log("Public URL of test file:", urlData.publicUrl);

  console.log("All tests completed successfully");
}

// ✅ Call the function
testSupabaseConnection()
  .then(() => {
    console.log("Test finished ✅");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Test script error:", err);
    process.exit(1);
  });
