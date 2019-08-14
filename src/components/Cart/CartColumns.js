import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">产品</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">名称</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">价格</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">数量</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">移除</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">合计</p>
          </div>
        </div>
      </div>
    )
  }
}
