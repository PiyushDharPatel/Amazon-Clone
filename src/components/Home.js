import React from 'react'
import Carousel from './Carousel';
import Card from './Card';
import Product from './Product';
import NavBar from './NavBar';
const Home = () => {
    const cardData = [
        {
            img: ["../images/c11_.jpg","../images/c12.jpg","../images/c13.jpg","../images/c14.jpg"],
            link: "Pick up where you left off",
        },
        {
            img: ["../images/c21.jpg","../images/c22.jpg","../images/c23.jpg","../images/c24.jpg"],
            link: "Categories to explore",
        },
        {
            img: ["../images/c31.jpg","../images/c32.jpg","../images/c33.jpg","../images/c34.jpg"],
            link: "Revamp your home in style",
          },
          {
            img: ["../images/c41.jpg","../images/c42.jpg","../images/c43.jpg","../images/c44.jpg"],
            link: "Top mobile accessories",
          },
         
        
      ];
  return (
    <><NavBar/>
    <div className="bg-white">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
        {cardData.map((card) => (
        <Card
          link={card.link}
          imgs={card.img}
        />
      ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <Product />
        
        
      </div>
      <div className="h-[200px] m-10">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
    </div>
    </>
  )
}

export default Home
