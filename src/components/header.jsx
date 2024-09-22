

 function Header({logo, user}) {
  return (
    <>
      <div className="bg-zinc-800 text-white p-2 flex justify-between">
        <div className="flex items-center text-xl gap-2">
          <img src={logo} alt="logo" className="w-10 " />
          <p>Fitness Club</p>
        </div>
        <div className="flex items-center text-xl gap-3">
          <img src={user} alt="User Icon" className="w-10" />
          <p className="mr-2">User</p>
        </div>
      </div>
    </>
  )
}

export default Header;
