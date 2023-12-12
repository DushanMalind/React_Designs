import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import './image.css'
import {url} from "node:inspector";

export class NaveBar extends Component {
    render() {
        return (
            <header>
                <div id="image" className="p-4 bg-slate-900 flex  font-mono text-base font-bold text-white">
                    <h1 className="text-3xl text-secondory hover:text-red-600 cursor-pointer">Travel System</h1>

                    {/* <img className="h-7 w-7 ml-4 pt-1 rounded-full" src={logo} alt="Logo"/>
*/}
                    <ul className="list-none gap-10 flex ml-[100px] mt-2 ">
                        <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 rounded-b-full ">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 rounded-b-full">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 rounded-b-full">
                            <Link to="/Tours">Tours</Link>
                        </li>
                        <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 rounded-b-full">
                            <Link to="/Blogs">Blogs</Link>
                        </li>
                        <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 rounded-b-full">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="ml-auto mt-2 pl-2 pr-2">
                        <button className="relative mr-10 rounded-2xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white
                     shadow-sm transition-all duration-150 hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Sing In
                        </button>
                        <button className="relative mr-10 rounded-2xl bg-emerald-600  px-3 py-2 text-sm font-semibold text-white
                     shadow-sm transition-all duration-150 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Login In
                        </button>
                    </div>

                </div>


                <div id="content" className="content grid grid-cols-1 gap-4">
                    <div className="px-20  ">
                        <h1 className="text-6xl mt-2 font-mono">Travel System</h1>
                        <h1 className="text-6xl mt-3 font-mono">Traveling Fun And Enjoy</h1>
                        <p className="font-mono">Find great places to stay, eat, shop, or visit from local experts</p>
                    </div>

                    {/*<div className="px-28  mt-4">
                        <h1>hhhhh</h1>
                    </div>*/}
                </div>
            </header>
        );
    }
}