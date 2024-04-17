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

  // Dummy property entries data
  const propertyEntries = [
    { id: 1, title: "House 1", description: "Description of House 1" },
    { id: 2, title: "House 2", description: "Description of House 2" },
    { id: 3, title: "House 3", description: "Description of House 3" },
    { id: 4, title: "House 4", description: "Description of House 4" },
    { id: 5, title: "House 5", description: "Description of House 5" },
    { id: 6, title: "House 6", description: "Description of House 6" },
    // Add more property entries as needed
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
            <b>SELL YOUR HOUSE</b>
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
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= propertyEntries.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
