import { AnyAction } from 'redux'
import { toggle_user, clear_user, User} from '../actions/user'

export interface authState {
  isAuthenticated: boolean
  user: User | null
}

const initState : authState= { isAuthenticated: false, user: null }
function auth(state = initState, action: AnyAction) {
  switch (action.type) {
    case toggle_user:
      return { isAuthenticated: !!action.payload, user: action.payload }
    case clear_user:
      return { isAuthenticated: false, user: {} }
    default:
      return state
  }
}

export default auth