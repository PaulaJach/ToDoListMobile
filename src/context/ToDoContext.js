import createDataContext from './createDataContext';


const toDoReducer = (state, action) => {
    switch(action.type) {
        case 'add_toDo':
            return [
                ...state, 
                {
                id: Math.floor(Math.random() * 9999),  
                title: action.payload.newToDo,
                detail: action.payload.detail}
                ];
        case 'delete_toDo':
            return state.filter((toDo) => toDo.id !== action.payload);
        default:
            return state;
    }
};

const addToDo = (dispatch) => {
    return (newToDo, detail) => {
        dispatch({ type: 'add_toDo', payload: {newToDo, detail }});
    }
   
};

const deleteToDo = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_toDo', payload: id});
    }
}

export const { Context, Provider } = createDataContext(
    toDoReducer, 
    { addToDo, deleteToDo },
    []
);