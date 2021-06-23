const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const addMessageCreator = () => ({ type: ADD_MESSAGE});
export const updateMessageTextCreator = (body) => ({type: UPDATE_MESSAGE_TEXT, body: body});

let initialState = {
    messageData: [
        {message: 'Hi, how are you?', id: '1'},
        {message: 'I`am good, and you?', id: '2'},
        {message: 'Nice to meet you', id: '3'},
    ],
    newMessageBody: '',

    dialogData: [
        {name: 'Anton', id: '1'},
        {name: 'Rostik', id: '2'},
        {name: 'Egor', id: '3'},
        {name: 'Sergei', id: '4'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case ADD_MESSAGE:
            let info = state.newMessageBody;
            let newBodyMessage = {
                message: info,
                id: '4'
            }

            state.messageData.push(newBodyMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;