import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});

  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleCouponChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    ////////////////////////////////////////////////////////////////
    // let copyArray = [...copy];
    ////////////////////////////////////////////////////////////////

    let copy = { ...coupon }; //Create copy
    copy[name] = value; //modify copy
    setCoupon(copy);
  };

  const saveCoupon = () => {
    ////////////////////////////////
    // Create a copy of Coupon object
    ////////////////////////////////
    let coupon2beSaved = { ...coupon };

    ////////////////////////////////
    // Set the discount to be a number
    ////////////////////////////////
    let discount = parseFloat(coupon2beSaved.discount);
    coupon2beSaved.discount = discount;

    ////////////////////////////////
    // Console log the copy
    ////////////////////////////////
    console.log(coupon2beSaved);

    ////////////////////////////////
    // todo: send object to the server
    ////////////////////////////////

    ////////////////////////////////
    // add it to the stata Array
    ////////////////////////////////
    let copyCoupons = [...allCoupons];
    copyCoupons.push(coupon2beSaved);
    setAllCoupons(copyCoupons);
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
    ////////////////////////////////
    //todo: save product on server
    ////////////////////////////////

    ////////////////////////////////
    // save product on state array
    ////////////////////////////////
    let copyAllProducts = [...allProducts];
    copyAllProducts.push(copy);
    setAllProducts(copyAllProducts);
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

          <div className="products-list">
            <ul>
              {allProducts.map((prod, index) => (
                <li key={index}>
                  {product.title} - ${prod.price}
                </li>
              ))}
            </ul>
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
          <div className="coupons-list">
            <ul>
              {allCoupons.map((coupon, index) => (
                <li key={index}>
                  {coupon.code} - {coupon.discount}% off
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
