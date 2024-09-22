const Project = () => {
  return (
    <div className="relative w-full h-auto py-10 pl-28 pr-28">
      

      
      <div className="relative z-30 p-8">
        <h2 className="font-extrabold text-3xl text-orange-800 pb-6">Projects</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">1. YouTube</h3>
            <p className="text-lg font-bold text-yellow-900">It is a clone of YouTube with all the functionality and based on the latest technology.</p>
          </div>
          
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">2. Netflix</h3>
            <p className="text-lg font-bold text-yellow-900">
              It is a clone of Netflix, secured with Firebase, and has a very attractive user interface. It covers all the features and creates a list of the latest movies. It is different from Netflix in terms of GPT search and AI-based suggestions according to user input.
            </p>
          </div>
          
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">3. Storing Your Contact Info</h3>
            <p className="text-lg font-bold text-yellow-900">A backend project based on MongoDB, implementing all CRUD operations.</p>
          </div>
          
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">4. Backend Project</h3>
            <p className="text-lg font-bold text-yellow-900">
              This project fully authorizes your website using cookies and JWT tokens. Pages cannot be accessed without user login.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-600 font-extrabold text-xl ">5.Ecomerence website</h3>
            <p className="text-lg font-bold text-yellow-900">
              This project fully authorizes your website using cookies and JWT tokens. Pages cannot be accessed without user login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;