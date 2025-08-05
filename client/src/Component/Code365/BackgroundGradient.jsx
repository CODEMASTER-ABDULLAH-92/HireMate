import React from 'react'

const BackgroundGradient = () => {
  return (
    <div>
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/2 opacity-50 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)]"></div>
      </div>
    </div>
  )
}

export default BackgroundGradient
