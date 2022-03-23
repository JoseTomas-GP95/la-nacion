import React, { useState, useEffect } from 'react'
import { ArticleCard } from './ArticleCard'
import axios from 'axios'

export const BodyContainer = () => {

  // STATE
  const [articleList, setArticleList] = useState([])
  // EFFECT
  useEffect(() => {
    axios
      .get('https://api-test-ln.herokuapp.com/articles')
      .then(articles => setArticleList(articles.data.articles))
      .catch(error => console.log(error))
  }, [])

  // console.log(articleList)

  return (
    <div className='h-44 mt-10 flex justify-center'>
      <ArticleCard articleList={articleList}/>
    </div>
  )
}