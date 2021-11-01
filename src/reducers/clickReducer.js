

export default function clickReducer(
    state = 0, action) {
    if (action.type === 'boardClick') {
        return state + 1;
    } else if (action.type === 'boardClickReduce') {
        return state - 1;
    } else {
        return state;
    }
}