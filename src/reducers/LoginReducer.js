const initialState={
    isAuth:true,
    email:'',
    id:'',
    
}

function LoginReducer(state=initialState,action) {
    switch (action.type) {
        case 'Login':
            return{...state,
            isAuth:action.isAuth,
            email:action.email,
            id:action.id
        }
    
        default:
            return state
            
    }
    
}
export default LoginReducer