import {Component} from "react";
import card1 from "../../../image/card1.jpg"
import card2 from "../../../image/card6.jpg"
import card3 from "../../../image/card8.jpg"
import card4 from "../../../image/travel1.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
export class Home extends Component {
    render() {
        return (

            <>
                <div id="home" className="content grid grid-cols-4 gap-2  mt-4 mr-12">

                    <div className="card max-w-xl  rounded overflow-hidden shadow-lg gap-3 ml-10">
                        <img className="card-image rounded w-8/12 m-auto" src={card1}
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ml-8">Best Price Guarantee</div>
                            <p className="text-gray-700 text-base">
                                A small river named Duden flows by their place and supplies.
                            </p>
                        </div>
                        <div className="px-3 py-2  ">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>


                    <div className="card max-w-xl  rounded overflow-hidden shadow-lg gap-3 ml-10">
                        <img className="card-image rounded w-8/12 m-auto" src={card2}
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ml-8">Best Price Guarantee</div>
                            <p className="text-gray-700 text-base">
                                A small river named Duden flows by their place and supplies.
                            </p>
                        </div>
                        <div className="px-3 py-2  ">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>


                    <div className="card max-w-xl  rounded overflow-hidden shadow-lg gap-3 ml-10">
                        <img className="card-image rounded w-8/12 m-auto" src={card3}
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ml-8">Best Price Guarantee</div>
                            <p className="text-gray-700 text-base">
                                A small river named Duden flows by their place and supplies.
                            </p>
                        </div>
                        <div className="px-3 py-2  ">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>


                    <div className="card max-w-xl  rounded overflow-hidden shadow-lg gap-3 ml-10">
                        <img className="card-image rounded w-8/12 m-auto" src={card4}
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ml-8">Best Price Guarantee</div>
                            <p className="text-gray-700 text-base">
                                A small river named Duden flows by their place and supplies.
                            </p>
                        </div>
                        <div className="px-3 py-2  ">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>


                    {/*<div className="card max-w-fit rounded overflow-hidden shadow-lg">*/}
                    {/*    <img className="w-8/12 m-auto" src="https://tailwindcss.com/img/card-top.jpg"*/}
                    {/*         alt="Sunset in the mountains"/>*/}
                    {/*    <div className="px-6 py-4">*/}
                    {/*        <div className="font-bold text-xl mb-2 ml-8">The Coldest Sunset</div>*/}
                    {/*        <p className="text-gray-700 text-base">*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!*/}
                    {/*            Maiores et*/}
                    {/*            perferendis eaque, exercitationem praesentium nihil.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="px-3 py-2  ">*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="card max-w-fit rounded overflow-hidden shadow-lg">*/}
                    {/*    <img className="w-8/12 m-auto" src="https://tailwindcss.com/img/card-top.jpg"*/}
                    {/*         alt="Sunset in the mountains"/>*/}
                    {/*    <div className="px-6 py-4">*/}
                    {/*        <div className="font-bold text-xl mb-2 ml-8">The Coldest Sunset</div>*/}
                    {/*        <p className="text-gray-700 text-base">*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!*/}
                    {/*            Maiores et*/}
                    {/*            perferendis eaque, exercitationem praesentium nihil.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="px-3 py-2  ">*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="card max-w-fit rounded overflow-hidden shadow-lg">*/}
                    {/*    <img className="w-8/12 m-auto" src="https://tailwindcss.com/img/card-top.jpg"*/}
                    {/*         alt="Sunset in the mountains"/>*/}
                    {/*    <div className="px-6 py-4">*/}
                    {/*        <div className="font-bold text-xl mb-2 ml-8">The Coldest Sunset</div>*/}
                    {/*        <p className="text-gray-700 text-base">*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!*/}
                    {/*            Maiores et*/}
                    {/*            perferendis eaque, exercitationem praesentium nihil.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="px-3 py-2  ">*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>*/}
                    {/*        <span*/}
                    {/*            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </>

        );
    }
}