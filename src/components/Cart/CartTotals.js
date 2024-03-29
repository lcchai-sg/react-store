import React from 'react'
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              清空购物车
            </button>
          </Link>
          <h5>
            <span className="text-title">合计: </span>
            <strong>$ {cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">税金: </span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">总计: </span>
            <strong>$ {cartTotal}</strong>
          </h5>
          <PayPalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
