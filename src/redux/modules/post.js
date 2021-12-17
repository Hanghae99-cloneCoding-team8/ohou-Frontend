import { createAction} from 'redux-actions'
import Api from '../../shared/Api'
// initialState  

const GET_POST = 'GET_POST'

const initialState = {
      postlist : []
}

const getpost = createAction(GET_POST, ) 