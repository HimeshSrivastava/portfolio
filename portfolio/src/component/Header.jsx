

const Header = ({scrollToAbout,scrollToSkill,scrollToProject,scrollToAchievment,scrollToContact}) => {
  return (
    <div className=" sticky top-0 bg-white shadow-md flex pb-11 z-50 h-12">
      <h1 className="text-5xl text-orange-800 font-extrabold">PORTFOLIO</h1>
<div className="ml-auto flex gap-7 p-4 ">
      <button  className="text-blue-950 font-bold text-xl"onClick={scrollToAbout} >Home</button>
      <button className="text-blue-950 font-bold text-xl" onClick={scrollToSkill}>skill</button>
      <button className="text-blue-950 font-bold text-xl" onClick={scrollToProject}>project</button>
      <button className="text-blue-950 font-bold text-xl" onClick={scrollToAchievment}>Achievment</button>
      <button className="text-blue-950 font-bold text-xl" onClick={scrollToContact}>contact</button>
    </div>
    </div>
  )
}

export default Header
