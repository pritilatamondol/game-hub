import { GameQuery } from "../App";
import useData from "./useData";

export type Platform ={
  id: number;
  name: string;
  slug: string
}
export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[],
  metacritic: number;
  rating_top: number
};

 const useGames = ( gameQuery : GameQuery) => {
  return useData<Game>('/games', 
      {
         params: { 
            genre: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
            
          }
      },
      [ gameQuery ] 
    );
   
   }
export default useGames;