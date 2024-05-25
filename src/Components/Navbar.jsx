import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full font-bold text-3xl ">BDATA.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-slate-500 bg-gray-900 ease-in-out duration-500" : "fixed left-[-100] hidden"}>
                <h1 className="w-full font-bold text-3xl text-green-500 m-4">REACT.</h1>
                <ul className="uppercase">
                    <li className="p-4 border-b border-b-gray-600">Home</li>
                    <li className="p-4 border-b border-b-gray-600">Company</li>
                    <li className="p-4 border-b border-b-gray-600">Resources</li>
                    <li className="p-4 border-b border-b-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar