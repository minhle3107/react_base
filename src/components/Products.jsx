import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Products = ({ products, removeProduct }) => (
  <div>
    <h1 className="text-center my-3">Product List</h1>
    <Link to="/products/add">
      <button className="btn btn-success">Add</button>
    </Link>
    <table className="table table-bordered text-center align-middle my-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quality</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(({ id, name, image, price, quantity, description }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
              <img className={"img-thumbnail w-25"} src={image} alt={name} />
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>
              <Link to={`/products/${id}/edit`}>
                <button className="btn btn-warning mx-1">Edit</button>
              </Link>
              <button
                className="btn btn-danger mx-1"
                onClick={() => {
                  removeProduct(id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Products;
