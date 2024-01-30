import React, { useEffect, useState } from "react";
import { Country,State } from "country-state-city";
import { Link } from "react-router-dom";
import Input from '../input/Input'
import Label from '../label/Label'
const Shipping = ()=>{

    const [popUp,setPopUp] = useState(false)
    const getCountries = Country.getAllCountries();
    
    const [country,setCountry] = useState('')
    
    const handlerCountry = (event) =>{
        
        const countryCode = event.target.value
        setCountry(countryCode)
        
    }
    const handlerPopUp = (event) => {
        console.log('click');
        setPopUp(true)
        // event.preventDefault()
        setTimeout(() => {
            setPopUp(false)
        }, 1000);
        
    }
    
    return(
    <section className="shipping">
        <form method="post">
            <h2>Shipping Details</h2>

            <div>
            <Label id={'house-number'} text={'H.No.'} />
            <Input type="text" id={'house-number'} name={'house-number'} autoComplete={'false'} />
            </div>

            <div>
            <Label id={'city'} text={'City'} />
            <Input type="text" id={'city'} name={'city'} autoComplete={'true'} />
            </div>

            <div>
            <Label id={'country'} text={'Country'} />
            <select onChange={handlerCountry} type={'text'} id={'country'} name={'country'} >
                <option>
                    Country
                </option>
                {getCountries && getCountries.map((country,i) => {return(<option key={i} value={country.isoCode} >{country.name}</option>)})}
            </select>
            </div>

            <div>
            <Label id={'state'} text={'State'} />
            <select type="text" id={'state'} name={'state'} autoComplete="true"  >
                <option>
                    State
                </option>
                {State && State.getStatesOfCountry(country).map((state,i) => {return(<option key={i} value={state.name}>{state.name}</option>)})}
            </select>
            </div>

            <div>
            <Label id={'zipCode'} text={'Pin Code'} />
            <Input type="text" id={'zipCode'} name={'zipCode'}  required={true} pattens={'[0-9}{5}(-[0-9]{4})'} />
            </div>

            <div>
            <Label id={'phone-number'} text={'Phone No.'} />
            <Input type="number" id={'phone-number'} name={'phone-number'}  />
            </div>

            <button onClick={handlerPopUp} type="submit"><Link to={'/myorders'}>Confirm Order</Link></button>

            {popUp && 
            <article className="popUp-container">
                <p className="pop-up">
                    Order Placed
                </p>
            </article>}
        </form>
    </section>
    
    )
}

export default Shipping;
