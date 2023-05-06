import { useState } from "react";

const Body = ({product,category ,price,description,productimage}) => {

    const[count,setCount] = useState(0);
    const addItems = () => {
        setCount((count) => count + 1);
    }
        const removeItems = () => {
            setCount((count) => (count<=0)?0:count-1);
    }
    return (
<>
			<article>
				
				<h2>{product}</h2>
                 <h3>Category: {category}</h3>
                 <p>{description}</p>
                <img class="image" src={productimage} alt="Product " height="155px" width="300px"  ></img>
				<h3>Rs. {price}</h3>
                <span class="span">Quantity:</span>
                <div class="quantity">
    <button class="minus-btn" type="button" name="button" onClick={removeItems} >-</button>
    <input type="text" name="quantity" value={(count<=0)?0:count}></input>
    <button class="plus-btn" type="button" name="button" onClick={addItems}>+</button>
  </div>
  <h2>Total Price = Rs. {(count<=0)?0:count * price }</h2>
  <button>Add to Cart</button>
			</article>
			
</>
    );
};

export default Body;
