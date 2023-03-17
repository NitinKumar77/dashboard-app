import { Box } from "@mui/joy";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import { productsListThunk } from "../redux/ProductListSlice";
import ProductsBox from "./ProductsBox";
import LoadingBar from "./UI/LoadingBar";
import Spinner from "./UI/Spinner";
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
      {!isLoading && token && <ProductsBox />}
      {isLoading && (
        <>
          {" "}
          <LoadingBar />
          <Box minHeight={"200px"}>
            <Spinner />
          </Box>
        </>
      )}
    </>
  );
}

export default ProductList;
