import data from './shop-data'

const INITIAL_STATE = {
    collections: data
}

const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default shopReducer