import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'appContent/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}
const appContentReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return { 
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeAppContent = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}
export default appContentReducer;