import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { }
});

export default function CartContextProvider({ children }) {

    const [foodCartState, foodCartStateDispatch] = useReducer(foodCartReducer, {
        items: []
    });

    function foodCartReducer(state, action) {
        console.log('Action dispatched:', action);
        if (action.type === 'ADD_ITEM') {
            const updatedItems = [...state.items];
            const existingCartItemIndex = updatedItems.findIndex(item => item.id === action.item.id);
            const existingCartItem = updatedItems[existingCartItemIndex];
            if (existingCartItem) {
                const updateItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
                updatedItems[existingCartItemIndex] = updateItem;
            } else {
                updatedItems.push({ ...action.item, quantity: 1 });
            }

            return {
                ...state,
                items: updatedItems
            }
        }

        if (action.type === 'REMOVE_ITEM') {
            const updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex(item => item.id === action.item.productId);
            const updatedItem = state.items[itemIndex];

            updatedItem.quantity -= 1

            if (updatedItem.quantity === 0) updatedItems.splice(itemIndex, 1);
            else updatedItems[itemIndex] = updatedItem.quantity - 1;

            return {
                ...state,
                items: updatedItems,
            };
        }

        return state;
    }

    function handleAddItemToCart(item) {
        foodCartStateDispatch({
            type: 'ADD_ITEM',
            item
        });
    }

    function handleUpdateCartItemQuantity(productId) {
        foodCartStateDispatch({
            type: 'REMOVE_ITEM',
            item: {
                productId
            }
        });
    }

    const ctxValue = {
        items: foodCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    console.log('CartContextProvider rendered with items:', foodCartState.items);
    return (
        <CartContext value={ctxValue}>
            {children}
        </CartContext>
    );
}