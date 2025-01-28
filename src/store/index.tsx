import { createContext, ParentComponent, useContext } from "solid-js"
import { PokemonService } from "./services/pokemon"


export type RootState = {
    pokemonService: ReturnType<typeof PokemonService>
};


const rootState: RootState = {
    pokemonService: PokemonService()
};

const StoreContext = createContext<RootState>();

export const useAppSelector = () => useContext(StoreContext)!

export const StoreProvider: ParentComponent = (props) => {
    return <StoreContext.Provider value={rootState}>{props.children}</StoreContext.Provider>
};
