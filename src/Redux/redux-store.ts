import {applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

export type AppStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: UserReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

// @ts-ignore
window.store = store