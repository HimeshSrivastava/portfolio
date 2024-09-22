

const Skill = () => {
  return (
    <div className=" m-10 pl-28 pr-28 pt[5rem] ">
     <h2 className="font-extrabold text-3xl pb-12 text-orange-400">Skills</h2>
    <div className=" grid grid-cols-4 gap-7">
      <div className="w-40 h-32">
        <img className="w-40 h-32" src="https://static-00.iconduck.com/assets.00/react-icon-256x228-97ltgbl1.png" alt="" />
        <h4 className="text-2xl text-center text-yellow-700">React</h4>
      </div>
      <div>
        <img className="w-40 h-50" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" />
        <h4 className="text-2xl text-center text-yellow-700 pt-6">Tailwind</h4>
      </div>
      <div>
      <img className="w-40 h-32" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Firebase_icon.svg" alt="" />
      <h4 className="text-2xl text-center text-yellow-700">Firebase</h4>
      </div>
      <div>
      <img className="w-40 h-50" src="https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png" alt="" />
      <h4 className="text-2xl text-center text-yellow-700 pt-8">Nodejs</h4>
      </div>
      <div>
        <img className="w-40 h-50" src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
        <h4 className="text-2xl text-center text-yellow-700 mt-5">HTML</h4>
      </div>
      <div>
        <img className="w-40 h-50" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />
        <h4 className="text-2xl text-center text-yellow-700 mt-10">CSS</h4>
      </div>
      <div>
        <img className="w-40 h-52" src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        <h4 className="text-2xl text-center text-yellow-700">JAVASCRPIT</h4>
      </div>
       </div>
       </div>
  )
}

export default Skill