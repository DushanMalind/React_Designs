import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {About} from "../about/About";

export class MainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>


                </Routes>
            </>
        );
    }
}