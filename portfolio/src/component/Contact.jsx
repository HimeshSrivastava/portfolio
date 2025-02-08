const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12 ">
      {/* Title */}
      <h1 className="pb-10 text-3xl md:text-4xl font-extrabold text-orange-800 text-center">
        Contact Details
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col items-center  shadow-lg rounded-lg p-6 md:p-10 w-full md:w-2/3 lg:w-1/2">
        {/* Email */}
        <h2 className="text-lg md:text-xl font-semibold text-blue-900 break-words text-center mb-4">
          himeshsrivastava123@gmail.com
        </h2>
        {/* Phone */}
        <h2 className="text-lg md:text-2xl font-semibold text-blue-900 text-center mb-6">
          +91 8318969170
        </h2>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/himesh-srivastava-541a2b275/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
              src="https://cdn.logojoy.com/wp-content/uploads/20240607111806/linkedin-logo-monogram-600x450.jpg"
              alt="LinkedIn Profile"
            />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/HimeshSrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
              src="https://t3.ftcdn.net/jpg/09/18/17/82/360_F_918178253_SwcTm5ohwFDeRhZBNlMkYv4vQh6JbLZs.jpg"
              alt="GitHub Profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
