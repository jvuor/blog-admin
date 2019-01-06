const reducer = (store = null, action) => {
  if(action.type === 'BLOGNEW') {
    return [action.data, ...store]
  }
  if(action.type === 'BLOGDELETE') {
    const id = action.id
    const newStore = store.filter(m => m.id !== id)
    return newStore
  }
  if(action.type === 'BLOGINIT') {
    return action.data
  }
  if(action.type === 'BLOGEDIT') {
    const editedIndex = store.findIndex(blog => blog.id === action.id)
    const newBlogData = {
      ...store[editedIndex],
      title: action.title,
      content: action.content,
      sticky: action.sticky,
      published: action.published
    }

    return store.map(blog => blog.id === newBlogData.id? newBlogData : blog)
  }

  return store
}

export default reducer
