export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let friends = [...state.friends]
            let idx = friends.findIndex(friend => friend.id === action.id)
            friends.splice(idx, 1)

            return { friends }
        default:
            return state
    }
}
