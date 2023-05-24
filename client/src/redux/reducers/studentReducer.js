import * as actionType from '../constants/studentConstants'

export const getStudentsReducer = (state = { students: []}, action) => {
    switch (action.type) {
        case actionType.GET_STUDENTS_SUCCESS:
            return { students: action.payload }
        case actionType.GET_STUDENTS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}