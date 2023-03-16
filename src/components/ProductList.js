import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { productsListThunk } from "../redux/ProductListSlice";
import LoadingBar from "./UI/LoadingBar";
function ProductList() {
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root");
  const isLoading = useSelector((state) => state.productsList.isLoading);
  console.log(isLoading);
  const next8elements = useSelector(
    (state) => state.productsList.next8Products
  );
  useEffect(() => {
    console.log(token);
    if (token) {
      dispatch(productsListThunk(next8elements));
    }
  }, [dispatch, next8elements, token]);
  return (
    <>
      {!isLoading && token && <p>Product List</p>}
      {isLoading && <LoadingBar />}
    </>
  );
}

export default ProductList;
