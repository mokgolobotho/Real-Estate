import React from "react";
import "./Registration.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./image.jpeg";

function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSuccess = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        formData
      );
      console.log(response.data.message);
      alert("HOUSE LISTING CREATED SUCCESSFULLY!");
      navigate("/Login");
    } catch (error) {
      console.error("Error during house listing:", error);
    }
  };

  return (
    <div
      className="login template"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="signup template d-flex justify-content-center align-items-center vh-80 background: #ffffff;">
        <div
          className="form_container p-5 rounded"
          style={{ background: "rgba(255, 255, 255, 0.5)", width: "600px" }}
        >
          <h3 className="text-center mt-5 ">
            <b> Search for your dream home</b>
          </h3>
          <form
            onSubmit={handleSubmit(onSuccess)}
            className="w-100"
            style={{ background: "rgba(255, 255, 255,0.3)" }}
          >
            <div className="mb-2">
              <label htmlFor="numberOfRooms">Number of Rooms</label> <br />
              <input
                type="number"
                {...register("numberOfRooms", { required: true })}
                placeholder="Enter number of rooms"
                className={`form-control ${
                  errors.numberOfRooms ? "is-invalid" : ""
                }`}
              />
              {errors.numberOfRooms && (
                <div className="invalid-feedback">
                  Number of rooms is required
                </div>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="address">City</label> <br />
              <textarea
                {...register("address", { required: true })}
                placeholder="Enter house city"
                className={`form-control ${
                  errors.address ? "is-invalid" : ""
                }`}
              ></textarea>
              {errors.address && (
                <div className="invalid-feedback">Suburb is required</div>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="garages">Garages</label> <br />
              <input
                type="number"
                {...register("garages", { required: true })}
                placeholder="Enter number of garages"
                className={`form-control ${
                  errors.garages ? "is-invalid" : ""
                }`}
              />
              
            </div>
            <div className="mb-2">
              <label htmlFor="prices">Price</label> <br />
              <input
                type="number"
                {...register("prices", { required: true })}
                placeholder="Enter how much you want to pay"
                className={`form-control ${
                  errors.prices ? "is-invalid" : ""
                }`}
              />
             
            </div>

            <div className="d-grid">
              <button className="btn btn-dark" type="submit">
                Search house
              </button>
            </div>
          </form>
          <br></br>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
