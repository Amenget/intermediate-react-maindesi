// counterReducer.js
const initialState = {
    count: 0,
    test: ""
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
                test: action.payload.test // Update the test message
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
                test: action.payload.test
            };
        case "RESET":
            return {
                ...state,
                count: 0,
                test: action.payload.test
            };
        default:
            return state;
    }
};

export default counterReducer;