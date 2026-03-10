import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            User Management
          </h2>
          <p className="text-sm leading-relaxed">
            User Management helps administrators create, update,
            and control user accounts securely in a system. It
            ensures proper authentication, authorization, and
            efficient management of user data.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Add User</li>
            <li className="hover:text-white cursor-pointer">User List</li>
            <li className="hover:text-white cursor-pointer">Profile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>

          <p className="text-sm">📧 support@usermanagement.com</p>
          <p className="text-sm mt-2">📞 +91 98765 43210</p>
          <p className="text-sm mt-2">📍 Hyderabad, India</p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 User Management System. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;