import React ,{useState,useHistory} from 'react'
import { Link, unstable_HistoryRouter } from 'react-router-dom';


export default function Card(props) {
    const [hrs, sethrs] = useState(0);
        const handlechange = (e) => {
    sethrs(e.target.value);
  };
  
  
  

    return (
        <div>
        

                
            

           
            
            
            
            <div  className="card" style={{ "width": "18rem" }}>
            <img src={props.image} className="card-img-top" alt='...' />

            <div className="card-body">
                <h1 className="card-title">{props.dealerName}</h1>
                <p className="card-text">{props.toolName}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.contactno}</li>
               
            </ul>
            <div className='container w-100'>
                <label>enter no.of hrs</label>
                <input onChange={handlechange} className='w-50 h-20' name='hrs' value={hrs}/>
            </div>
            <div>
                <h5 className='container w-100'>

                   <h5>
                    TotalPrize: {hrs*5}</h5>
                </h5>
            </div>
            <Link to='/Login'>
           < button   class="btn btn-success center" type="submit">Book Now</button>
           </Link>
        </div>
        

        </div>
    )
}
