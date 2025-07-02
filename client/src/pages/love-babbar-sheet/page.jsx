
import { useState } from "react";
import { Menu, X, Hammer, Clock, FileText } from "lucide-react";


const UnderConstruction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Navbar */}


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800 w-full">
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Love-Babbar Sheet
          </a>
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Striver-Sheet
          </a>
        </div>
      )}
      {/* Main Content */}
      <div className="text-center mt-16">
        <Hammer size={64} className="text-orange-400 mx-auto" />
        <h1 className="text-4xl font-bold text-orange-300 mt-6">Under Construction</h1>
        <p className="text-lg text-gray-400 mt-4">
          We're working hard to bring you an amazing experience. Very soon, we are updating this platform
          with the <span className="text-orange-400 font-semibold">Love Babbar DSA Sheet</span> and much more!
        </p>
        <Clock size={48} className="text-gray-400 mx-auto mt-6 animate-pulse" />
        <p className="text-gray-500 mt-2">Stay tuned for updates!</p>
      </div>

      {/* Additional Placeholder Section */}
      <div className="mt-12 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <FileText size={48} className="text-orange-400 mx-auto" />
        <h2 className="text-2xl font-semibold text-orange-300 mt-4">What’s Coming?</h2>
        <p className="text-gray-400 mt-2">
          - A well-structured DSA learning path.
          <br />
          - Handpicked coding problems from top sources.
          <br />
          - Interactive progress tracking.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
