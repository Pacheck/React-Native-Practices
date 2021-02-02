const initialState = { red: 0, green: 0, blue: 0 }

export const reducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? null : { ...state, red: state.red + action.payload }
        case 'green':
            return { ...state, green: state.green + action.payload }
        case 'blue':
            return { ...state, blue: state.blue + action.payload }
        default:
            return state;
    }

}

export default reducer;