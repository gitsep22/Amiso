import React from "react";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#",
  },
  {
    id: 3,
    name: "PAGES",
    link: "/#",
  },
  {
    id: 4,
    name: "GALLERY",
    link: "/#",
  },
  {
    id: 5,
    name: "BLOG",
    link: "/#",
  },
  {
    id: 6,
    name: "CONTACT",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-200 dark:text-white duration-200 relative z-40">
      <div className="bg-sky-500/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">     
              <img src={Logo} alt="Logo" className="w-10" />
              amiso
          </a>
          </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
       
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
