import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";

export type AppStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: UserReducer
})

let store = createStore(reducers);


export default store;
