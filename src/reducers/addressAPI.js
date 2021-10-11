const initState = [];

const addressAPI = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ADDRESS_API':
            return [...action.payload]
        default:
            return state;
    }
}

export default addressAPI;