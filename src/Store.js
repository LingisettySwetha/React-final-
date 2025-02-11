import { configureStore, createSlice } from "@reduxjs/toolkit";


const productSlice=createSlice({
               name:'products',
               initialState:{
            veg:[
                { name: "Potato", price: 40, image: 'potato.jpg' },
                { name: "Tomato", price: 80, image: 'tomato.jpg' },
                { name: "Carrot", price: 60, image: "carrot.jpg" },
                { name: "Beetroot", price: 30, image: 'beetroot.jpg' },
                { name: "Brinjal", price: 40, image: 'brinjal.jpg' },
                { name: "Onion", price: 50, image: 'onion.jpg' },
                { name: "Cabbage", price: 25, image: 'cabbage.jpg' },
                { name: "Cauliflower", price: 45, image: 'https://www.thespruceeats.com/thmb/2ffv5aUIF16x7ih3fyMgkBRiyks=/5600x3761/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-641147548-f685bc0c51d649cbb1e14469745d5c9e.jpg' },
                { name: "Spinach", price: 35, image: 'spinach.jpg' },
                { name: "Lettuce", price: 30, image: 'lettuce.jpg' },
                { name: "Broccoli", price: 70, image: 'broccoli.jpg' },
                { name: "Bell Pepper", price: 50, image: 'bell_pepper.jpg' },
                { name: "Chili", price: 20, image: 'chili.jpg' },
                { name: "Corn", price: 60, image: 'corn.jpg' },
                { name: "Mushroom", price: 90, image: 'mushroom.jpg' },
                { name: "Garlic", price: 30, image: 'garlic.jpg' },
                { name: "Ginger", price: 40, image: 'ginger.jpg' },
                { name: "Lemon", price: 20, image: 'lemon.jpg' },
                { name: "Coriander", price: 15, image: 'coriander.jpg' },
                { name: "Curry Leaves", price: 10, image: 'curry_leaves.jpg' },
                { name: "Mint Leaves", price: 25, image: 'mint_leaves.jpg' },
                { name: "Basil", price: 35, image: 'basil.jpg' },
                { name: "Parsley", price: 20, image: 'parsley.jpg' },
                { name: "Thyme", price: 50, image: 'thyme.jpg' },
                { name: "Rosemary", price: 55, image: 'rosemary.jpg' },
                { name: "Oregano", price: 30, image: 'oregano.jpg' },
                { name: "Sage", price: 40, image: 'sage.jpg' },
                { name: "Dill", price: 25, image: 'dill.jpg' },
                { name: "Bay Leaves", price: 15, image: 'bay_leaves.jpg' },
                { name: "Cinnamon", price: 40, image: 'cinnamon.jpg' },
                { name: "Cloves", price: 50, image: 'cloves.jpg' },
                { name: "Cardamom", price: 60, image: 'cardamom.jpg' }
               ],
           nonVeg: [
            {name:"Chicken Biryani", price:500, image:'chicken_biryani.jpg'},
            {name:"Mutton Korma", price:600, image:'mutton_korma.jpg'},
            {name:"Prawn Curry", price:550, image:'prawn_curry.jpg'},
            {name:"Grilled Fish", price:450, image:'grilled_fish.jpg'},
            {name:"Beef Steak", price:700, image:'beef_steak.jpg'},
            {name:"Lamb Shawarma", price:650, image:'lamb_shawarma.jpg'},
            {name:"Turkey Roast", price:750, image:'turkey_roast.jpg'},
            {name:"Duck Pâté", price:800, image:'duck_pate.jpg'},
            {name:"Salmon Fillet", price:850, image:'salmon_fillet.jpg'},
            {name:"Squid Ink Pasta", price:650, image:'squid_ink_pasta.jpg'},
            {name:"Crab Cakes", price:700, image:'crab_cakes.jpg'},
            {name:"Venison Stew", price:900, image:'venison_stew.jpg'},
            {name:"Spaghetti Carbonara", price:450, image:'carbonara.jpg'},
            {name:"Vegetable Stir Fry", price:300, image:'veg_stir_fry.jpg'},
            {name:"Peking Duck", price:950, image:'peking_duck.jpg'},
            {name:"Beef Wellington", price:1200, image:'beef_wellington.jpg'},
            {name:"Lobster Bisque", price:800, image:'lobster_bisque.jpg'},
            {name:"Pad Thai", price:400, image:'pad_thai.jpg'},
            {name:"Caesar Salad", price:250, image:'caesar_salad.jpg'},
            {name:"Mushroom Risotto", price:550, image:'mushroom_risotto.jpg'},
            {name:"Chicken Alfredo", price:600, image:'chicken_alfredo.jpg'}
            ],
            milk: [
                
                    {name:"Sangam Dairy", price:50, image:'sangam.jpg'},
                    {name:"Full Cream Milk", price:40, image:'full_cream_milk.jpg'},
                    {name:"Toned Milk", price:35, image:'toned_milk.jpg'},
                    {name:"Butter", price:80, image:'butter.jpg'},
                    {name:"Cheese", price:120, image:'cheese.jpg'},
                    {name:"Yogurt", price:60, image:'yogurt.jpg'},
                    {name:"Cottage Cheese (Paneer)", price:150, image:'paneer.jpg'},
                    {name:"Ghee", price:200, image:'ghee.jpg'},
                    {name:"Milk Powder", price:250, image:'milk_powder.jpg'},
                    {name:"Condensed Milk", price:100, image:'condensed_milk.jpg'},
                    {name:"Ice Cream", price:150, image:'ice_cream.jpg'},
                    {name:"Milkshake", price:120, image:'milkshake.jpg'},
                    {name:"Sweetened Yogurt", price:80, image:'sweetened_yogurt.jpg'},
                    {name:"Flavored Milk", price:90, image:'flavored_milk.jpg'},
                    {name:"Cheese Spread", price:130, image:'cheese_spread.jpg'}
                ]
                
            
        },
            reducers:{}
})

const cartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addToCart:(state,actions)=>{
            const item=state.find(item=>item.name===actions.payload.name);
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...actions.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }

        },
        decrement:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item&&item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name!==action.payload.name);
            }

        },
        remove:(state,action)=>{
        return state.filter(item=>item.name!==action.payload.name);
        },
        clearCart:()=>[]
    }
})

const purchaseSlice=createSlice({
    name:"PurchaseDetails",
    initialState:[],
    reducers:{
        addPurchaseDetails:(state,action)=>{
            state.push(action.payload);
        }
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username")||' ',
    },
    reducers:{
        login:(state,action)=>{
          state.isAuthenticated=true;
          state.user=action.payload;
          localStorage.setItem("username",action.payload);
        },
        logout:(state)=>{
          state.isAuthenticated=false;
          state.user=" ";
          localStorage.removeItem("username");
        }
    }
});
const store=configureStore({
    reducer:{products:productSlice.reducer,
            Cart:cartSlice.reducer,
            PurchaseDetails:purchaseSlice.reducer,
            auth:authSlice.reducer
        } 
})

export default store;
export const{addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const{addPurchaseDetails}=purchaseSlice.actions;
export const{login,logout}=authSlice.actions;
