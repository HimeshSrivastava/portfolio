const Project = () => {
  return (
    <div className="relative w-full h-auto py-10 px-4 md:px-28">
      <div className="relative z-30 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="font-extrabold text-3xl text-orange-800 pb-6 text-center md:text-left">
          Projects
        </h2>

        <div className="space-y-8">
          {/* Project 1 */}
          <div className="space-y-2">
            <h3 className="text-yellow-600 font-bold text-lg md:text-xl">1. Chat Application</h3>
            <p className="text-base md:text-lg font-medium text-yellow-900">
              A full-stack application allowing users to send and receive messages in real-time. Features include user authentication, secure data storage, and personal messaging. Each user’s data is private and accessible only to them.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Tech Stack:</span> React, Node.js, MongoDB, Express, Zustand, Socket.IO
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Deployed URL:</span>{" "}
              <a
                href="https://chat-app-frontend-new.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Live Demo
              </a>
            </p>
          </div>

          {/* Project 2 */}
          <div className="space-y-2">
            <h3 className="text-yellow-600 font-bold text-lg md:text-xl">2. Contact Management System</h3>
            <p className="text-base md:text-lg font-medium text-yellow-900">
              A backend project implementing all CRUD operations for storing and managing contact information efficiently. Designed with a focus on scalability and code structure.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Tech Stack:</span> Flask, Python, MongoDB, Docker
            </p>
          </div>

          {/* Project 3 */}
          <div className="space-y-2">
            <h3 className="text-yellow-600 font-bold text-lg md:text-xl">3. Registration Page</h3>
            <p className="text-base md:text-lg font-medium text-yellow-900">
              A secure authentication system using cookies and JWT tokens. Pages remain protected and can only be accessed after user login.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Tech Stack:</span> React, Node.js, Express, MongoDB, JWT, Cookies
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Deployed URL:</span>{" "}
              <a
                href="https://registration-page-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Live Demo
              </a>
            </p>
            
          </div>

          {/* Project 4 */}
          <div className="space-y-2">
            <h3 className="text-yellow-600 font-bold text-lg md:text-xl">4. E-commerce Website</h3>
            <p className="text-base md:text-lg font-medium text-yellow-900">
              A frontend project replicating an e-commerce platform’s core functionalities, including product listing, cart management, and checkout simulation.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-700">
              <span className="text-gray-900 font-bold">Tech Stack:</span> React, Redux, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
