

const Contact = () => {
  return (<div className="flex-col m-auto">
        <h1 className="pl-40 pb-20 text-3xl font-extrabold text-orange-800">Contact Details</h1>
    <div className="flex-col text-blue-900 gap-32 items-center justify-center m-auto rounded-md border-black w-1/2 h-56 ">
      <h2 className="pl-14 text-2xl font-extrabold ">himeshsrivastava123gmail.com</h2> 
      <h2 className="pl-14 text-2xl font-extrabold "> 8318969170</h2>   
      <div className=" pl-14 flex gap-10">
        <a href="https://www.linkedin.com/in/himesh-srivastava-541a2b275/"><img className="w-20 h-20 rounded-full" src="https://cdn.logojoy.com/wp-content/uploads/20240607111806/linkedin-logo-monogram-600x450.jpg" alt="" />
        </a>
        <a href="https://github.com/HimeshSrivastava"><img className="w-20 h-20 rounded-full"  src="https://t3.ftcdn.net/jpg/09/18/17/82/360_F_918178253_SwcTm5ohwFDeRhZBNlMkYv4vQh6JbLZs.jpg" alt="" /></a>
      </div>
    </div>
    </div>
  )
}

export default Contact
