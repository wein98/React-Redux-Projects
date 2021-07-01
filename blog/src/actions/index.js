import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder';

//  overfetching solution 2
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // this will automatically update the redux store and dispatch to all the reducers
    await dispatch(fetchPosts());
    // console.log("fetched posts")

    // go through all the posts and just pull of 'userId' of each post and store all the unique ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))

    // _.chain compact code
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value(); // execute
}

// action creator that uses redux-thunk wired up in root index.js
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data })
}

// using lodash for overfetching solution 1
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data })
// })