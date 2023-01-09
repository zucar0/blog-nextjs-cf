import { useContext } from "react"
import { ArticlesContext } from "../contexts/ArticlesContexts"

const ArticlesLink = ({}) => {
    let { articles } = useContext(ArticlesContext);
    return(
        <a href="#articulos">Te invito a leee mis {articles.length} artículos</a>
    )
}

export default ArticlesLink;