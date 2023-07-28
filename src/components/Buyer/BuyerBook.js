// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const history = useNavigate();

// function BuyerBook(props) {
//   const history = useNavigate();
//   const { _id, name, author, description, price, image } = props.book;

//   console.log(props.book);

//   // const buyHandler = async () => {
//   //   await axios
//   //     .get(`http://localhost:5000/books/${_id}`)
//   //     .then((res) => res.data)
//   //     .then(() => history("/Bill"));
//   // };

//   return (
//     <div>
//       <div className="container">
//         <div className="card">
//           <img src={image} className="img-top" alt={name} />
//           <div className="body">
//             <div className="sub-body">
//               <h5 className="name">{name}</h5>
//               <div className="prc">
//                 <p className="author">{author}</p>
//                 <h6 className="price">Rs: {price}</h6>
//               </div>
//               <p className="text">{description}</p>
//             </div>
//             <div class="d-grid gap-2">
//               <a href="/Bill" class="btn btn-primary">
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default buyerBook;
import React from "react";

const buyerBook = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  console.log(props.book);
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={image} className="img-top" alt={name} />
          <div className="body">
            <div className="sub-body">
              <h5 className="name">{name}</h5>
              <div className="prc">
                <p className="author">{author}</p>
                <h6 className="price">Rs: {price}</h6>
              </div>
              <p className="text">{description}</p>
            </div>
            <div class="d-grid gap-2">
              <a href="/Bill" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default buyerBook;
