import React from 'react'

const Card = ({ imgUrl, heading, lastDate, mode, fee }) => {
  return (
    <>
    <div className=" group cursor-pointer min-h-[54vh] flex flex-col justify-center min-w-sm w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl  duration-600 gap-5 my-6 border-2 border-gray-200 relative  transfrom hover:-translate-y-1 transition-transform ease-in-out">
                <img
                    src={imgUrl}
                    alt={"Hackathon Image"}
                    className="w-full h-48  object-cover absolute top-0"
                />
                <div className=" group p-4 absolute top-52">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700">
                        {heading}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Last Date:</span> {lastDate}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Mode:</span> {mode}
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                        <span className="font-semibold">Fees:</span> {fee}
                    </p>
                </div>
            </div>
    </>
  )
}

export default Card