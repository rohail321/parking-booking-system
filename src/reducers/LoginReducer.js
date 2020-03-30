const initialState={
    isAuth:false,
    email:'',
    id:'',
    
}

function LoginReducer(state=initialState,action) {
    switch (action.type) {
        case 'Login':
            return{...state,
            isAuth:true,
            email:action.email,
            id:action.id
        }
    
        default:
            return state
            
    }
    
}
export default LoginReducer