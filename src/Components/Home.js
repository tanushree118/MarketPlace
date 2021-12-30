import React from "react";
import "./Home.css";

const Home = ({ products, cartList, setCartList }) => {
  // The below commented code is when state is stored in local storage
  // const [cartList, setCartList] = useState([]);

  // useEffect(() => {
  //     if(window.localStorage.getItem('cartList')) {
  //         setCartList(JSON.parse(window.localStorage.getItem('cartList')));
  //     }

  // }, []);

  // useEffect(() => {
  //     window.localStorage.setItem('cartList', JSON.stringify(cartList));
  // }, [cartList]);

  const productList = products.map((product, index) => {
    let quantity = 0;
    if (cartList.length > 0) {
      cartList.forEach((item) => {
        if (item.name === product.name) {
          quantity = item.quantity;
        }
      });
    }

    return (
      <div key={`${index}_product`} className="product">
        <img
          src={process.env.PUBLIC_URL + `/${product.name}.jpg`}
          alt={product.name}
          key={index}
          width="100"
          height="100"
        />
        <div key={`${index}_quantity`} className="marginBetweenProductAndCount">
          <button
            onClick={() => {
              if (cartList.length > 0) {
                let updatedCart;
                let found;
                for (let i = 0; i < cartList.length; i++) {
                  if (cartList[i].name === product.name) {
                    if (cartList[i].quantity < product.quantity) {
                      updatedCart = [...cartList];
                      updatedCart[i].quantity = cartList[i].quantity + 1;
                      updatedCart[i].price = cartList[i].price;
                      found = true;
                      setCartList(updatedCart);
                      break;
                    }
                    if (cartList[i].quantity === product.quantity) {
                      found = true;
                      alert("Out of stock");
                      break;
                    }
                  }
                }
                if (!found) {
                  setCartList([
                    ...cartList,
                    { name: product.name, quantity: 1, price: product.price },
                  ]);
                }
              } else {
                setCartList([
                  { name: product.name, quantity: 1, price: product.price },
                ]);
              }
            }}
          >
            +
          </button>
          {quantity}
          <button
            onClick={() => {
              let updatedCart = [...cartList];
              let found = cartList.findIndex(function (item, index) {
                if (item.name === product.name) {
                  return true;
                } else {
                  return false;
                }
              });
              if (found !== -1) {
                updatedCart[found].quantity = updatedCart[found].quantity - 1;
                if (
                  updatedCart[found].quantity < 0 ||
                  updatedCart[found].quantity === 0
                )
                  updatedCart.splice(found, 1);
                setCartList(updatedCart);
              } else return;
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>Home</h2>
      <div className="productList">{productList}</div>
    </div>
  );
};

export default Home;
