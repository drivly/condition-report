import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center ml-3 rotate-90">
      <input
        type="checkbox"
        className="opacity-0 absolute checkbox"
        name="toggleTheme"
        id="checkbox"
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label
        htmlFor="checkbox"
        className="flex justify-between items-center w-8 h-4 bg-dark-2 rounded-2xl label p-0.5 relative transform scale-150 cursor-pointer">
        <SunIcon className="h-3 w-3 text-yellow-400" />
        <MoonIcon className="h-3 w-3 text-green-accent rotate-180" />
        <div className="w-3 h-3 absolute bg-gray-1 rounded-full top-0.5 left-0.5 ball transition-transform duration-200" />
      </label>
    </div>
  );
};

export default DarkModeToggle;
