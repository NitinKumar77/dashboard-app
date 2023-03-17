import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productsListThunk } from "../redux/ProductListSlice";
import ProductsBox from "./ProductsBox";
import LoadingBar from "./UI/LoadingBar";

import Pagination from "./Pagination";

function ProductList() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.productsList.isLoading);
  console.log(isLoading);
  const next8elements = useSelector(
    (state) => state.productsList.next8Products
  );

  const memoizedNext8Elements = useMemo(() => next8elements, [next8elements]);

  useEffect(() => {
    console.log("thunkproduct");
    dispatch(productsListThunk(memoizedNext8Elements));
  }, [dispatch, memoizedNext8Elements]);

  return (
    <>
      {!isLoading && (
        <>
          {" "}
          <ProductsBox />
          <Pagination mode={"products"} />
        </>
      )}
      {isLoading && (
        <>
          {" "}
          <LoadingBar />
        </>
      )}
    </>
  );
}

export default ProductList;
