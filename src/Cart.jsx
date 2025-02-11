import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import { useState } from "react";
import { redirect } from "react-router-dom";

function Cart(){
    const cartobjects=useSelector(state=>state.Cart)
    let dispatch=useDispatch()
    let cartitems=cartobjects.map((item,index)=>(
                    <li key={index}>
                    {item.name}-${item.price}
                    <button onClick={()=>dispatch(increment(item))}>+</button>
                    <button onClick={()=>dispatch(decrement(item))}>-</button>
                    Quantity: {item.quantity}
                    <button onClick={()=>dispatch(remove(item))}>Remove</button>
                    </li>
    ))

    let totalPrice=cartobjects.reduce((sum,item)=>sum+item.quantity*item.price,0)

    let [discountPercentage,setDiscountPercentage]=useState(0);

    let discountAmount=totalPrice*discountPercentage/100;

    let discountedPrice=totalPrice-discountAmount;

   

    //Show discpount amount when we click on Apply Button
    let [showDiscount,setShowDiscount]=useState(false);

    //Coupon Code
    let [couponCode,setCouponCode]=useState('');

    let [couponCodeDiscountPer,setCouponCodeDiscountPer]=useState(0);

    let couponDiscountAmount=totalPrice*couponCodeDiscountPer/100;

    let handlingCouponPer=()=>{
        switch(couponCode.toUpperCase()){
            case 'RATAN10': setCouponCodeDiscountPer(10);break;
            case 'RATAN20': setCouponCodeDiscountPer(20);break;
            case 'RATAN30': setCouponCodeDiscountPer(30);break;
            case 'RATAN40': setCouponCodeDiscountPer(40);break;
            default :alert('Invalid Coupon Code');
            setCouponCodeDiscountPer(0);
        }
        };
    
         // Final price after both discount and coupon
    let finalPrice = discountedPrice - couponDiscountAmount;

    //Orders

    let handlePurchaseDetails=()=>{
        const purchaseDate=new Date().toLocaleDateString();
        let purchaseDetails={date:purchaseDate, price :finalPrice,items:[...cartobjects]};
        //let purchaseDetails = { purchaseDate, finalPrice, cartitems: cartobjects };

        dispatch(addPurchaseDetails(purchaseDetails));
        dispatch(clearCart());


    }
     

    return(
        <>
        { 
        cartobjects.length>0 ?
        <div>
        <h1>Hii, Welcome  to cart!</h1>
        <ul>{cartitems}</ul>
        <h4 style={{color:'skyblue'}}> Total price : ${totalPrice}</h4>
        {showDiscount&&
        <div>
        <h4 style={{color:'blue'}}>Discount Applied : {discountPercentage}%</h4>
        <h4 style={{color:'blue'}}>Your Discount Amount : ${discountAmount}</h4>
        </div>
        }
        <h2 style={{color:'red'}}>Your Net Amount to Pay : ${finalPrice}</h2>
        <button style={{background:'lightblue',color:'blue'}} onClick={()=>{setDiscountPercentage(10),setShowDiscount(true)}}>Apply 10% Discount</button>&nbsp;&nbsp;
        <button style={{background:'lightblue',color:'blue'}} onClick={()=>{setDiscountPercentage(20),setShowDiscount(true)}}>Apply 20% Discount</button>&nbsp;&nbsp;
        <button style={{background:'lightblue',color:'blue'}} onClick={()=>{setDiscountPercentage(30),setShowDiscount(true)}}>Apply 30% Discount</button>
        <p><input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="Enter Coupon Code" /></p>
        <button onClick={()=>handlingCouponPer()}>Apply Coupon</button>
        {couponCodeDiscountPer>0&&
        <div>
        <p>Your Coupon Code Applied:{couponCode}</p>
        <p>Your Coupon Code Discount:{couponDiscountAmount}</p>
        </div>
         }
        <p><button onClick={()=>handlePurchaseDetails()}>Complete Purchase</button></p>
        </div>
        :
        <h1>Your Cart is Empty...!</h1>
        }
        </>
    )
}


export default Cart;