import { all, call, put, takeLatest } from "redux-saga/effects";
import { addPostsFailure, addPostsSuccess, deletePostsFailure, deletePostsSuccess, fetchPostsFailure, fetchPostsSuccess, updatePostsFailure, updatePostsSuccess } from "../../redux/actions/postActions/postActions";
import { postTypes } from "../../redux/actionTypes/postTypes";
import PostService from "../../service/postService";
import { IPost } from "../../types/types";


const postService = new PostService()


function* fetchPostsSaga() {
    try {
        const response: IPost[] = yield call(postService.fetchPost);
        yield put(
            fetchPostsSuccess({
                posts: response
            })
        );
    } catch (e) {
        yield put(
            fetchPostsFailure({
                error: e as string
            })
        );
    }
}

function* deletePostsSaga(action: any) {
    try {
        yield call(postService.deletePost, action.id);

        yield put(deletePostsSuccess({ id: action.payload }));
    } catch (e) {
        yield put(
            deletePostsFailure({
                error: e as string
            })
        );
    }
}

function* addPostsSaga(action: any) {
    try {
        yield call(postService.addPost, action.payload);

        yield put(addPostsSuccess(action.payload));
    } catch (e) {
        yield put(
            addPostsFailure({
                error: e as string
            })
        );
    }
}

function* updatePostsSaga(action: any) {
    try {
        yield call(postService.editPost, action.payload);

        yield put(updatePostsSuccess(action.payload));
    } catch (e) {
        yield put(
            updatePostsFailure({
                error: e as string
            })
        );
    }
}

function* postsSaga() {
    yield all([
        takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga),
        takeLatest(postTypes.DELETE_POST_REQUEST, deletePostsSaga),
        takeLatest(postTypes.ADD_POST_REQUEST, addPostsSaga),
        takeLatest(postTypes.EDIT_POST_REQUEST, updatePostsSaga)
    ]);
}

export default postsSaga;
