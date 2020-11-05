import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type AppStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
})

let store = createStore(reducers);


export default store;

//const x = {y: [] as number[]}
//type XT = typeof x
//x.y = [1, 2]