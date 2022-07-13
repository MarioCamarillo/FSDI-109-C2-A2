import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});

  const handleCouponChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...coupon }; //Create copy
    copy[name] = value; //modify copy
    setCoupon(copy);
  };

  const saveCoupon = () => {
    ////////////////////////////////
    // Create a copy of Coupon object
    ////////////////////////////////
    let copy = { ...coupon };

    ////////////////////////////////
    // Set the discount to be a number
    ////////////////////////////////
    let discount = parseFloat(copy.discount);
    copy.discount = discount;

    ////////////////////////////////
    // Console log the copy
    ////////////////////////////////
    console.log(copy);
  };

  const handleProductChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...product }; //Create copy
    copy[name] = value; //modify copy
    setProduct(copy);
  };

  const saveProduct = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    console.log(copy);
  };

  return (
    <div className="admin-page">
      <h1>This is the admin</h1>

      <div className="parent">
        <section className="products">
          <h3>Products</h3>

          <div className="form">
            <div className="my-control">
              <label>Price</label>
              <input
                name="price"
                onChange={handleProductChange}
                type="number"
              />
            </div>

            <div className="my-control">
              <label>Title</label>
              <input name="title" onChange={handleProductChange} type="text" />
            </div>

            <div className="my-control">
              <label>Image</label>
              <input
                name="image"
                placeholder="Image name is like: product.jpg"
                onChange={handleProductChange}
                type="text"
              />
            </div>

            <div className="my-control">
              <label>Category</label>
              <input
                name="category"
                onChange={handleProductChange}
                type="text"
              />
            </div>

            <div className="my-control">
              <button onClick={saveProduct} className="btn btn-primary">
                Save Product
              </button>
            </div>
          </div>
        </section>

        <section className="coupons">
          <h3>Coupons</h3>

          <div className="form">
            <div className="my-control">
              <label>Coupon</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>

            <div className="my-control">
              <label>Discount</label>
              <input
                name="discount"
                onChange={handleCouponChange}
                type="number"
              />
            </div>

            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-primary">
                Save Coupon
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
