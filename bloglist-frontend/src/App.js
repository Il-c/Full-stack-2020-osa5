import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import CreateNewBlogForm from './components/CreateNewBlogForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser]= useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')



  useEffect (  async() => {
    const blogs = await blogService.getAll()
    setBlogs( blogs )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    } 
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
     
      const user = await loginService.login({ username, password })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('Wrong credentials')
     // setErrorMessage('Wrong credentials')
      setTimeout(() => {
      //  setErrorMessage(null)
      }, 5000)
    }
    
  }

  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    setUsername('')
    setPassword('')
    setUser(null)
  }
  const handleNewBlog = () => {

  }
  const  handlePasswordInput= (event) => {
    setPassword(event.target.value)
  }
  const  handleUsernameInput= (event) => {
    setUsername(event.target.value)
  }
  const  handleTitleInput= (event) => {
    setTitle(event.target.value)
  }
  const  handleAuthorInput= (event) => {
    setAuthor(event.target.value)
  }
  const  handleUrlInput= (event) => {
    setUrl(event.target.value)
  }


  if (!user){
    return (
      <div>
        <h2>Log in to application</h2>
        <LoginForm handleLogin={handleLogin} 
          handleUsernameInput={handleUsernameInput}
          handlePasswordInput={handlePasswordInput}
          username = {username} password={password}/>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Blogs</h2>
        <p>{user.name} logged in
        <button onClick={logOut}>logout</button>
        </p>
        <CreateNewBlogForm handleNewBlog={handleNewBlog} 
          handleTitleInput={handleTitleInput}
          handleAuthorInput={handleAuthorInput}
          handleUrlInput={handleUrlInput}
          title={title} author={author} url={url}/>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
  }
}
//
export default App