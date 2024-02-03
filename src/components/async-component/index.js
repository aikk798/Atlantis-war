import React, { Suspense } from "react";

const AsyncComponent = ({ children, loadingDelay = 0, path }) => {
  return <Suspense>{children}</Suspense>;
};

export default AsyncComponent;
