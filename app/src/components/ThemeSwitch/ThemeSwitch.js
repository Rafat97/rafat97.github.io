import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "./ThemeContextProvider"
import Switch from "react-switch"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun,faMoon} from '@fortawesome/free-solid-svg-icons'

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
    <div className="flex justify-between items-center py-3 pr-10">
      <div></div>
      <div></div>
      <div>
        <Switch
          checked={themeIn === "light" ? false : true}
          onChange={handleThemeToggle}
          offColor="#212529"
          onColor="#fff"
          offHandleColor="#fff"
          onHandleColor="#212529"
          handleDiameter={28}
          height={40}
          width={70}
          uncheckedIcon={
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "orange",
              paddingRight: 2
            }}
            >
              <FontAwesomeIcon icon={faSun} size="1x" />
            </div>
          }
          checkedIcon={
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "black",
              paddingRight: 2

            }}
            >
              <FontAwesomeIcon icon={faMoon} size="1x" />
            </div>
          }
          className="react-switch"
        />
      </div>
    </div>
  )
}

export default ThemeSwitch
