import TaskLystLogo_light from "../../assets/images/TaskLyst-Logo-Light.png";
import TaskListLogo_Dark from "../../assets/images/TaskLyst-Logo-Dark.png";
import { useTheme } from "../../context/ThemeContext";
import TaskLyst_title_light from "../../assets/images/TaskLyst-title-light.png";
import TaskLyst_title_dark from "../../assets/images/TaskLyst-title-dark.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const Icon = theme === "light" ? MdOutlineDarkMode : MdOutlineLightMode;
  return (
    <header
      className="flex justify-between items-center px-6 py-2 
    shadow-[0_0_25px_rgba(0,0,0,0.08)]  
    dark:shadow-[0_0_30px_rgba(0,255,255,0.065)]  
    transition-colors duration-300"
    >
      <div className="logo-container w-fit flex justify-center items-center gap-2 ">
        <img
          src={theme === "light" ? TaskLystLogo_light : TaskListLogo_Dark}
          alt="TaskLyst Logo"
          className="h-14 md:h-16"
        />
        <img
          src={theme === "light" ? TaskLyst_title_light : TaskLyst_title_dark}
          alt=""
          className="h-9 md:h-10"
        />
      </div>

      <button
        onClick={toggleTheme}
        className="text-2xl  p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <Icon />
      </button>
    </header>
  );
};

export default Header;
