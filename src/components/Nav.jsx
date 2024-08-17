import { useState, useEffect } from "react";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-10">
      <div className="flex my-2 text-sm px-4 md:px-40 justify-between items-center z-1 shadow-sm h-12">
        {!isMobile ? (
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center space-x-8 items-center">
              <p>
                <img
                  className="rounded"
                  height={63}
                  width={63}
                  src="https://framerusercontent.com/images/mBTnirwOx3vn2aHZtDskk8cPXA.png"
                  alt="Logo"
                />
              </p>
              <p className="flex justify-center items-center hover:opacity-50 transition duration-300 ease-in-out">
                Products
                <svg
                  className="mx-2 hover:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16px"
                  height="16px"
                  color="var(--token-0dd3e2df-84dc-48f1-8c8a-e4f76072e4e0, rgb(51, 65, 85))"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
              <p className="flex justify-center items-center hover:opacity-50 transition duration-300 ease-in-out">
                Resources
                <svg
                  className="mx-2 hover:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16px"
                  height="16px"
                  color="var(--token-0dd3e2df-84dc-48f1-8c8a-e4f76072e4e0, rgb(51, 65, 85))"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
              <p>
                <span className="transition-transform hover:text-blue-500">Pricing 🔥</span>
              </p>
              <p>
                <span className="transition-transform hover:text-blue-500">ROI Calculator 💰</span>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-8">
              <p className="hover:text-blue-500 font-bold hover:underline transition duration-150 ease-in-out">Log In</p>
              <div className="bg-black rounded-[40px] px-4 py-2 mb-2 hover:opacity-70 transition duration-300 ease-in-out">
                <p className="text-white font-bold">Get access</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full px-4">
            <img
              className="rounded"
              height={63}
              width={63}
              src="https://framerusercontent.com/images/mBTnirwOx3vn2aHZtDskk8cPXA.png"
              alt="Logo"
            />
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="24"
                  height="24"
                  color="var(--token-ad4add5a-5edc-4bc1-9053-1a848e84267b, rgb(15, 23, 42))"
                  className="cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24px"
                  height="24px"
                  color="var(--token-ad4add5a-5edc-4bc1-9053-1a848e84267b, rgb(15, 23, 42))"
                  className="cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="transition-transform hover:text-blue-500">Products</li>
            <li className="transition-transform hover:text-blue-500">Resources</li>
            <li className="transition-transform hover:text-blue-500">Pricing 🔥</li>
            <li className="transition-transform hover:text-blue-500">ROI Calculator 💰</li>
            <li className="transition-transform hover:text-blue-500">Log In</li>
            <li>
              <div className="bg-black rounded-[40px] px-4 py-2 hover:opacity-70 transition duration-300 ease-in-out">
                <p className="text-white font-bold">Get access</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
