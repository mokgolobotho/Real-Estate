import React, { useState } from "react";
import "./Registration.css";
import { useForm } from "react-hook-form";
import backgroundImage from "./image.jpeg";

function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of property entries per page

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  // Updated property entries data with additional details
  const propertyEntries = [
    { id: 1, title: "House 1", address: "123 Main St", bedrooms: 3, garages: 2, price: 250000 },
    { id: 2, title: "House 2", address: "456 Elm St", bedrooms: 4, garages: 3, price: 350000 },
    // Add more property entries with details
  ];

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = propertyEntries.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <b>Dream house</b>
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100"
            style={{ background: "rgba(255, 255, 255,0.3)" }}
          >
            {/* Your form fields */}
          </form>
          <br></br>
          <div>
            {/* Property entries */}
            <div className="property-container">
              {currentItems.map((item) => (
                <div key={item.id} className="property-entry">
                  <h4>House {item.id}</h4>
                  <p>Address: {item.address}</p>
                  <p>Bedrooms: {item.bedrooms}</p>
                  <p>Garages: {item.garages}</p>
                  <p>Price: R{item.price}</p>
                  <p>Deposit: R{item.price * 0.1} - R{item.price * 0.2}</p>
                  {/* You can add image rendering here */}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
