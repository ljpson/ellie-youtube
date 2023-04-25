import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
//import FakeYoutubeClient from '../api/fakeYoutubeClient';

export const YoutubeApiContext = createContext();

//찐 Youtube
const client = new YoutubeClient();
//Mok 데이터 
//const client = new FakeYoutubeClient();

const youtube = new Youtube(client);

export function YoutubeApiProvider({children}){
    return(
        <YoutubeApiContext.Provider value={{ youtube }}>
            {children}
        </YoutubeApiContext.Provider>
    )
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}