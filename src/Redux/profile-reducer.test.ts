import {
    addPostActionCreator, deletePost,
    profilePageType,
    profileReducer,
    setStatus,
    togglePreloader
} from "./profile-reducer";

let startState: profilePageType = {
    status: 'Hello',
    postDate: [],
    profile: null,
    preloader: false
};

beforeEach(() => {

    startState = {
        status: 'Hello',
        postDate: [
            {id: 1, message: `'I'm fine`, picture: '', like: '', dislike: '', peopleLike: 1},
            {id: 2, message: `'I'm good`, picture: '', like: '', dislike: '', peopleLike: 2},
            {id: 3, message: `'Great`, picture: '', like: '', dislike: '', peopleLike: 3},
            {id: 4, message: `'lovely`, picture: '', like: '', dislike: '', peopleLike: 5},
        ],
        profile: null,
        preloader: false
    }
});

test('must be added a new post', () => {
    const endState = profileReducer(startState, addPostActionCreator("Hello world!"))

    expect(endState.postDate.length).toBe(5);
    expect(endState.postDate[4].message).toBe("Hello world!");
});

test('must be changed a status', () => {
    const endState = profileReducer(startState, setStatus("I'll merry"))
    const keys = Object.keys(endState);

    expect(endState.status).toBe("I'll merry");
    expect(keys.length).toBe(4)
});


test('must be changed added an array date ', () => {

    const endState = profileReducer(startState, togglePreloader(true))

    const keys = Object.keys(endState);


    expect(keys.length).toBe(4)
    expect(endState.preloader).toBe(true);
});


test('should be deleted a post', () => {

    const endState = profileReducer(startState, deletePost(3))

    expect(endState.postDate.length).toBe(3);
});