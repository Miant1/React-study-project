const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

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
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 1
            }

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_POST_TEXT){
            this._state.profilePage.newPostText = action.info;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return (
        { type: ADD_POST}
    )
}

export const updatePostTextActionCreator = (elem) => {
    return (
        {type: UPDATE_POST_TEXT, info: elem}
    )
}

export default store;