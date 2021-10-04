import "./info.scss"

export default function Info() {
  return (
    <div className="info" id="info">
    <div className="container">
      <div className="info-cont">
        <span>1</span>
        <div>
        <h3>Your Order</h3>
        <p>Add products to your cart, enter your details and confirm.

</p>
</div>
      </div>

      <div className="info-cont">
        <span className="span2">2</span>
        <div>
        <h3>Picking Your Order</h3>
        <p>Your order is being picked and now will be forwarded for packaging.

</p>
</div>
      </div>

      <div className="info-cont">
        <span className="span3">3</span>
        <div>
        <h3>Packing Your Order</h3>
        <p>We are packing your order and will be out for delivery soon.</p>
</div>
      </div>

      <div className="info-cont">
        <span className="span4">4</span>
        <div>
        <h3>Deliver</h3>
        <p>Your order has been prepared and out for delivery. It will be delivered soon.</p>
</div>
      </div>
    </div>
      
    </div>
  )
}
