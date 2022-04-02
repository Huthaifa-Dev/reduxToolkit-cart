import { createSlice } from '@reduxjs/toolkit';
const initialCartstate = {
    items: [],
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartstate,
    reducers: {

        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }


    // addItem(state, action) {
    //     if (state.items.length === 0) {
    //         state.items.push(action.payload);
    //         return;
    //     }
    //     const index = state.items.findIndex(item => action.payload.title === item.title);
    //     index !== -1 ? state.items[index].quantity++ :
    //         state.items.push(action.payload);
    //     console.log(state.items[index].quantity)

    // },
    // removeItem(state, action) {
    //     if (state.items.length === 0) {
    //         return;
    //     }
    //     const index = state.items.findIndex(item => action.payload.title === item.title);
    //     if (index) state.items.splice(index, index + 1);
    // },

    // }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return ({
//                 ...state,
//                 items: state.items.concat(action.value)
//             });
//         case 'REMOVE':
//             return ({
//                 ...state
//             });
//         case 'TOGGLE':
//             return ({
//                 ...state,
//                 toggleCart: !state.toggleCart
//             })
//         default:
//             return state;
//     }
// }

// export default cartReducer;