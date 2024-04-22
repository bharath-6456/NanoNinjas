import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel';
// import tools from '../toolsgo';

const tools= [
  {
      "toolName":"combined-harvestor",
      "dealerName":"solame",
      "contactno":"987485296",
      "image":"https://cdn.pixabay.com/photo/2015/04/01/12/59/combine-harvester-702413_640.jpg"
  },
  {
      "toolName":"rooter",
      "dealerName":"philip",
      "contactno":"98746596",
      "image":"https://i.ytimg.com/vi/2RHmoNItr6Q/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSyhHMA8=&rs=AOn4CLB9BYKMCbYKnwHcy3W9_bJyZr5SYA"
  },
  {
      "toolName":"hay-collector",
      "dealerName":"rajesh",
      "contactno":"987485296",
      "image":"https://cdn.pixabay.com/photo/2020/05/11/09/22/agriculture-5157183_1280.jpg"
  },
  {
      "toolName":"jcb",
      "dealerName":"ellivesh",
      "contactno":"987485296",
      "image":"https://img.freepik.com/premium-photo/excavator-earthmoving-coal-open-pit-sunset-background-recycling-coal-mining-industry_124507-67585.jpg?size=626&ext=jpg&ga=GA1.1.2061423295.1690085389&semt=sph"
  }
];
export default function Home() {
  
 
  return (
   
    <div>
        <div class='sticky-top'><Navbar/></div>
        <div>
          <Carousel/>
        </div>
      <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 mt-xl-4">
      
      {
          tools.map((tool, index) => (
            <Card key={index} {...tool} />
          ))
        }
        
        
       
      </div>
       <div>
        <Footer/>
       </div>
       
    </div>
  )
}
