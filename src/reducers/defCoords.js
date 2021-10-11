const initState = {
    name: "",
    zoom: null,
}

const selectedCity = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_DEF_COORDS':
            return {...action.payload}
        default:
            return state;
    }
}

export default selectedCity;