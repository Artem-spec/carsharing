const initState = [];

const citys = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CITY_API':
            return [...action.payload]
        default:
            return state;
    }
}

export default citys;