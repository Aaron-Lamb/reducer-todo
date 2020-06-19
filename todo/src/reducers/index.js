export const initialState = {
    todos: [
        {
            item: 'Make list',
            id: 0,
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return{...state, todos: [
                ...state.todos,
                {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }
            ]}
        case "TOGGLE_COMPLETED":
            return{...state, todos: 
                    state.todos.map(item => {
                        if(item.item === action.payload){
                            return{
                                ...item,
                                completed: !item.completed
                            }
                        } else {
                            return item
                        };
                    })
            }
            case "CLEAR_COMPLETED":
                return {
                    ...state,
                    todos: state.todos.filter(item => !item.completed)
                }
        default:
            return state;
    }
}