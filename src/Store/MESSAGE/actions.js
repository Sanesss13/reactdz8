import { ADD_MESSAGE_ACTION } from "./constants"

export const addMessageAction = ({ chatId, author, message }) => ({
    type: ADD_MESSAGE_ACTION,
    payloud: { chatId, author, message },
})
export const addMessageActionWithThunk = (payload) => (dispatch, getState) => {
    dispatch(addMessageAction(payload));
    if (payload.author === "Поддержка") {
        setTimeout(() => {
            const botAnswer = {
                message: "Спасибо, мы ценим вашу помощь! Ждите ответа.",
                author: "Поддержка",
                chatId: "1234",
            };
            dispatch(addMessageAction(botAnswer));
        }, 1500);
    }
};


