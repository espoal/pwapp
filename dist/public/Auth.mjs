// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/Auth.mjs
import { React as React3, Routes, Route, Navigate } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/LoginPage.mjs
import { React, Link, Helmet } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/assets/index.mjs
var AuthImage = "/assets/images/auth-image.jpg";
var AuthDecoration = "/assets/images/auth-decoration.png";

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/LoginPage.mjs
var LoginPage = () => {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement(Helmet, null, /* @__PURE__ */ React.createElement("title", null, " Login page ")), /* @__PURE__ */ React.createElement("div", {
    className: "relative md:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen h-full flex flex-col after:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "block",
    to: "/"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-sm mx-auto px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-slate-800 font-bold mb-6"
  }, "Welcome back! \u2728"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "email"
  }, "Email Address"), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    className: "form-input w-full",
    type: "email"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    className: "form-input w-full",
    type: "password",
    autoComplete: "on"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-1"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "text-sm underline hover:no-underline",
    to: "/reset-password"
  }, "Forgot Password?")), /* @__PURE__ */ React.createElement(Link, {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3",
    to: "/"
  }, "Sign In"))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-5 mt-6 border-t border-slate-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, "Don\u2019t you have an account? ", /* @__PURE__ */ React.createElement(Link, {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    to: "/signup"
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-amber-100 text-amber-600 px-3 py-2 rounded"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "inline w-3 h-3 shrink-0 fill-current mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm"
  }, "To support you during the pandemic super pro features are free until March 31st."))))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "object-cover object-center w-full h-full",
    src: AuthImage,
    width: "760",
    height: "1024",
    alt: "Authentication"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
    src: AuthDecoration,
    width: "218",
    height: "224",
    alt: "Authentication decoration"
  }))));
};

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/SignupPage.mjs
import { React as React2, Link as Link2, Helmet as Helmet2 } from "/vendors/react.mjs";
var SignupPage = () => {
  return /* @__PURE__ */ React2.createElement("main", {
    className: "bg-white"
  }, /* @__PURE__ */ React2.createElement(Helmet2, null, /* @__PURE__ */ React2.createElement("title", null, " Signup page ")), /* @__PURE__ */ React2.createElement("div", {
    className: "relative md:flex"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "min-h-screen h-full flex flex-col after:flex-1"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React2.createElement(Link2, {
    className: "block",
    to: "/"
  }, /* @__PURE__ */ React2.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React2.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React2.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  }))))), /* @__PURE__ */ React2.createElement("div", {
    className: "max-w-sm mx-auto px-4 py-8"
  }, /* @__PURE__ */ React2.createElement("h1", {
    className: "text-3xl text-slate-800 font-bold mb-6"
  }, "Create your Account \u2728"), /* @__PURE__ */ React2.createElement("form", null, /* @__PURE__ */ React2.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "email"
  }, "Email Address ", /* @__PURE__ */ React2.createElement("span", {
    className: "text-rose-500"
  }, "*")), /* @__PURE__ */ React2.createElement("input", {
    id: "email",
    className: "form-input w-full",
    type: "email"
  })), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "name"
  }, "Full Name ", /* @__PURE__ */ React2.createElement("span", {
    className: "text-rose-500"
  }, "*")), /* @__PURE__ */ React2.createElement("input", {
    id: "name",
    className: "form-input w-full",
    type: "text"
  })), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "role"
  }, "Your Role ", /* @__PURE__ */ React2.createElement("span", {
    className: "text-rose-500"
  }, "*")), /* @__PURE__ */ React2.createElement("select", {
    id: "role",
    className: "form-select w-full"
  }, /* @__PURE__ */ React2.createElement("option", null, "Designer"), /* @__PURE__ */ React2.createElement("option", null, "Developer"), /* @__PURE__ */ React2.createElement("option", null, "Accountant"))), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React2.createElement("input", {
    id: "password",
    className: "form-input w-full",
    type: "password",
    autoComplete: "on"
  }))), /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center justify-between mt-6"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "mr-1"
  }, /* @__PURE__ */ React2.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm ml-2"
  }, "Email me about product news."))), /* @__PURE__ */ React2.createElement(Link2, {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap",
    to: "/"
  }, "Sign Up"))), /* @__PURE__ */ React2.createElement("div", {
    className: "pt-5 mt-6 border-t border-slate-200"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "text-sm"
  }, "Have an account? ", /* @__PURE__ */ React2.createElement(Link2, {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    to: "/signin"
  }, "Sign In")))))), /* @__PURE__ */ React2.createElement("div", {
    className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React2.createElement("img", {
    className: "object-cover object-center w-full h-full",
    src: AuthImage,
    width: "760",
    height: "1024",
    alt: "Authentication"
  }), /* @__PURE__ */ React2.createElement("img", {
    className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
    src: AuthDecoration,
    width: "218",
    height: "224",
    alt: "Authentication decoration"
  }))));
};

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/Auth.mjs
var Auth = () => {
  return /* @__PURE__ */ React3.createElement(Routes, null, /* @__PURE__ */ React3.createElement(Route, {
    path: "login",
    element: /* @__PURE__ */ React3.createElement(LoginPage, null)
  }), /* @__PURE__ */ React3.createElement(Route, {
    path: "dynamiclogin",
    element: /* @__PURE__ */ React3.createElement(LoginPage, null)
  }), /* @__PURE__ */ React3.createElement(Route, {
    path: "signup",
    element: /* @__PURE__ */ React3.createElement(SignupPage, null)
  }), /* @__PURE__ */ React3.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React3.createElement(Navigate, {
      replace: true,
      to: "/notFound"
    })
  }));
};
export {
  Auth
};
