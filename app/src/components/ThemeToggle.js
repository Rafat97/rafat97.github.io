import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="flex justify-between items-center pt-3 pr-10">
          <div>
            <input
                className="hidden"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
          </div>
          <div
            className={`w-12 h-7 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
              theme === "dark" ? `bg-green-400` : ``
            } `}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                theme === "dark" ? `translate-x-5` : ``
              } `}
            ></div>
          </div>
        </label>
      )}
    </ThemeToggler>
  )
}