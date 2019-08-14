import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, company, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>品名: {title}</h2>
                  <h4 className="text-uppercase text-muted mt-3 mb-2">生产商: <span className="text-uppercase">{company}</span></h4>
                  <h4 className="text-blue">价格: <span>$</span>{price}</h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">产品说明: </p>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <ButtonContainer>
                      返回主页
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                    {inCart ? "已加入购物车" : "加入购物车"}
                  </ButtonContainer>
                </div>
              </div>
              {/* end product info */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details
