import { noteData } from './firebaseConnect'

var redux = require('redux');

const productInitialState = {
    productDetail: {},
    statusLogin: false,
    statusAcc: "",
    sttLoginUser: false,
    user: {},
    numberProduct: {},

    alertStatus: false,
    alertType: "",
    alertContent: ""
}

const allReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "GET_DATA_PRODUCT":
            return { ...state, productDetail: action.dataProduct }
        case "DISPLAY_LOGIN":
            return { ...state, statusLogin: !state.statusLogin }
        case "CHECK_STATUS_ACC":
            return { ...state, statusAcc: action.statusAccount }
        case "ADD_ACCOUNT":
            noteData.push(action.getUser);
            return state
        case "EDIT_STATUS_LOGIN":
            return { ...state, sttLoginUser: !state.sttLoginUser }
        case "GET_INFO_USER":
            return { ...state, user: action.infouser }
        case "GET_NUMBER_PRODUCT":
            return { ...state, numberProduct: action.numberProduct }
        case "ALERT_ON":
            return { ...state, alertStatus: true , alertType : action.alertType, alertContent:action.alertContent}
        case "ALERT_OFF":
            return { ...state, alertStatus: false }
        case "GET_OBJECT":
            noteData.child(action.getObject.key).update({
                product: action.getObject.product
            })
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);
export default store;