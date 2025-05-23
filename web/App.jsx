import {
    SignedInOrRedirect,
    SignedOut,
    SignedOutOrRedirect,
  } from "@gadgetinc/react";
  import { Suspense, useEffect } from "react";
  import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router";
  import "./App.css";
  import Index from "./routes/index";
  import SignedInPage from "./routes/signed-in";
  import SignInPage from "./routes/sign-in";
  import SignUpPage from "./routes/sign-up";
import { Link } from "@remix-run/react";
  
  const App = () => {
    useEffect(() => {
      document.title = `Home - ${process.env["GADGET_APP"]} - Gadget`;
    }, []);
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <SignedOutOrRedirect>
                <Index />
              </SignedOutOrRedirect>
            }
          />
          <Route
            path="signed-in"
            element={
              <SignedInOrRedirect>
                <SignedInPage />
              </SignedInOrRedirect>
            }
          />
          <Route
            path="sign-in"
            element={
              <SignedOutOrRedirect>
                <SignInPage />
              </SignedOutOrRedirect>
            }
          />
          <Route
            path="sign-up"
            element={
              <SignedOutOrRedirect>
                <SignUpPage />
              </SignedOutOrRedirect>
            }
          />
        </Route>
      )
    );
  
    return (
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    );
  };
  
  const Layout = () => {
    return (
      <>
        <Header />
        <div className="app">
          <div className="app-content">
            <div className="main">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const Header = () => {
    return (
      <div className="header">
        <div className="logo">{process.env["GADGET_APP"]}</div>
        <div className="header-content">
          <SignedOut>
            <Link to="/sign-in" style={{ color: "black" }}>
              Sign in
            </Link>
            <Link to="/sign-up" style={{ color: "black" }}>
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    );
  };
  
  export default App;