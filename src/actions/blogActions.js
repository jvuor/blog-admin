import blogService from '../services/blogs'

export const actionBlogInit = () => {
  return async (dispatch) => {
    const data = await blogService.getAll()
    dispatch({
      type: 'BLOGINIT',
      data: data
    })
  }
}

export const actionBlogAdd = (data) => {
  return async (dispatch) => {
    const response = await blogService.postBlog(data)
    
    dispatch({
      type: 'BLOGNEW',
      data: response
    })
  } 
}

export const actionBlogDelete = (id) => {
  return async (dispatch) => {
    //BUG: blog entry does not get removed from the corresponding user data, fixed by reloading (thanks nosql)
    await blogService.deleteBlog(id)

    dispatch({
      type: 'BLOGDELETE',
      id: id
    })
  }
}

export const actionBlogEdit = (data) => {
  return async (dispatch) => {
    const response = await blogService.editBlog(data)

    dispatch({
      type: 'BLOGEDIT',
      id: data.id,
      title: data.title,
      content: data.content,
      sticky: data.sticky
    })
  }
}