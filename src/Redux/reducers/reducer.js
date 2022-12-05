const initialState = {
    loginInformation: {},
    carddata: []

}
const myStore = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINUSER":
            return {
                ...state,
                loginInformation: action.payload
            }
        case "CARDDATA":
            return {
                ...state,
                carddata: [...state.carddata,action.payload]
            }
        default: return state
    }
}
export default myStore