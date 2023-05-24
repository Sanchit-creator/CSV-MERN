import axios from "axios";
import * as actionType from '../constants/studentConstants'

const URL = 'http://localhost:3000'
export const getStudents = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.get(`${URL}/api/students/fetch`, config);
        dispatch({ type: actionType.GET_STUDENTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: actionType.GET_STUDENTS_FAIL, payload: error.message})
    }
}