import jsonPlaceholder from '../apis/jsonPlaceHolder';

// action creator that uses redux-thunk wired up in root index.js
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}