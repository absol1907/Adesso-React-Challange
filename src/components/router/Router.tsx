import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Units from "../../pages/Units/Units";
import UnitDetails from "../../pages/Unit Details/UnitDetails"
import P404 from "../../pages/P404/P404"


const Router = () => {

    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to ="/home" replace/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/units" element={<Units/>}></Route>
                <Route path='/units/:unitId' element={<UnitDetails />}></Route>
                <Route path="*" element={<P404/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )

}

export default Router;