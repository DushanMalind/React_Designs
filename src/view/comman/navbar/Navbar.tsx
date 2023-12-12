import {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border  bg-stone-900 border-gray-100 bg-blend-darken py-3 backdrop-blur-lg md:top-0 md:rounded-3xl lg:max-w-screen-lg shadow-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <h1 className="font-mono text-base font-bold text-white hover:text-red-600 cursor-pointer ">Travel System</h1>
                            <a aria-current="page" className="flex items-center " href="/">
                                <img className="h-8 w-auto ml-2 pb-2"
                                     src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                     alt=""/>
                                <p className="sr-only">Website Title</p>
                            </a>

                        </div>
                        {/* <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a aria-current="page"
                               className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                               href="#">How it works</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                               href="#">Pricing</a>
                        </div>*/}
                        <ul className="hidden md:flex md:items-end  md:gap-5 mr-40 font-mono text-base font-bold text-white">
                            <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 md:rounded-2xl ">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 md:rounded-2xl ">
                                <Link to="/home">About</Link>
                            </li>
                            <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 md:rounded-2xl ">
                                <Link to="/home">Tours</Link>
                            </li>
                            <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 md:rounded-2xl ">
                                <Link to="/home">Blogs</Link>
                            </li>
                            <li className="transition-all duration-200 hover:bg-gray-50 hover:text-red-600 md:rounded-2xl ">
                                <Link to="/home">Contact</Link>
                            </li>
                        </ul>
                        <div className="flex items-center justify-end gap-4">
                        <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                               href="/login">Sign in</a>
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                               href="/login">Login</a>
                        </div>
                    </div>
                </div>



            </header>
        );
    }
}