import React from 'react'

const CreateNewBlogForm = (props) => (
  <div>
    <h1>create new</h1>
    <form onSubmit={props.handleNewBlog}>
    <div>
      Title:
        <input
        type="text"
        value={props.title}
        name="Title"
        onChange={props.handleTitleInput}
      />
    </div>
    <div>
      Author:
        <input
        type="password"
        value={props.author}
        name="Author"
        onChange={props.handleAuthorInput}
      />
    </div>
    <div>
      url:
        <input
        type="password"
        value={props.url}
        name="Author"
        onChange={props.handleUrlInput}
      />
    </div>
    <button type="submit">Create</button>
  </form>      
  </div>

)
export default CreateNewBlogForm