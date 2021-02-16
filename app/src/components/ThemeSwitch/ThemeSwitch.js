import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "./ThemeContextProvider"
import Switch from "react-switch"

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [themeIn, setThemeIn] = useState("light")

  useEffect(() => {
    setThemeIn(theme)
  }, [theme])

  useEffect(() => {
    document.body.className = themeIn
  }, [themeIn])

  const handleThemeToggle = e => {
    if (themeIn === "light") {
      setThemeIn("dark")
      setTheme("dark")
    } else {
      setThemeIn("light")
      setTheme("light")
    }
  }
  return (
    <div className="flex justify-between items-center pt-3 pr-10">
      <div></div>
      <div></div>
      <div>
        <Switch
          checked={themeIn === "light" ? false : true}
          onChange={handleThemeToggle}
          className="react-switch"
        />
      </div>
    </div>
  )
}

export default ThemeSwitch
