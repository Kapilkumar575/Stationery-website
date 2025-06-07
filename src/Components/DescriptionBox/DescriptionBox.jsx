import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is a digital platform that allows businesses to sell products or services directly to consumers over the internet.
         It offers a convenient and accessible way for customers to browse, select, and purchase a wide variety of items from the comfort of their own homes.
          E-commerce websites typically feature user-friendly interfaces, secure payment gateways, and detailed product descriptions to enhance the shopping experience.
           They often include features such as search functionality, customer reviews, and personalized recommendations to help users find exactly what they need.
            With the rise of mobile shopping, many e-commerce sites are optimized for use on smartphones and tablets, making it easier than ever for customers to shop anytime, anywhere.   
        </p>
        <p>
        Discover our extensive collection of premium stationery products, designed to meet all your writing, organizing, and creative needs.
        Whether you're a student, professional, or hobbyist, our range includes everything from high-quality pens, pencils, and markers to elegant notebooks, planners, and organizational tools.
         Each product is carefully selected for its functionality, durability, and style, ensuring that you can express yourself clearly and beautifully in any setting.
          Elevate your workspace, inspire creativity, and stay organized with our curated selection of stationery essentials, perfect for both everyday use and special occasions.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
