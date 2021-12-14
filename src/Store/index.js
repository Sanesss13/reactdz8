import { applyMiddleware, createStore, compose, } from "redux";
import { profileReducer } from "./profile/reducer"
import { combineReducers } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./MESSAGE/reducer";
import { middleware } from "../Middlewares";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
