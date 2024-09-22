

function Banner({ pic }) {
  return (
    <>
      <div className="flex items-center justify-between h-1/2">
        <div className="ml-3  bg-zinc-700 text-white p-10 m-2 w-2/3 rounded-3xl">
          
            <p className="text-2xl">Welcome to</p>
            <span className="text-7xl name">Fitness Club</span>
            <p className="text-xl">Achieve your goal one step at a time</p>
          
        </div>
      
          <img src={pic} alt="Banner Pic" className="mr-3 w-1/2"/>
      </div>
      
    </>
  )
}

export default Banner;
