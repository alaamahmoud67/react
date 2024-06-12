import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


import Aldetails from './Aldetails'

export default function Altafsir() {
    const [first, setFirst] = useState ([])

  const gett= async () => {
	const dataa = await axios.get("http://api.alquran.cloud/v1/meta");
	setFirst(dataa.data.data.surahs.references);};




    useEffect(() => {
        gett()
    }, [])
  return (
    <>
     <div className='container my-5'>
      <h1 className='text-center'>القرآن الكريم</h1>
    <div className='row g-3 '>
    {first.map(function(item,index){
     return(
    <div className='col-lg-3 ' key={index} >
    
      <Link to={`/quran/${item.number}`}>
  <div className='card r p-5'   >
     <p >{item.name}</p>
     
     <p >{item.englishName}</p>
  
        
         </div>
  </Link>
     
     </div>
     )  
  

})}
    </div>
        </div>
    
    
    </>
  )
}
