export const login = (name) => {
    return {
        type: 'LOGIN',
        name: name
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};