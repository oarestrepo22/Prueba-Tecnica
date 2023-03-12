import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
    try {
        const { data } = await axios.get(
            'http://localhost:4001/api/auth/640d210a783bc3ee5b6614a9/todos'
        ); // Endpoint del backend para obtener las tareas
        dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data }); // Actualizamos el estado de Redux con las tareas obtenidas
    } catch (error) {
        console.log(error);
    }
};
