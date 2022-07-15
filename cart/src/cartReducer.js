
const cartReducer = (cartState, action) => {

    switch(action.type) {
        case "INCREASE ITEM COUNT" :
            return {
                ...cartState,
                [action.id] : {
                    count : cartState[action.id].count + 1, 
                    startingPrice : cartState[action.id].startingPrice, 
                    cumulativePrice : cartState[action.id].cumulativePrice + cartState[action.id].startingPrice
                }, 
                totalCount : cartState.totalCount + 1,
                totalPriceToPay : cartState[action.id].cumulativePrice + cartState.totalPriceToPay
            }
            

        case "DECREASE ITEM COUNT" : 
            return {
                ...cartState,
                [action.id] : {
                    count : cartState[action.id].count - 1,
                    startingPrice : cartState[action.id].startingPrice, 
                    cumulativePrice : cartState[action.id].cumulativePrice - cartState[action.id].startingPrice  
                },
                totalCount : cartState.totalCount - 1
            }
        
        case "REMOVE ITEM" : 
            return {
                ...cartState,
                data : cartState.data.filter(item => action.id !== Number(item.id)),
                totalCount : cartState.totalCount - 1
            }
        

        default : console.log(action.type + " not available in cartReducer.jsx");
    }
}

export default cartReducer;