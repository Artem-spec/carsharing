const initState = {};

const car = (state = initState, action) => {
    switch (action.type) {
        case 'MODIFY_CAR':
            return {...action.payload}
        default:
            return state;
    }
}

export default car;