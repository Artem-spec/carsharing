const initState = [];

const addressAPI = (state = initState, action) => {
    switch (action.type) {
        case 'address':
            return state = action.payload;
        default:
            return state;
    }
}

export default addressAPI;