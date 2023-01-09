import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext({});

export const ArticlesProvider = ({ children }) =>{

    const[user, setUser] = useState("zucar0");
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        //Hacer fetch
        fetchDevTo().then ( respuesta => setArticles(respuesta));

        async function fetchDevTo(){
            let response = await fetch(`https://dev.to/api/articles?username=${user}`);
            return await response.json();
        }
        //Actualizar los artículos
        // setArticles(devtoApi);
    }, []);

    return(
        <ArticlesContext.Provider value={{username: user, articles: articles}}
        >
            {children}
        </ArticlesContext.Provider>
    )
};