import React from 'react'
import { useContext, useEffect, useState } from "react";
import Article from "./article";
import { ArticlesContext } from "../contexts/ArticlesContexts";

const Articles = ({ }) => {
    let { articles } = useContext( ArticlesContext )

    return (
        <div>
            <h4>
                Mis Posts en  <span>dev.to</span>
            </h4>
            <ul>
                <li className='post'>
                {
                    articles.map(
                        (article) =>  <Article articleInfo={article} key={article.key} />
                    )
                }
                </li>
            </ul>
        </div>
  )
}
export default Articles