import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white py-9">
        <div className="container flex justify-between items-center">
          <div className="w-32">
            <img
              className="w-full cursor-pointer"
              src="api logo.jpg"
              alt="Fresh-logo.png"
            />
          </div>
          <div>
            <ul className="flex gap-14">
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/about">About</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/users">Users</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/todo">ToDo</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="shadow-black">
            <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-7 mr-3 shadow-xl text-xl font-semibold">
              Login
            </button>
            <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-4 shadow-xl text-xl font-semibold">
              <Link to="#">Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
