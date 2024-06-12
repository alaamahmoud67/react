import React, { useEffect , useState} from 'react'
import axios from 'axios'
import '../App.css'
import im1 from '../img/bukhary-CnwjcUPI.png'
import im2 from '../img/muslem-Bmplxp8V.jpeg'
import im3 from '../img/Tirmidzi-_vTvssnL.png'
import im4 from '../img/أنس_بن_مالك.png'
import im5 from '../img/أبو_داود.png'
import im6 from '../img/ابن_ماجة.png'
import im7 from '../img/bnhanbl-8CXsJ1SM.jpg'

import { Link } from 'react-router-dom'
export default function Azkair() {

  





//     const [azk, setAzka] = useState([]);

//     const getting = async () => {
// 		const res = await axios.get("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300");
// 		  setAzka(res.data.items)
// // console.log(res.data.items)
// }
//     useEffect(() => {
//         getting()
//     }, [])
    
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 2000,
    //       autoplaySpeed: 2000,
    //       cssEase: "linear",
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
  return (
    <>
 



<section>
  <div className='container my-2'>
<div className='row'>
<div className='col-lg-3'>
<Link to={"/Bukhari"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im1} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">البخارى </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Muslim"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im2} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">  مسلم  </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Tirmidzi"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im3} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">الترمذي </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/malk"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im4} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">مالك بن أنس  </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Daood"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im5} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3"> ابو داوود   </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Magah"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im6} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">ابن ماجه </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>

<div className='col-lg-3'>
<Link to={"/Hanbal"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src={im7} className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-4"> أحمد بن حنبل  </h4>
         <p  className="card-text py-1">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>

</div>
  </div>
</section>



 


    
    
    </>
  )
}
