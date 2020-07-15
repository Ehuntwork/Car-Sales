export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature=(thing) => {
    return {type: ADD_FEATURE, payload: thing};
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (thing) => {
    return {type: REMOVE_FEATURE, payload: thing };
}


