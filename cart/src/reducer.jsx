import Products from "./data"

export const reducer = (state, action) => {
    switch(action.type) {
        case "remove_item" : return handleItemRemoval(action.event, state);

        case "clear": return handleClear(state);

        case "increase_item":  return increaseItemCount(action.event, state);

        case "decrease_item":  return decreaseItemCount(action.event, state, action.getMap);

        default: throw new Error(`${action.type} is not defined in reducer.jsx`);
    }
}

// ********** ACTIONS ***************

const handleItemRemoval = (e, state) => {
    // e.target.id ===> removal button ID
    let removalBtnId = e.target.id
    // e.target.dataset.id ===> decrease item button ID
    let decreaseItemBtnId = e.target.dataset.id;

    let itemId = removalBtnId || decreaseItemBtnId;
    let updatedProducts = state.products.filter(product => product.id !== Number(itemId));
    let updatedTotalPrice = state.totalPrice - state.products.find(product => product.id === Number(itemId)).price;
    let updatedTotalItems = state.totalItems - 1;

    return {
        ...state,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
        products: updatedProducts
    }    
}


const handleClear = (state) => {

    if(state.clear){
        return {
            ...state,
            products: [],
            totalItems: 0,
            totalPrice: 0,
            clear: false
        }
    }else {
        return {
            ...state,
            totalPrice: Products.reduce((acc, product) => acc + product.price, 0),
            products: Products,
            totalItems: Products.length,
            clear: true

        }
    }
}


const increaseItemCount = (e, state) => {

    let itemId = e.target.dataset.id;  
    let updatedTotalPrice = state.totalPrice + state.products.find(product => product.id === Number(itemId)).price;
    let updatedTotalItems = state.totalItems + 1;

    return {
        ...state,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
        increaseToggler: !state.increaseToggler,
        id: itemId
    }
}


const decreaseItemCount = (e, state, getMap) => {
    let itemId = e.target.dataset.id;

    let map = getMap();
    let node = map.get(Number(itemId));

    if(node.textContent === "1") {
     return handleItemRemoval(e, state);
    }else {
    
    let currentProductUnitPrice = state.products.find(product => product.id === Number(itemId)).price;
    let updatedTotalPrice = state.totalPrice - currentProductUnitPrice;
    let updatedTotalItems = state.totalItems - 1;

    return {
        ...state,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
        decreaseToggler: !state.decreaseToggler,
        id: itemId
    }     
}
}