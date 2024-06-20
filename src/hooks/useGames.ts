import useData from "./useData";
import { Genre } from "./useGenres";


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
  metacritic: number
};

 const useGames = ( selectedGenre : Genre | null) => {
  return useData<Game>('/games', 
      {
         params: { genre: selectedGenre?.id }
      },
      [selectedGenre?.id]
    );
   
   }
export default useGames;