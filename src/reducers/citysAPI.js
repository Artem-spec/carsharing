const initState = [];

const citys = (state = initState, action) => {
    switch (action.type) {
        case 'citys':
            return state = action.payload;
        default:
            return state;
    }
}

export default citys;