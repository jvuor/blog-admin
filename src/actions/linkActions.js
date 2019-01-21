import linkService from '../services/links'

export const actionLinksInit = () => {
  return async (dispatch) => {
    const data = await linkService.getAll()
    dispatch({
      type: 'LINKINIT',
      data: data
    })
  }
}

export const actionLinkAdd = (data) => {
  return async (dispatch) => {
    const response = await linkService.postLink(data)

    dispatch({
      type: 'LINKNEW',
      data: response
    })
  }
}
