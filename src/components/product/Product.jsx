import "./product.scss";
import Skin from "../../assets/bg.png";

export default function Product() {
  return (
    <div className="product" id="product">
      <img src={Skin} alt="" />
      <h2>Fast, Free Shipping,<br /> <strong>
       Contactless Delivery.</strong></h2>
       <p>Try it for now, risk free!</p>
       <button>Shop Now </button>
    </div>
  )
}
