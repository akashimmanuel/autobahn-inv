import { postTypes } from "../../actionTypes/postTypes";
import { PostsState } from "../../../types/types";


const initialState: PostsState = {
    pending: false,
    posts: [],
    error: null
};

function postReducer(state = initialState, action: any) {
    console.log(action);
    const pos = [...state.posts]

    switch (action.type) {
        case postTypes.FETCH_POST_REQUEST:
            return {
                ...state,
                pending: true
            };
        case postTypes.FETCH_POST_SUCCESS:
            return {
                ...state,
                pending: false,
                posts: action.payload.posts,
                error: null
            };
        case postTypes.FETCH_POST_FAILURE:
            return {
                ...state,
                pending: false,
                posts: [],
                error: action.payload.error
            };
        case postTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                pending: false,
                posts: state.posts.filter(post => post.id !== action.payload.id),
                error: null
            };
        case postTypes.ADD_POST_SUCCESS:
            pos.push({ ...action.payload })
            return {
                ...state,
                pending: false,
                posts: pos,
                error: null
            };
        case postTypes.EDIT_POST_SUCCESS:
            const m = pos.map((p) => {
                if (p.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...p }
                }
            })

            return {
                ...state,
                pending: false,
                posts: m,
                error: null
            };
        default:
            return {
                ...state
            };
    }
};

export default postReducer;