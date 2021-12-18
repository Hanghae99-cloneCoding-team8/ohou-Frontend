import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import  {Api}  from '../../shared/Api';


const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'

const initialState = {
  content: [],
  password: "",
}

const getComment = createAction(GET_COMMENT, (content) => ({content}))
const addComment = createAction(ADD_COMMENT, (content) => ({content}))


// 여기서 부터 작성~!!!!
// middlewares
const getCommentAction = (productId) => {
  return async (dispatch, getState, { history }) => {
    const comment_res = await Api?.comment.getList()
    let comment_data = {
      ...comment_res.data,
    }
    dispatch(getComment(comment_data))
  }
}

const addCommentAction = (password,content,productId) => {
  return async (dispatch, getState,{history}) => {
    console.log(password,content,productId);
    const addComment_res = await Api?.comment.write(content,password,productId)
      console.log(addComment_res);
      
    if (password==="") {
      alert('패스워드를 입력해주세요!')
    } 
    if (content === "") {
          alert("내용을 입력해주세요!")
    }
    dispatch(addComment(addComment_res.data));
  }
}

// reducer
export default handleActions({
  [GET_COMMENT]: (state, action) => produce(state, (draft) => {
      const newList = action.payload.content;
      draft.list = newList;
//     draft.has_next = action.payload.post_data.next
//     draft.page = action.payload.post_data.page
  }),
  [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.content.push(action.payload.content);
      }),

}, initialState)

const actionCreators = {
      getCommentAction,
      addCommentAction
}

export { actionCreators }