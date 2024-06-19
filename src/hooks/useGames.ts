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
  metacritic: number
};

 const useGames = () => {
  return useData<Game>('/games')
}
export default useGames;