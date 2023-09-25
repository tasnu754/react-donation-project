import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="">
        <div className="w-[85%] mx-auto  flex flex-col md:flex-row justify-between py-12">
          <div>
            <img src="https://i.ibb.co/F63QwzW/Logo.png" alt="" />
          </div>

          <div className="">
            <ul className="flex flex-col md:flex-row text-center gap-6 mt-6">
              <li className="text-lg font-bold ">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-[#FF444A] underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg font-bold">
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-[#FF444A] underline"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li className="text-lg font-bold">
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-[#FF444A] underline"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Navbar;