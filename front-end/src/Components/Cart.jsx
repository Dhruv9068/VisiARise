import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, deleteProduct, fetchCartFromFirebase } from "../cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  
  // Accessing auth state
  const { isAuthenticated } = useSelector((state) => state.auth);

  const totalPrice = cartList.reduce((price, item) => price + item.qty * item.price, 0);

  // Fetch cart on component mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCartFromFirebase()); // Ensure cart data is fetched from Firebase
    }
    window.scrollTo(0, 0);
  }, [dispatch, isAuthenticated]);

  // If user is not authenticated, redirect or show a message
  if (!isAuthenticated) {
    return (
      <div className="not-authenticated">
        <h2>Please login to view your cart.</h2>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <section className="relative bg-black text-white py-10 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="moving-words absolute top-0 left-0 w-full h-full overflow-hidden">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`absolute text-${['purple', 'blue', 'white'][i % 3]}-400 text-3xl animate-moving opacity-70`}
              style={{
                animationDuration: `${Math.random() * 5 + 5}s`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 80 + 10}vh`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {['Shopping Time', 'Here You Go', 'Best Deals', 'Trust', 'Discount', 'Sale', 'Visualisation', 'VisiARise', 'Cart', 'Hurrey', 'Champ', 'Hey Visualizer'][i % 12]}
            </div>
          ))}
        </div>
        <Container className="mt-5 mb-5 relative z-10">
          <Row className="justify-content-center">
            <Col md={8}>
              {cartList.length === 0 ? (
                <div className="cart-list mb-4 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                  <h1 className="text-center text-xl">No Items are added in Cart</h1>
                </div>
              ) : (
                cartList.map((item) => {
                  const productQty = item.price * item.qty;
                  return (
                    <div
                      className="cart-list mb-4 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg"
                      key={item.id}
                    >
                      <Row className="border-b border-gray-600 pb-4 cart-item">
                        <Col className="image-holder" sm={4} md={3}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-auto rounded-lg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'path/to/placeholder/image.jpg';
                            }}
                          />
                        </Col>
                        <Col sm={8} md={9}>
                          <Row className="cart-content justify-between items-center">
                            <Col xs={12} sm={9} className="cart-details">
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <h4 className="text-gray-400">
                                ${item.price.toFixed(2)} * {item.qty}=
                                <span className="ml-2 text-white">${productQty.toFixed(2)}</span>
                              </h4>
                            </Col>
                            <Col xs={12} sm={3} className="cartControl flex items-center">
                              <button
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                                onClick={() => dispatch(addToCart({ product: item, num: 1 }))}
                              >
                                <i className="fa-solid fa-plus"></i>
                              </button>
                              <button
                                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded ml-2"
                                onClick={() => dispatch(decreaseQty(item))}
                              >
                                <i className="fa-solid fa-minus"></i>
                              </button>
                            </Col>
                          </Row>
                        </Col>
                        <button
                          className="text-red-500 text-lg mt-2"
                          onClick={() => dispatch(deleteProduct(item))}
                        >
                          <ion-icon name="close"></ion-icon>
                        </button>
                      </Row>
                    </div>
                  );
                })
              )}
            </Col>
            <Col md={4}>
              <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
                <h2 className="text-xl">Cart Summary</h2>
                <div className="flex justify-between">
                  <h4>Total Price :</h4>
                  <h3>${totalPrice.toFixed(2)}</h3>
                </div>
                <button className="bg-green-600 text-white p-2 rounded w-full mt-4">
                  Checkout
                </button>
              </div>

              <div className="model-image mt-4">
                <img
                  src="/Product_img/minyrobot.png"
                  alt="Model Image"
                  className="w-full h-auto rounded-lg mt-2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style >{`
        @keyframes moving {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(100vw);
          }
        }

        .animate-moving {
          animation: moving linear infinite;
          white-space: nowrap;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default Cart;
