import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="container">
        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is Booklio
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Booklio is an innovative MERN-based web application that
                  serves as a versatile platform for second-hand book
                  enthusiasts. It facilitates seamless interactions between
                  sellers and buyers, offering features such as user
                  authentication, role selection (seller or buyer), book
                  management, and the generation of downloadable bills in PDF
                  format. Users can list, update, and delete books as sellers,
                  or browse, purchase, and generate bills as buyers
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What does seller do?{" "}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  In the "Booklio" app, a seller has several responsibilities
                  and capabilities: <br /> <strong>Listing Books:</strong>{" "}
                  Sellers can add their books to the platform, providing details
                  such as book title, author, condition, and price. <br />
                  <strong>Updating Book Information:</strong> Sellers have the
                  ability to edit and update the information related to the
                  books they have listed. This includes modifying book details
                  or adjusting the pricing. <br />{" "}
                  <strong>Deleting Books:</strong> If a seller wishes to remove
                  a book listing from the platform, they can easily delete it.
                  These actions collectively enable sellers to effectively
                  manage their book listings and engage with potential buyers in
                  the second-hand book marketplace provided by the app.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What does buyers do
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Buyers in the "Booklio" app can browse books listed by
                  sellers, view book details and prices, and make purchases by
                  adding books to their cart. They can also generate bills for
                  their selected books, which can be downloaded in PDF format
                  for reference or payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
