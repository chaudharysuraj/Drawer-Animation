
const defaultState = {
    isLoggedIn: false,
    name: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                name: action.name
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                name: ''
            });
        default:
            return state;
    }
}