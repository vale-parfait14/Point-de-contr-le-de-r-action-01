import React from 'react';

const Image = ({ imageUrl="https://www.laptopspirit.fr/wp-content/uploads/new/2023/12/Test-Apple-MacBook-Air-M2-944.jpg" }) => {
  return <img src={imageUrl} alt="Product" style={{ width:"200",height:"398px" }} />;
};

export default Image;
