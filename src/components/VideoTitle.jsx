import React from 'react'

const VideoTitle = ({ title, overview }) => {

    




  return (
    <div className="w-full absolute top-0 left-0 px-12 pt-40 text-white h-screen">

      {/* Title */}
      <h1 className="text-5xl font-bold w-1/2">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-6 text-lg w-1/3 text-gray-200 leading-relaxed">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-500 transition">
          More Info
        </button>
      </div>

    </div>
  )
}

export default VideoTitle
