const initState = {

}

const stateCoords = (state = initState, action) => {
    switch (action.type) {
        case 'stateCoords':
            return state = action.payload;
        default:
            return state;
    }
}

export default stateCoords;