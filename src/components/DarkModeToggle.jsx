import React from 'react'
import { useState } from 'react'

const DarkModeToggle = ({ isDark, setIsDark }) => {

  return (
    <button onClick={() =>setIsDark(!isDark)}>{isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
  )
}

export default DarkModeToggle
