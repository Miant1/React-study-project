import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', message: 'Hello, how are you', likes: '12'},
                {id: '2', message: 'Hey yo', likes: '30'},
                {id: '2', message: 'My first post', likes: '18'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        friendsSidebar: {
            friends: [
                {name: "Anna"},
                {name: 'Pasha'},
                {name: 'Lola'},

            ]
        }
    },
    _callSubscriber() {
        console.log('aaaaa')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    updatePostText(info) {

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsSidebar = sidebarReducer(this._state.friendsSidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;