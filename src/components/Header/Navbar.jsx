import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="bg-navBg py-3">
      <div className="my-container flex justify-between items-center px-2">
        <p className="text-4xl text-white">logo</p>
        <div className="sm:flex items-center gap-3 hidden">
          {navData.map((item) => (
            <li key={item.id} className="list-none relative group">
              <NavLink
                to={item.path}
                className="uppercase text-zinc-300 font-semibold hover:text-white"
              >
                {item.name}
              </NavLink>

              <div className="absolute top-7 left-0 bg-white  rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
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

        <p className="text-white sm:hidden">menu</p>
      </div>
    </div>
  );
};

export default Navbar;
