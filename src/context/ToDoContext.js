import createDataContext from './createDataContext';


const toDoReducer = (state, action) => {
    switch(action.type) {
        case 'add_toDo':
            return [...state, {title: `To Do #${state.length + 1}`}];
        default:
            return state;
    }
};

const addToDo= (dispatch) => {
    return () => {
        dispatch({ type: 'add_toDo'});
    }
   
};

export const { Context, Provider } = createDataContext(
    toDoReducer, 
    { addToDo },
    []
);