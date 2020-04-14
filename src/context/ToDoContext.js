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
        case 'edit_toDo':
            return state.map((toDo) => {
                if(toDo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return toDo;
                }
            })

        default:
            return state;
    }
};

const addToDo = dispatch => {
    return (newToDo, detail, callback) => {
        dispatch({ type: 'add_toDo', payload: {newToDo, detail }});
        if(callback) {
            callback();
        }
    }
   
};

const deleteToDo = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_toDo', payload: id});
    }
};

const editToDo = (dispatch) => {
    return (id, newToDo, detail, callback) => {
        dispatch({ type: 'edit_toDo', payload: {id, newToDo, detail}});
        if(callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    toDoReducer, 
    { addToDo, deleteToDo, editToDo },
    [{title: 'new thing', detail: 'make new things', id: 1}]
);