const Project = () => {
  return (
    <div className="relative w-full h-auto py-10 md:pl-28 md:pr-28">
      

      
      <div className="relative z-30 p-8">
        <h2 className="font-extrabold text-3xl text-orange-800 pb-6">Projects</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">1. Chat application</h3>
            <p className="text-lg font-bold text-yellow-900">it is Full Stack Project in which you can send and read messages. it is fully authenticated and your personal data is saved and every user has it own data which is secured from other only you can acces it. you can message them separately.</p>
          </div>
          
          {/* <div>
            <h3 className="text-yellow-600 font-bold text-xl">2. Netflix</h3>
            <p className="text-lg font-bold text-yellow-900">
              It is a clone of Netflix, secured with Firebase, and has a very attractive user interface. It covers all the features and creates a list of the latest movies. It is different from Netflix in terms of GPT search and AI-based suggestions according to user input.
            </p>
          </div> */}
          
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">3. Storing Your Contact Info</h3>
            <p className="text-lg font-bold text-yellow-900">A backend project based on MongoDB,Python,Docker,and Flask where we are implementing all CRUD operations.</p>
          </div>
          
          <div>
            <h3 className="text-yellow-600 font-bold text-xl">4. Registeration Page</h3>
            <p className="text-lg font-bold text-yellow-900">
              This project fully authorizes your website using cookies and JWT tokens. Pages cannot be accessed without user login.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-600 font-extrabold text-xl ">5.Ecomerence website</h3>
            <p className="text-lg font-bold text-yellow-900">
              it is basically a frontend project where we make all the functionality of Ecommerence website just like adding items to Cart etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
