const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS_SUCCESS':
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
};
