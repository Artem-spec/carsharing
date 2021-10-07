const initState = {
    name: "",
    zoom: null,
}

const selectedCity = (state = initState, action) => {
    switch (action.type) {
        case 'defCoords':
            return state = action.payload;
        default:
            return state;
    }
}

export default selectedCity;