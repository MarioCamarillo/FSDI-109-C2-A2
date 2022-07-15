import  React from 'react';

/////////////////////////////////////////////////////////////////
// Context describes the data and functions that will
// exist in the store. This contains only the definition
// no implementation here.
////////////////////////////////////////////////////////////////

const StoreContext = React.createContext({
    cart: [],
    user: {},


    addProduct: ()  => {},
    removeProduct: () => {},
});


export default StoreContext;



