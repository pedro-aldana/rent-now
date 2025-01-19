import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-8 text-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo Section */}
          <div className="max-w-sm">
            <a href="#">
              <img src="/logo.svg" alt="Logo" className="w-36" />
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Construyendo interfaces listas para usar, adaptables y modernas.
            </p>
            {/* Social Icons */}
            <ul className="mt-6 flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/pedro-aldana/"
                  className="hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 112.196 112.196"
                  >
                    <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                    <path
                      fill="#fff"
                      d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pedro-aldana"
                  className="hover:opacity-75"
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 32.000000 32.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M12 308 c-17 -17 -17 -279 0 -296 17 -17 279 -17 296 0 17 17 17 279
0 296 -17 17 -279 17 -296 0z m208 -77 c47 -34 52 -99 10 -141 -27 -27 -50
-26 -50 4 0 15 7 26 20 29 20 5 27 38 14 71 -9 23 -99 23 -108 0 -13 -33 -6
-66 14 -71 11 -3 20 -9 20 -14 0 -13 -24 -11 -39 4 -10 10 -11 9 -6 -5 4 -10
16 -20 27 -24 11 -3 17 -8 15 -11 -12 -11 -48 10 -62 37 -29 57 -10 110 49
136 35 15 59 11 96 -15z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rent Now by Pedro Aldana. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
