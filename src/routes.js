import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritesProvider from "contexts/Favorites";
import Begin from "pages/Begin";
import Favorites from "pages/Favorites";
import NotFounded from "pages/NotFounded";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Begin />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                        <Route path="/:id" element={<Player />} ></Route>
                        <Route path="*" element={<NotFounded />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;