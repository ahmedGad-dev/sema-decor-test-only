import React from 'react'
import LogoText from '../../components/logo-text/LogoText'
import Logo from '../../components/logo/Logo'
import {FaGifts} from 'react-icons/fa'
import './portfolio.styles.scss'

function Portfolio() {
return (
 <div className='container'>
  <div className="portfolio-about flex flex-col lg:flex-row justify-around container-md relative"> 
    <div className="part-1 flex flex-col "> 
      <div className="rating flex self-center mt-16">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
      </div>     
      <div className="content lg:ml-16 lg:w-2/3 p-6 flex flex-col justify-center content-center items-center flex-wrap">
        <div className="flex flex-row w-full md:w-9/12 justify-around content-center items-center mb-3 ">
          <LogoText white/>
          <Logo />
        </div>      
         <p className='transparent-gray-100 capitalize flex flex-wrap text-2xl break-normal w-9/12'> Sema Decor is the top decorist in zaqatala made more than 5000+ decors in zaqatala 
           and around the other cities I do decorations for weddings, engamnets, Henna, birthdays, shop openning and any occasion 
         </p>
      </div>
    </div>
   
    <div className="part-2 flex justify-center items-center align-center self-center lg:flex-col">
      <div className='composition '>
        <img className="mask mask-hexagon h-96 composition__photo composition__photo--p1 " alt='decor' src="https://i.ibb.co/mzCDzxW/sema-decor-zaqatala-2.jpg" /> 
        <img className="mask mask-hexagon h-96 composition__photo composition__photo--p2" alt='decor' src="https://i.ibb.co/SK2gwyb/sema-decor-zaqatala-p-CInig5-ZFKd-H-4.jpg" />
        <img className="mask mask-hexagon h-96 composition__photo composition__photo--p3" alt='decor' src="https://i.ibb.co/WfbG2P9/about-bg-2.png" />
      </div>    
    </div>
  </div>

  <div className="cards-container flex flex-row justify-center align-center md:mt-20 flex-wrap">
    <div className="card w-96 bg-base-100 shadow-xl">
     <figure ><img src="https://i.ibb.co/JdzZz14/about-bg-1.png" alt="Wedding Decors" className='hover:scale-100' /></figure>
      <div className="card-body text-gray-900  h-48">
        <h2 className="card-title">
           Weddings Decors
        <div className="badge badge-accent text-white">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
         <div className="badge badge-outline">Hall</div> 
         <div className="badge badge-outline">Home</div>
         <div className="badge badge-outline">Cars</div>
        </div>
      </div>
     </div>
  
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i.ibb.co/HFwxgtZ/gallery-11.jpg" alt="Shoes" /></figure>
        <div className="card-body text-gray-800 h-38">
          <h2 className="card-title">
             Romantic Decors
          <div className="badge badge-accent text-white">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent text-white">Order Now</button>
          </div>
       </div>
     </div>

     <div className="card w-96 bg-base-100 shadow-xl ">
     <figure><img src="https://i.ibb.co/kxdG8FS/Whats-App-Image-2022-11-08-at-7-46-58-PM.jpg" alt="Shoes" /></figure>
      <div className="card-body text-gray-800 h-48">
        <h2 className="card-title">
           Weddings Decors
        <div className="badge badge-accent text-white">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
         <div className="badge badge-outline">Children</div> 
         <div className="badge badge-outline">Girls</div>
         <div className="badge badge-outline">Men</div>
        </div>
      </div>
     </div>

  </div>
  




{/* Stats */}
<div className="stats-container flex justify-center align-center flex-row mt-28">
 <div className="stats shadow">
   <div className="stat">
    <div className="stat-figure text-primary">
      <FaGifts />
    </div>
    <div className="stat-title">Weddings</div>
    <div className="stat-value text-primary">2000+</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Decors</div>
    <div className="stat-value text-secondary">5000+</div>
    <div className="stat-desc">15% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://i.ibb.co/THhzZn9/Whats-App-Image-2022-11-08-at-7-46-59-PM-3.jpg" alt='logo'/>
        </div>
      </div>
    </div>
    <div className="stat-value">100%</div>
    <div className="stat-title">Satsfied Customers</div>
    <div className="stat-desc text-secondary">For All Decors</div>
   </div> 
 </div>
</div>
{/* Stats */}
</div>
  )
}

export default Portfolio