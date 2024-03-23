import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ListCard = (props) => {
  const navigate = useNavigate()
    const {id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,amountIn,stock,unitprofit,profit} = props;
     

    //  const mtotalsalary = 0
    //  const ytotalsalary = 0
    //  const total = e_yearly_salary+e_monthly_salary;
   



      const handleDelete=()=>{
        
         try {
             axios.post("http://localhost:3001/deleteCard",{id})
             .then((res)=>{console.log(res)})
             .catch((err)=>{console.log(err)});
 
         } catch (error) {
            console.log(error) 
         }
     }



  return (
    <div className='card'>
         <div>{id}</div>
          <div> {pnumber} </div>
          <div>{pname }</div>
          <div> {buyingprice} </div>
          <div> {bought} </div>
          <div> {amountout} </div>
          <div> {sellingprice} </div>
          <div> {sold }</div>
          <div> {amountIn}</div>
          <div> {stock} </div>
          <div> {unitprofit} </div>
          <div> {profit }</div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => {navigate(`/UpdateCard/${id}`)}}>Update</button>
    </div>
  );
}

export default ListCard;
