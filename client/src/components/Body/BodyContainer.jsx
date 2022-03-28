import React, { useState, useEffect } from 'react'
import { ArticleCard } from './ArticleCard'
import { helpGetArticles } from '../../helpers/helpGetArticles'

export const BodyContainer = () => {
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    const asyncAwaitFunction = async () => {
      const articles = await helpGetArticles()
      setArticleList(articles.data.articles)
    }
    asyncAwaitFunction()
  }, [])

  return (
    <div className='h-44 mt-10 flex justify-center'>
      <ArticleCard articleList={articleList}/>
    </div>
  )
}