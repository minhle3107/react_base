import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import ProductsAdd from "./components/Products-Add.jsx";
import Products from "./components/Products.jsx";
import ProductsEdit from "./components/Products-Edit.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const urlProducts = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${urlProducts}`);
      setProducts(data);
      // console.log(products); // object
    })();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
      if (confirm) {
        await axios.delete(`${urlProducts}/${id}`);
        alert("Bạn đã xóa thành công");
        setProducts(products.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.error("An error occurred:", error.response);
    }
  };

  const onHandleAdd = async (product) => {
    try {
      await axios.post(urlProducts, product);
      alert("Thêm sản phẩm mới thành công");
      const { data } = await axios.get(urlProducts);
      setProducts(data);
    } catch (error) {
      console.error("An error occurred:", error.response);
    }
  };

  const onHandleEdit = async (product) => {
    try {
      await axios.put(`${urlProducts}/${product.id}`, product);
      alert("Cập nhật sản phẩm mới thành công");
      const { data } = await axios.get(urlProducts);
      setProducts(data);
    } catch (error) {
      console.error("An error occurred:", error.response);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Products products={products} removeProduct={onHandleRemove} />
            }
          ></Route>
          <Route
            path="products/add"
            element={<ProductsAdd onAdd={onHandleAdd} />}
          ></Route>
          <Route
            path="products/:id/edit"
            element={<ProductsEdit onUpdate={onHandleEdit} />}
          ></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
