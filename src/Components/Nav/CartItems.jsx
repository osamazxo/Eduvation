import { useContext } from "react";

import { Badge, Divider } from "@mui/material";
import { allContext } from "Context/Context";
import styled from "@emotion/styled";

const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 7,
    top: 2,
    fontSize: "0.7em",
    height: "16px",
    width: "16px",
    lineHeight: "16px",
    minWidth: "16px",
    padding: 0,
  },
}));

export default function CartItems() {
  const { cart, cartdata, RemoveFromCart, createOrder } =
    useContext(allContext);

  return (
    <div className="py-1">
      <h4 className="text-md font-medium text-slate-50 pb-2">Shopping Cart</h4>
      <Divider style={{ margin: "4px", backgroundColor: "white" }} />
      {cartdata?.map((ele, index) => (
        <div key={index}>
          <div className="flex gap-x-2 shadow-lg p-1">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={ele.coverImageUrl}
                alt="Random"
                className="h-20 w-20 flex-1 rounded-md object-cover object-center"
              />
            </div>
            <div className="flex-2">
              <p className="text-sm font-medium text-slate-200 m-0">
                {ele.name}
              </p>
              <p className="text-sm font-medium text-slate-500 py-1 m-0">
                {ele?.createdBy?.userName}
              </p>

              <div className="flex items-center justify-between w-52 ">
                <p className="text-sm font-medium text-slate-300 m-0">
                  {ele.price}EGP
                </p>
                <button
                  className="text-sm rounded-lg text-slate-100 hover:bg-green-500 border border-slate-100 p-1 hover:text-slate-200 cursor-pointer   "
                  onClick={() => RemoveFromCart(ele.courseId)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          {index < cartdata.length - 1 && (
            <Divider style={{ margin: "3px", backgroundColor: "white" }} />
          )}
        </div>
      ))}
      <div className=" px-4 py-2 sm:px-6">
        {/* <div className="flex justify-between text-base font-medium text-slate-200">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div> */}
        <div className="mt-1">
          <button
            onClick={() => {
              createOrder();
            }}
            className="flex items-center justify-center rounded-md  m-auto text-white px-6 py-2 text-base font-medium hover:bg-green-500 border border-slate-100 shadow-sm "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
