import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductsAdd = ({ onAdd }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    onAdd(data);
    navigate("/");
  };

  return (
    <div className={"m-auto w-50"}>
      <h1 className={"text-center my-3"}>Products Add</h1>
      <Link to={"/"} className={"btn btn-primary my-3"}>
        Back List
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={"form-control"}
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <div className={"form-text text-danger"}>
              Bắt buộc phải nhập tên sản phẩm
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className={"form-control"}
            {...register("image", { required: true })}
          />
          {errors.image && errors.image.type === "required" && (
            <div className={"form-text text-danger"}>
              Bắt buộc phải nhập ảnh sản phẩm
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className={"form-control"}
            {...register("price", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
          />
          {errors.price && errors.price.type === "required" && (
            <div className={"form-text text-danger"}>
              Bắt buộc phải nhập giá sản phẩm
            </div>
          )}
          {errors.price && errors.price.type === "validate" && (
            <div className={"form-text text-danger"}>
              Giá sản phẩm phải là số
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quality
          </label>
          <input
            type="text"
            className={"form-control"}
            {...register("quantity", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
          />
          {errors.quantity && errors.quantity.type === "required" && (
            <div className={"form-text text-danger"}>
              Bắt buộc phải nhập số lượng sản phẩm
            </div>
          )}
          {errors.quantity && errors.quantity.type === "validate" && (
            <div className={"form-text text-danger"}>
              Số lượng sản phẩm phải là số
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className={"form-control"}
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && errors.description.type === "required" && (
            <div className={"form-text text-danger"}>
              Bắt buộc phải nhập mô tả sản phẩm
            </div>
          )}
        </div>
        <button className={"btn btn-primary"}>Lưu</button>
      </form>
    </div>
  );
};

ProductsAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ProductsAdd;
