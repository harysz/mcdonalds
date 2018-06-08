import React from 'react';
import {connect} from 'react-redux';
const AdminOrders = (props)=>{
    const list=props.activeOrders.map((item,i)=>{
        const items=item.orders.map((item,k)=>{
            return(<li key={k}> {item.name}, {item.category}</li>)
        })
        return(<li key={i}><h3> name: {item.name}</h3>
        <ul>{items}</ul>
        </li>)
    })

    return (
        <div className="admin-orders">
          Orders
            {list}

        </div>
    );
};
const mapStateToProps = (state)=>{
   return{
       activeOrders:state.activeOrders
   }
}

export default connect(mapStateToProps)(AdminOrders)