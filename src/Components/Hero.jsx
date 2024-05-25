import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-[-96px]">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Grow with Data</h1>
                <div className="flex justify-center items-center">
                    <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">Fast,Flexible financing for</p>
                    <ReactTyped className="text-xl sm:text-4xl md:text-5xl font-bold md:pl-4 pl-2"
                        strings={[
                            "BTB",
                            "BTC",
                            "SASS"
                        ]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="text-xl md:text-2xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB,BTC and SASS platforms.</p>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] rounded mx-auto my-6 py-3 text-black">Get Started</button>
            </div>
        </div>
    )
}

export default Hero