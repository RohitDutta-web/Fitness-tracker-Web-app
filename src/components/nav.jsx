

 function Nav({image}) {
  return (
    <>
      <div className="flex  w-full justify-center fixed bottom-0 m-5 ">
      <div className="flex flex-row bg-transparent items-center  w-60 justify-around rounded-3xl nav font-bold text-xl">
        <p className="cursor-pointer  p-2 rounded-full hover:bg-zinc-100">Stats</p>
        <img src={image} alt="Home" className="cursor-pointer w-10 m-2 rounded-full" />
        

        <p className="cursor-pointer p-2 rounded-full hover:bg-zinc-100">Activity</p>
        
      </div>
      </div>
    </>
  )
}

export default Nav;