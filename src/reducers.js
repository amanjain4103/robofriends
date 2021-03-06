import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
    searchField =""
}

export const SearchRobots = ({state=initialState,action={}}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD : 
            return Object.assign({},state,  {searchField : action.payload} );
            break;
        default : return state;
    }
}