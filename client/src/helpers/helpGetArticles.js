import axios from 'axios'

export const helpGetArticles = async () => {
  try {
    const articlesList = await axios.get('https://api-test-ln.herokuapp.com/articles')
    return articlesList
  } catch (error) {
    return error
  }
}