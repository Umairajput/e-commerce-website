
export const LoginUserData = (loginInformation) => async (dispatch) => {
    dispatch({
        type: 'LOGINUSER',
        payload: loginInformation
    })
}
export const CardData = (carddata) => async (dispatch) => {
    dispatch({
        type: 'CARDDATA',
        payload: carddata
    })
}