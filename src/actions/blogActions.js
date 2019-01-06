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
      id: response.id,
      title: response.title,
      content: response.content,
      sticky: response.sticky,
      published: response.published
    })
  }
}

export const actionSetPublishStatus = (id, status) => {
  return async (dispatch) => {
    const response = await blogService.editBlog({id: id, published: status})
    console.log(response)

    dispatch({
      type: 'BLOGEDIT',
      id: response.id,
      title: response.title,
      content: response.content,
      sticky: response.sticky,
      published: response.published
    })
  }
}
