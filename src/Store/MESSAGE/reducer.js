import { ADD_MESSAGE_ACTION } from "./constants"
import { store } from "..";
const initialState = {
    messageList: [],
    qwerty: ""
}
export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION:
            const { message, author, chatId } = action.payload;
            const currentChatMessages = store.messageList[chatId] || []; // []
            return {
                ...store,
                messageList: {
                    ...store.messageList,
                    [chatId]: [...currentChatMessages, { message, author, id: "12345" }],
                },
            };

        default:
            return state
    }
}


