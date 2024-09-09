import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 w-screen">
    <div className="container mx-auto text-center">
      <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      <div className="flex justify-center mt-2">
        <a href="#" className="mx-2 hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="mx-2 hover:text-gray-400">Terms of Service</a>
        <a href="#" className="mx-2 hover:text-gray-400">Contact Us</a>
      </div>
    </div>
  </footer>
);
};



export default Footer