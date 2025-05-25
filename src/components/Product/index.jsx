

function Product(){


  fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then((data) => {
      console.log(data.products);
    });

  return(
    <>
    </>
  )
}

export default Product; 