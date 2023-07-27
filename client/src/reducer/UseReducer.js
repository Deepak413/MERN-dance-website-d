export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER"){
        return action.payload;    //we are assigning state value as TRUE through action.payload from login.js
    }

    return state;
}

//here type and payload is just an message sent as an argument from whereever it called