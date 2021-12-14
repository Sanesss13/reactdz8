export const messageListSelector = (state) => state.chats.chatList;
export const currentChatMessagesSelector = (state, chtaId) => state.chats.chatList[chatId];