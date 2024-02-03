import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AsyncComponent from "@/components/async-component";
import ErrorBoundary from "@/components/error-boundary";
import Header from "@/components/header/Header";
import routers from "./config";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "@/components/GlobalLoading";

interface RouteObject {
  path: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  element?: React.ReactNode | null;
  Component: any;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  title: string;
}

const RootRouter = () => {
  return (
    <Router>
      <Layout />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/trove" />} />
        {routers.map((route: RouteObject) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              render={(props) => renderComponent(props, route)}
              exact
            />
          );
        })}
      </Switch>
      <ToastContainer />
      <GlobalLoading />
    </Router>
  );
};

function renderComponent(props: any, { path, title, Component }: RouteObject) {
  return (
    <AsyncComponent loadingDelay={50} path={path}>
      <ErrorBoundary>
        <div className="page-wrapper">
          <Component {...props} />
        </div>
      </ErrorBoundary>
    </AsyncComponent>
  );
}

export default RootRouter;
