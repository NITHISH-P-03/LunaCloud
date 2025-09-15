import React from "react";

function AboutUs() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">About LunaCloud</h1>
      <p className="lead text-center">
        LunaCloud is a simple, secure, and modern cloud storage platform designed
        to keep your files safe and accessible anytime, anywhere.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h3>🌙 Our Mission</h3>
          <p>
            At LunaCloud, our mission is to provide reliable cloud storage with
            an intuitive user experience. We aim to make storing, sharing, and
            managing your data effortless, whether you are an individual or a
            team.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h3>🔒 Security First</h3>
          <p>
            Your data privacy is our top priority. With advanced encryption and
            secure authentication, we ensure your files remain safe and
            accessible only to you.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h3>☁️ Easy Access</h3>
          <p>
            Upload, download, and manage your files from any device. LunaCloud
            offers a seamless experience across desktop and mobile, so your data
            is always within reach.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h3>🚀 Why Choose LunaCloud?</h3>
          <ul>
            <li>Fast and reliable file uploads & downloads</li>
            <li>User-friendly dashboard with modern UI</li>
            <li>Secure authentication and data encryption</li>
            <li>Scalable storage for personal and professional needs</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>Join us and experience the future of cloud storage with LunaCloud.</h4>
      </div>
    </div>
  );
}

export default AboutUs;
