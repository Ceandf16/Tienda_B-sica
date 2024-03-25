import celular from "../assets/iphone.jpg";
import "./Carrito_Compra.css";
export function Carrito_Compra() {
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={celular} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <img src={celular} alt="bike" />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={celular} alt="bike" />
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export default Carrito_Compra;
