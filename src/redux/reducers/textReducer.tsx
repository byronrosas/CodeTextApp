import { type as sendTextType } from '../actions/sendText';
import { TextObj } from '../../model/textobj';
let defaultState:TextObj = { text:''};

export default (state = defaultState,  action:any) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case sendTextType: 		
		updated = action.payload;		
		return updated

    default:
		return state
    }
}