import { useSelector } from "react-redux";


function Orders(){
    const orders=useSelector((state)=>state.PurchaseDetails);
   let orderItems=orders.map((order,index)=>(
       <li key={index}>
        
       Date: {order.date}<br/>

       Total Amount: {order.price}<br/>

     <ul>
        {order.items.map((item,index)=>(
        <li key={index}>
           <p>{item.name}-${item.price}</p>
           
        </li>)
        )}
       </ul> 
       </li>
      ))
      
      
    return(
        <>
        <h1>Your Orders History</h1>
        {orders.length>0?
        <div>
        <p>{orderItems}</p>
        
        </div>
        :
        <div> <p>No Order History Available...!</p>
        </div>
}
        
          
        
        </>
    )
}
export default Orders;