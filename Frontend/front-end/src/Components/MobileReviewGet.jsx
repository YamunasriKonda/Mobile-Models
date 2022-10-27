import axios from 'axios';
import { useEffect, useState} from 'react';

const MobileReviewGet = () => {

    const [ brand, setBrand]= usestate("");


    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="brand">
                Brand:
                <input type= "text" id="brand" value={brand} onChange={(e)=> setBrand(e.taget.value)} required/>

            </label>
        </form>
    )

      
    
}
