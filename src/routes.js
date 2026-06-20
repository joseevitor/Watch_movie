import Begin from "pages/Begin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Begin />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;