import axios from "axios";
import { useState } from "react";
import { paymentAll } from "../../services/payment";

function CheckoutButton({ cart }) {
  const [loading,setLoading] =useState(false)
  const handleCheckout = async () => {
    setLoading(true)
    try{
    const url = await paymentAll();
    window.location.href=url
    }
    catch(err){   }
    finally{
      setLoading(false)
    }

  };
  return (
    <button
      onClick={()=>handleCheckout()}
      disabled={loading}
      className="bg-primary-700 w-full py-2 text-white rounded-md">
      Continue to Payment
    </button>
  );
}

export default CheckoutButton;
