import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

function PageGround(){
    return(
        <main>
            <Cabecalho />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Rodape />
        </main>
    )
}

export default PageGround;