import React from 'react'

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` : "bg-caribbean-green text-white border-caribbean-green"} rounded-full ${fullWidth && ' w-full'} `}>
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow right" className=' ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button