import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
  const navData = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "services",
      path: "/services",
      submenu: [
        {
          id: 11,
          name: "web development",
          path: "web-development",
        },
        {
          id: 22,
          name: "graphics design",
          path: "graphics-design",
        },
        {
          id: 322,
          name: "digital marketing",
          path: "digital-marketing",
        },
        {
          id: 44,
          name: "digital marketing",
          path: "digital-marketing",
        },
      ],
    },
    {
      id: 3,
      name: "about us",
      path: "about-us",
    },
    {
      id: 4,
      name: "contact us",
      path: "contact-us",
    },
  ];
  return (
    <>
      <nav className="bg-navBg py-3 sticky top-0 left-0 w-full z-30">
        <div className="my-container flex justify-between items-center px-2">
          <p className="text-4xl text-white">logo</p>
          <div className="sm:flex items-center gap-3 hidden">
            {navData.map((item) => (
              <li
                key={item.id}
                className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active dot" : "inActive"
                  }
                >
                  {item.name}
                </NavLink>

                <div className="hidden group-hover:block absolute top-7 left-0 bg-white  rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
                  {item?.submenu?.map((menu) => (
                    <Link
                      to={menu.path}
                      key={menu.id}
                      className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </div>

          <p
            className="text-white sm:hidden text-2xl cursor-pointer"
            onClick={toggleNav}
          >
            <RiMenu4Fill />
          </p>
        </div>
      </nav>

      {/* MOBILE MENU  */}

      <div
        className={`block sm:hidden bg-navBg fixed z-50 top-0 right-0 max-w-screen-sm w-full p-4 text-center space-y-3 h-screen transition-all ${
          showNav ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <span
          className="absolute top-4 right-4 text-white text-2xl w-8 h-8 bg-rose-500 rounded-full grid place-content-center cursor-pointer"
          onClick={toggleNav}
        >
          <MdClose className="p-1 font-semibold" />
        </span>
        <div className="pt-[10rem] space-y-4">
          {navData.map((item) => (
            <li
              key={item.id}
              className="list-none relative group w-max mx-auto"
            >
              <NavLink
                to={item.path}
                className="uppercase text-zinc-300 font-semibold hover:text-white"
              >
                {item.name}
              </NavLink>

              <div className="absolute top-0 -right-[10rem] bg-white  rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md  ">
                {item?.submenu?.map((menu) => (
                  <Link
                    to={menu.path}
                    key={menu.id}
                    className="text-sm px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg "
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
