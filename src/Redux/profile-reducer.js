const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updatePostTextActionCreator = (elem) => ({type: UPDATE_POST_TEXT, info: elem});

let initialState = {
    postData: [
        {id: '1', message: 'Hello, how are you', likes: '12'},
        {id: '2', message: 'Hey yo', likes: '30'},
        {id: '2', message: 'My first post', likes: '18'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 1
            }

            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.info;
            return state;
        default:
            return state;
    }
}

export default profileReducer;