// pnp:/home/mamluk/Projects/pwa/main/index.mjs
import {
  React as React3,
  createRoot,
  BrowserRouter
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwa/main/App.mjs
import {
  React as React2,
  useEffect,
  Routes,
  Route as Route2,
  useLocation
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwa/pkgs/auth/AuthRoutes.mjs
import { React, Route } from "/vendors/react.mjs";
var Auth = React.lazy(async () => {
  const { Auth: Auth2 } = await import("/Auth.mjs");
  return { default: Auth2 };
});
var AuthRoutes = () => /* @__PURE__ */ React.createElement(React.Suspense, {
  fallback: /* @__PURE__ */ React.createElement(React.Fragment, null, "Loading ...")
}, /* @__PURE__ */ React.createElement(Auth, null));

// pnp:/home/mamluk/Projects/pwa/main/App.mjs
var App = () => {
  const location = useLocation();
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React2.createElement(Routes, null, /* @__PURE__ */ React2.createElement(Route2, {
    path: "/",
    element: /* @__PURE__ */ React2.createElement("h1", null, "Hello world")
  }), /* @__PURE__ */ React2.createElement(Route2, {
    path: "/auth/*",
    element: /* @__PURE__ */ React2.createElement(AuthRoutes, null)
  }), /* @__PURE__ */ React2.createElement(Route2, {
    path: "*",
    element: /* @__PURE__ */ React2.createElement("h1", null, "Not Found")
  }));
};

// pnp:/home/mamluk/Projects/pwa/main/index.mjs
var container = document.getElementById("root");
createRoot(container).render(
  /* @__PURE__ */ React3.createElement(React3.StrictMode, null, /* @__PURE__ */ React3.createElement(BrowserRouter, null, /* @__PURE__ */ React3.createElement(App, null)))
);
