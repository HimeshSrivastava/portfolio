

const Header = ({scrollToAbout,scrollToSkill,scrollToProject,scrollToAchievment,scrollToContact}) => {
 const displaymenu=()=>{

  }
  return (
    <div className=" sticky top-0 bg-white shadow-md flex pb-11 z-50 h-12">
      <h1 className="text-5xl text-orange-800 font-extrabold hidden md:block">PORTFOLIO</h1>
  <div className="ml-auto flex  lg:flex-row gap-7 p-4">
  <button  className="text-blue-950 font-bold text-xl"onClick={scrollToAbout} >Home</button>
  <button className="text-blue-950 font-bold text-xl" onClick={scrollToSkill}>Skill</button>
  <button className="text-blue-950 font-bold text-xl" onClick={scrollToProject}>Project</button>
  <button className="text-blue-950 font-bold text-xl" onClick={scrollToAchievment}>Achievment</button>
  <button className="text-blue-950 font-bold text-xl" onClick={scrollToContact}>Contact</button>
</div>
      <button onClick={displaymenu} className="text-black">button</button>
      </div>
  )
}

export default Header
