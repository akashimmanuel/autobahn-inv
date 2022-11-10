import { postTypes } from "../../actionTypes/postTypes";
import {
    DeletePostsFailure,
    DeletePostsSuccess,
    FetchPostsFailure,
    FetchPostsFailurePayload,
    FetchPostsRequest,
    FetchPostsSuccess,
    FetchPostsSuccessPayload
} from "../../../types/types";

export const fetchPostsRequest = (): FetchPostsRequest => ({
    type: postTypes.FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (
    payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
    type: postTypes.FETCH_POST_SUCCESS,
    payload
});

export const fetchPostsFailure = (
    payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
    type: postTypes.FETCH_POST_FAILURE,
    payload
});



export const deletePostsRequest = (id?: any): any => ({
    type: postTypes.DELETE_POST_REQUEST,
    payload: id
});

export const deletePostsSuccess = (
    payload: any
): DeletePostsSuccess => ({
    type: postTypes.DELETE_POST_SUCCESS,
    payload
});

export const deletePostsFailure = (
    payload: FetchPostsFailurePayload
): DeletePostsFailure => ({
    type: postTypes.DELETE_POST_FAILURE,
    payload
});

export const addPostsRequest = (postData?: any): any => ({
    type: postTypes.ADD_POST_REQUEST,
    payload: postData
});

export const addPostsSuccess = (
    payload: any
): any => ({
    type: postTypes.ADD_POST_SUCCESS,
    payload
});

export const addPostsFailure = (
    payload: any
): any => ({
    type: postTypes.DELETE_POST_FAILURE,
    payload
});


export const updatePostsRequest = (postData?: any): any => ({
    type: postTypes.EDIT_POST_REQUEST,
    payload: postData
});
export const updatePostsSuccess = (
    payload: any
): any => ({
    type: postTypes.EDIT_POST_SUCCESS,
    payload
});

export const updatePostsFailure = (
    payload: any
): any => ({
    type: postTypes.EDIT_POST_FAILURE,
    payload
});