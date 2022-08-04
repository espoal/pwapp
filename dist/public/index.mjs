var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// pnp:/home/mamluk/Projects/pwapp/libs/assets/index.mjs
var AuthImage, AuthDecoration, UserAvatar;
var init_assets = __esm({
  "pnp:/home/mamluk/Projects/pwapp/libs/assets/index.mjs"() {
    AuthImage = "/assets/images/auth-image.jpg";
    AuthDecoration = "/assets/images/auth-decoration.png";
    UserAvatar = "/assets/images/user-avatar-32.png";
  }
});

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/LoginPage.mjs
import { React, Link } from "/vendors/react.mjs";
var LoginPage;
var init_LoginPage = __esm({
  "pnp:/home/mamluk/Projects/pwapp/pkgs/auth/LoginPage.mjs"() {
    init_assets();
    LoginPage = () => {
      return /* @__PURE__ */ React.createElement("main", {
        className: "bg-white"
      }, /* @__PURE__ */ React.createElement("div", {
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
  }
});

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/SignupPage.mjs
import { React as React2, Link as Link2 } from "/vendors/react.mjs";
var SignupPage;
var init_SignupPage = __esm({
  "pnp:/home/mamluk/Projects/pwapp/pkgs/auth/SignupPage.mjs"() {
    init_assets();
    SignupPage = () => {
      return /* @__PURE__ */ React2.createElement("main", {
        className: "bg-white"
      }, /* @__PURE__ */ React2.createElement("div", {
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
  }
});

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/Auth.mjs
var Auth_exports = {};
__export(Auth_exports, {
  Auth: () => Auth
});
import { React as React3, Routes, Route, Navigate } from "/vendors/react.mjs";
var Auth;
var init_Auth = __esm({
  "pnp:/home/mamluk/Projects/pwapp/pkgs/auth/Auth.mjs"() {
    init_LoginPage();
    init_SignupPage();
    Auth = () => {
      return /* @__PURE__ */ React3.createElement(Routes, null, /* @__PURE__ */ React3.createElement(Route, {
        path: "login",
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
  }
});

// pnp:/home/mamluk/Projects/pwapp/main/index.mjs
import {
  React as React20,
  createRoot,
  BrowserRouter
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/main/App.mjs
import {
  React as React19,
  useEffect as useEffect9,
  Routes as Routes2,
  Route as Route3,
  useLocation as useLocation2
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/pkgs/auth/AuthRoutes.mjs
import { React as React4, Route as Route2 } from "/vendors/react.mjs";
var Auth2 = React4.lazy(async () => {
  const { Auth: Auth3 } = await Promise.resolve().then(() => (init_Auth(), Auth_exports));
  return { default: Auth3 };
});
var AuthRoutes = () => /* @__PURE__ */ React4.createElement(React4.Suspense, {
  fallback: /* @__PURE__ */ React4.createElement(React4.Fragment, null, "Loading ...")
}, /* @__PURE__ */ React4.createElement(Auth2, null));

// pnp:/home/mamluk/Projects/pwapp/pkgs/dash/DashboardPage.mjs
import { React as React18, useState as useState8 } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/components/sidebar/Sidebar.mjs
import {
  React as React6,
  useState as useState2,
  useEffect,
  useRef,
  NavLink,
  useLocation
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/components/sidebar/SidebarLinkGroup.mjs
import { React as React5, useState, useNavigate } from "/vendors/react.mjs";
var SidebarLinkGroup = ({
  children,
  activecondition
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
    navigate("/dash");
  };
  return /* @__PURE__ */ React5.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-slate-900"}`
  }, children(handleClick, open));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/sidebar/Sidebar.mjs
var Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = true;
  const [sidebarExpanded, setSidebarExpanded] = useState2(storedSidebarExpanded);
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27)
        return;
      console.log(" Should close sidebar 2");
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("div", {
    className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React6.createElement("div", {
    id: "sidebar",
    ref: sidebar,
    className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex justify-between mb-10 pr-3 sm:px-2"
  }, /* @__PURE__ */ React6.createElement("button", {
    ref: trigger,
    className: "lg:hidden text-slate-500 hover:text-slate-400",
    onClick: () => setSidebarOpen(!sidebarOpen),
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "sr-only"
  }, "Close sidebar"), /* @__PURE__ */ React6.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
  }))), /* @__PURE__ */ React6.createElement(NavLink, {
    end: true,
    to: "/",
    className: "block"
  }, /* @__PURE__ */ React6.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React6.createElement("defs", null, /* @__PURE__ */ React6.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React6.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React6.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React6.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React6.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React6.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React6.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  })))), /* @__PURE__ */ React6.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React6.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "Pages")), /* @__PURE__ */ React6.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname === "/" || pathname.includes("dashboard"),
    default: "/dash"
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${(pathname === "/" || pathname.includes("dashboard")) && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "!text-indigo-500"}`,
      d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-600"}`,
      d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-200"}`,
      d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dashboard")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Main"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/dashboard/analytics",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Analytics"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/dashboard/fintech",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Fintech"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("ecommerce")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("ecommerce") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("ecommerce") && "text-indigo-300"}`,
      d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("ecommerce") && "!text-indigo-600"}`,
      d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("ecommerce") && "text-indigo-500"}`,
      d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "E-Commerce")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/customers",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Customers"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/orders",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Orders"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/invoices",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Invoices"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop 2"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/product",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Single Product"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 2"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-3",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 3"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/ecommerce/pay",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pay"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("community")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("community") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("community") && "text-indigo-500"}`,
      d: "M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("community") && "text-indigo-300"}`,
      d: "M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Community")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/users-tabs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Users - Tabs"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/users-tiles",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Users - Tiles"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/profile",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Profile"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/feed",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Feed"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/forum",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Forum"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/forum-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Forum - Post"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/meetups",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Meetups"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/community/meetups-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Meetups - Post"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("finance")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("finance") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("finance") && "text-indigo-300"}`,
      d: "M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("finance") && "!text-indigo-500"}`,
      d: "M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("finance") && "text-indigo-600"}`,
      d: "M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Finance")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/finance/cards",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cards"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/finance/transactions",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Transactions"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/finance/transaction-details",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Transaction Details"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("job")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("job") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("job") && "!text-indigo-600"}`,
      d: "M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("job") && "!text-indigo-500"}`,
      d: "M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("job") && "!text-indigo-300"}`,
      d: "M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Job Board")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/job/job-listing",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Listing"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/job/job-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Job Post"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/job/company-profile",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Company Profile"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("tasks")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("tasks") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
      d: "M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
      d: "M1 1h22v23H1z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("tasks") && "text-indigo-300"}`,
      d: "M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tasks")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/tasks/kanban",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Kanban"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/tasks/list",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "List"))))));
  }), /* @__PURE__ */ React6.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("messages") && "bg-slate-900"}`
  }, /* @__PURE__ */ React6.createElement(NavLink, {
    end: true,
    to: "/messages",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("messages") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow flex items-center"
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("messages") && "text-indigo-500"}`,
    d: "M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("messages") && "text-indigo-300"}`,
    d: "M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
  })), /* @__PURE__ */ React6.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Messages")), /* @__PURE__ */ React6.createElement("div", {
    className: "flex flex-shrink-0 ml-2"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded"
  }, "4"))))), /* @__PURE__ */ React6.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("inbox") && "bg-slate-900"}`
  }, /* @__PURE__ */ React6.createElement(NavLink, {
    end: true,
    to: "/inbox",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("inbox") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("inbox") && "text-indigo-500"}`,
    d: "M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("inbox") && "text-indigo-300"}`,
    d: "m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
  })), /* @__PURE__ */ React6.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Inbox")))), /* @__PURE__ */ React6.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("calendar") && "bg-slate-900"}`
  }, /* @__PURE__ */ React6.createElement(NavLink, {
    end: true,
    to: "/calendar",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("calendar") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("calendar") && "text-indigo-500"}`,
    d: "M1 3h22v20H1z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("calendar") && "text-indigo-300"}`,
    d: "M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
  })), /* @__PURE__ */ React6.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Calendar")))), /* @__PURE__ */ React6.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-slate-900"}`
  }, /* @__PURE__ */ React6.createElement(NavLink, {
    end: true,
    to: "/campaigns",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("campaigns") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("campaigns") && "text-indigo-500"}`,
    d: "M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("campaigns") && "text-indigo-300"}`,
    d: "M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
  })), /* @__PURE__ */ React6.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Campaigns")))), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("settings")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("settings") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Settings")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/account",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Account"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/notifications",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Notifications"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/apps",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Connected Apps"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/plans",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Plans"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/billing",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Billing & Invoices"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/settings/feedback",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Give Feedback"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("utility")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("utility") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "18.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "5.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "18.5",
      cy: "18.5",
      r: "4.5"
    }), /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "5.5",
      cy: "18.5",
      r: "4.5"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Utility")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/changelog",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Changelog"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/roadmap",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Roadmap"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/faqs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "FAQs"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/empty-state",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Empty State"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/404",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "404"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/utility/knowledge-base",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Knowledge Base"))))));
  }))), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React6.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "More")), /* @__PURE__ */ React6.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React6.createElement(SidebarLinkGroup, null, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${open && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: "fill-current text-slate-600",
      d: "M8.07 16H10V8H8.07a8 8 0 110 8z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: "fill-current text-slate-400",
      d: "M15 12L8 6v5H0v2h8v5z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Authentication")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/signin",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Sign in"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/signup",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Sign up"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/reset-password",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Reset Password"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, null, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${open && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("path", {
      className: "fill-current text-slate-600",
      d: "M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
    }), /* @__PURE__ */ React6.createElement("path", {
      className: "fill-current text-slate-400",
      d: "M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Onboarding")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/onboarding-01",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 1"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/onboarding-02",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 2"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/onboarding-03",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 3"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/onboarding-04",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 4"))))));
  }), /* @__PURE__ */ React6.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("component")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("component") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React6.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("component") && "text-indigo-500"}`,
      cx: "16",
      cy: "8",
      r: "8"
    }), /* @__PURE__ */ React6.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("component") && "text-indigo-300"}`,
      cx: "8",
      cy: "16",
      r: "8"
    })), /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Components")), /* @__PURE__ */ React6.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React6.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React6.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React6.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React6.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/button",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Button"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/form",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Input Form"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/dropdown",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dropdown"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/alert",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Alert & Banner"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/modal",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Modal"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/pagination",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pagination"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/tabs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tabs"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/breadcrumb",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Breadcrumb"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/badge",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Badge"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/avatar",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Avatar"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/tooltip",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tooltip"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/accordion",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Accordion"))), /* @__PURE__ */ React6.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React6.createElement(NavLink, {
      end: true,
      to: "/component/icons",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Icons"))))));
  })))), /* @__PURE__ */ React6.createElement("div", {
    className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "px-3 py-2"
  }, /* @__PURE__ */ React6.createElement("button", {
    onClick: () => setSidebarExpanded(!sidebarExpanded)
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "sr-only"
  }, "Expand / collapse sidebar"), /* @__PURE__ */ React6.createElement("svg", {
    className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: "text-slate-400",
    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: "text-slate-600",
    d: "M3 23H1V1h2z"
  })))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/Header.mjs
import { React as React12, useState as useState6 } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/components/SearchModal.mjs
import {
  React as React8,
  useRef as useRef3,
  useEffect as useEffect3,
  Link as Link3
} from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/components/transition/Transition.mjs
import {
  React as React7,
  useRef as useRef2,
  useEffect as useEffect2,
  useContext,
  ReactCSSTransition
} from "/vendors/react.mjs";
var TransitionContext = React7.createContext({
  parent: {}
});
function useIsInitialRender() {
  const isInitialRender = useRef2(true);
  useEffect2(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}
var CSSTransition = ({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  ...rest
}) => {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;
  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }
  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }
  const nodeRef = React7.useRef(null);
  const Component2 = tag;
  return /* @__PURE__ */ React7.createElement(ReactCSSTransition, {
    appear,
    nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: (done) => {
      nodeRef.current.addEventListener("transitionend", done, false);
    },
    onEnter: () => {
      if (!removeFromDom)
        nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom)
        nodeRef.current.style.display = "none";
    }
  }, /* @__PURE__ */ React7.createElement(Component2, {
    ref: nodeRef,
    ...rest,
    style: { display: !removeFromDom ? "none" : null }
  }, children));
};
var Transition = ({ show, appear, ...rest }) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === void 0;
  if (isChild) {
    return /* @__PURE__ */ React7.createElement(CSSTransition, {
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show,
      ...rest
    });
  }
  return /* @__PURE__ */ React7.createElement(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    }
  }, /* @__PURE__ */ React7.createElement(CSSTransition, {
    appear,
    show,
    ...rest
  }));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/components/SearchModal.mjs
var SearchModal = ({
  id,
  searchId,
  modalOpen,
  setModalOpen
}) => {
  const modalContent = useRef3(null);
  const searchInput = useRef3(null);
  useEffect3(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target))
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect3(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27)
        return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  useEffect3(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Transition, {
    className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
    show: modalOpen,
    enter: "transition ease-out duration-200",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-out duration-100",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React8.createElement(Transition, {
    id,
    className: "fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6",
    role: "dialog",
    "aria-modal": "true",
    show: modalOpen,
    enter: "transition ease-in-out duration-200",
    enterStart: "opacity-0 translate-y-4",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in-out duration-200",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-4"
  }, /* @__PURE__ */ React8.createElement("div", {
    ref: modalContent,
    className: "bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
  }, /* @__PURE__ */ React8.createElement("form", {
    className: "border-b border-slate-200"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React8.createElement("label", {
    htmlFor: searchId,
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React8.createElement("input", {
    id: searchId,
    className: "w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",
    type: "search",
    placeholder: "Search Anything\u2026",
    ref: searchInput
  }), /* @__PURE__ */ React8.createElement("button", {
    className: "absolute inset-0 right-auto group",
    type: "submit",
    "aria-label": "Search"
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))))), /* @__PURE__ */ React8.createElement("div", {
    className: "py-4 px-2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent searches"), /* @__PURE__ */ React8.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Form Builder - 23 hours on-demand video"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Access Mosaic on mobile and TV"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Product Update - Q4 2021"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Master Digital Marketing Strategy course"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Dedicated forms for products"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Product Update - Q4 2021"))))), /* @__PURE__ */ React8.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent pages"), /* @__PURE__ */ React8.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React8.createElement("span", null, /* @__PURE__ */ React8.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Mike Mills"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link3, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React8.createElement("span", null, /* @__PURE__ */ React8.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Eva Patrick")))))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/components/DropdownNotifications.mjs
import {
  React as React9,
  useState as useState3,
  useRef as useRef4,
  useEffect as useEffect4,
  Link as Link4
} from "/vendors/react.mjs";
var DropdownNotifications = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState3(false);
  const trigger = useRef4(null);
  const dropdown = useRef4(null);
  useEffect4(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect4(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React9.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React9.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "sr-only"
  }, "Notifications"), /* @__PURE__ */ React9.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React9.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
  }), /* @__PURE__ */ React9.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
  })), /* @__PURE__ */ React9.createElement("div", {
    className: "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
  })), /* @__PURE__ */ React9.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React9.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Notifications"), /* @__PURE__ */ React9.createElement("ul", null, /* @__PURE__ */ React9.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React9.createElement(Link4, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React9.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React9.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 12, 2021"))), /* @__PURE__ */ React9.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React9.createElement(Link4, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React9.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React9.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 9, 2021"))), /* @__PURE__ */ React9.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React9.createElement(Link4, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F680}", /* @__PURE__ */ React9.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Say goodbye to paper receipts!"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React9.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Jan 24, 2020")))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/components/DropdownProfile.mjs
import {
  React as React10,
  useState as useState4,
  useRef as useRef5,
  useEffect as useEffect5,
  Link as Link5
} from "/vendors/react.mjs";
init_assets();
var DropdownProfile = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState4(false);
  const trigger = useRef5(null);
  const dropdown = useRef5(null);
  useEffect5(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect5(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React10.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React10.createElement("button", {
    ref: trigger,
    className: "inline-flex justify-center items-center group",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React10.createElement("img", {
    className: "w-8 h-8 rounded-full",
    src: UserAvatar,
    width: "32",
    height: "32",
    alt: "User"
  }), /* @__PURE__ */ React10.createElement("div", {
    className: "flex items-center truncate"
  }, /* @__PURE__ */ React10.createElement("span", {
    className: "truncate ml-2 text-sm font-medium group-hover:text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React10.createElement("svg", {
    className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React10.createElement("path", {
    d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
  })))), /* @__PURE__ */ React10.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React10.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "font-medium text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React10.createElement("div", {
    className: "text-xs text-slate-500 italic"
  }, "Administrator")), /* @__PURE__ */ React10.createElement("ul", null, /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/settings",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Settings")), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/signin",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Sign Out"))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/components/DropdownHelp.mjs
import {
  React as React11,
  useState as useState5,
  useRef as useRef6,
  useEffect as useEffect6,
  Link as Link6
} from "/vendors/react.mjs";
var DropdownHelp = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState5(false);
  const trigger = useRef6(null);
  const dropdown = useRef6(null);
  useEffect6(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect6(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React11.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React11.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React11.createElement("span", {
    className: "sr-only"
  }, "Need help?"), /* @__PURE__ */ React11.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React11.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React11.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Need help?"), /* @__PURE__ */ React11.createElement("ul", null, /* @__PURE__ */ React11.createElement("li", null, /* @__PURE__ */ React11.createElement(Link6, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React11.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React11.createElement("rect", {
    y: "3",
    width: "12",
    height: "9",
    rx: "1"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M2 0h8v2H2z"
  })), /* @__PURE__ */ React11.createElement("span", null, "Documentation"))), /* @__PURE__ */ React11.createElement("li", null, /* @__PURE__ */ React11.createElement(Link6, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React11.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
  })), /* @__PURE__ */ React11.createElement("span", null, "Support Site"))), /* @__PURE__ */ React11.createElement("li", null, /* @__PURE__ */ React11.createElement(Link6, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React11.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
  })), /* @__PURE__ */ React11.createElement("span", null, "Contact us")))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/header/Header.mjs
var Header = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const [searchModalOpen, setSearchModalOpen] = useState6(false);
  return /* @__PURE__ */ React12.createElement("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex items-center justify-between h-16 -mb-px"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React12.createElement("button", {
    className: "text-slate-500 hover:text-slate-600 lg:hidden",
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen,
    onClick: () => setSidebarOpen(!sidebarOpen)
  }, /* @__PURE__ */ React12.createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /* @__PURE__ */ React12.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React12.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React12.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React12.createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2"
  })))), /* @__PURE__ */ React12.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React12.createElement("button", {
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && "bg-slate-200"}`,
    onClick: (e) => {
      e.stopPropagation();
      setSearchModalOpen(true);
    },
    "aria-controls": "search-modal"
  }, /* @__PURE__ */ React12.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React12.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React12.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React12.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))), /* @__PURE__ */ React12.createElement(SearchModal, {
    id: "search-modal",
    searchId: "search",
    modalOpen: searchModalOpen,
    setModalOpen: setSearchModalOpen
  }), /* @__PURE__ */ React12.createElement(DropdownNotifications, {
    align: "right"
  }), /* @__PURE__ */ React12.createElement(DropdownHelp, {
    align: "right"
  }), /* @__PURE__ */ React12.createElement("hr", {
    className: "w-px h-6 bg-slate-200 mx-3"
  }), /* @__PURE__ */ React12.createElement(DropdownProfile, {
    align: "right"
  })))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/filterButton/FilterButton.mjs
import {
  React as React13,
  useState as useState7,
  useRef as useRef7,
  useEffect as useEffect7
} from "/vendors/react.mjs";
var FilterButton = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState7(false);
  const trigger = useRef7(null);
  const dropdown = useRef7(null);
  useEffect7(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect7(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React13.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React13.createElement("button", {
    ref: trigger,
    className: "btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React13.createElement("span", {
    className: "sr-only"
  }, "Filter"), /* @__PURE__ */ React13.createElement("wbr", null), /* @__PURE__ */ React13.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
  }))), /* @__PURE__ */ React13.createElement(Transition, {
    show: dropdownOpen,
    tag: "div",
    className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React13.createElement("div", {
    ref: dropdown
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Filters"), /* @__PURE__ */ React13.createElement("ul", {
    className: "mb-4"
  }, /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Direct VS Indirect"))), /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Real Time Value"))), /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Top Channels"))), /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Sales VS Refunds"))), /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Last Order"))), /* @__PURE__ */ React13.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React13.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React13.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Total Spent")))), /* @__PURE__ */ React13.createElement("div", {
    className: "py-2 px-3 border-t border-slate-200 bg-slate-50"
  }, /* @__PURE__ */ React13.createElement("ul", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("button", {
    className: "btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
  }, "Clear")), /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("button", {
    className: "btn-xs bg-indigo-500 hover:bg-indigo-600 text-white",
    onClick: () => setDropdownOpen(false),
    onBlur: () => setDropdownOpen(false)
  }, "Apply")))))));
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/datePicker/DatePicker.mjs
import { React as React15 } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/components/datePicker/Flatpickr.mjs
import { React as React14, Component } from "/vendors/react.mjs";
import { flatpickr as flat } from "/vendors/misc.mjs";
import { PropTypes as Props } from "/vendors/react.mjs";
var PropTypes = Props.default;
var flatpickr = flat.default;
var hooks = [
  "onChange",
  "onOpen",
  "onClose",
  "onMonthChange",
  "onYearChange",
  "onReady",
  "onValueUpdate",
  "onDayCreate"
];
var hookPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.func)
]);
var callbacks = [
  "onCreate",
  "onDestroy"
];
var callbackPropTypes = PropTypes.func;
var Flatpickr = class extends Component {
  componentDidUpdate(prevProps) {
    const { options } = this.props;
    const prevOptions = prevProps.options;
    hooks.forEach((hook) => {
      mergeHooks(options, this.props, hook);
      mergeHooks(prevOptions, prevProps, hook);
    });
    const optionsKeys = Object.getOwnPropertyNames(options);
    for (let index = optionsKeys.length - 1; index >= 0; index--) {
      const key = optionsKeys[index];
      let value = options[key];
      if (value !== prevOptions[key]) {
        if (hooks.indexOf(key) !== -1 && !Array.isArray(value)) {
          value = [value];
        }
        this.flatpickr.set(key, value);
      }
    }
    if (this.props.hasOwnProperty("value") && this.props.value !== prevProps.value) {
      this.flatpickr.setDate(this.props.value, false);
    }
  }
  componentDidMount() {
    this.createFlatpickrInstance();
  }
  componentWillUnmount() {
    this.destroyFlatpickrInstance();
  }
  createFlatpickrInstance = () => {
    const options = {
      onClose: () => {
        this.node.blur && this.node.blur();
      },
      ...this.props.options
    };
    hooks.forEach((hook) => {
      if (this.props[hook]) {
        options[hook] = this.props[hook];
      }
    });
    this.flatpickr = flatpickr(this.node, options);
    if (this.props.hasOwnProperty("value")) {
      this.flatpickr.setDate(this.props.value, false);
    }
    const { onCreate } = this.props;
    if (onCreate)
      onCreate(this.flatpickr);
  };
  destroyFlatpickrInstance = () => {
    const { onDestroy } = this.props;
    if (onDestroy)
      onDestroy(this.flatpickr);
    this.flatpickr.destroy();
    this.flatpickr = null;
  };
  handleNodeChange = (node) => {
    this.node = node;
    if (this.flatpickr) {
      this.destroyFlatpickrInstance();
      this.createFlatpickrInstance();
    }
  };
  render() {
    const { options, defaultValue, value, children, render, ...props } = this.props;
    hooks.forEach((hook) => {
      delete props[hook];
    });
    callbacks.forEach((callback) => {
      delete props[callback];
    });
    if (render)
      return render({ ...props, defaultValue, value }, this.handleNodeChange);
    return options.wrap ? /* @__PURE__ */ React14.createElement("div", {
      ...props,
      ref: this.handleNodeChange
    }, children) : /* @__PURE__ */ React14.createElement("input", {
      ...props,
      defaultValue,
      ref: this.handleNodeChange
    });
  }
};
__publicField(Flatpickr, "propTypes", {
  defaultValue: PropTypes.string,
  options: PropTypes.object,
  onChange: hookPropType,
  onOpen: hookPropType,
  onClose: hookPropType,
  onMonthChange: hookPropType,
  onYearChange: hookPropType,
  onReady: hookPropType,
  onValueUpdate: hookPropType,
  onDayCreate: hookPropType,
  onCreate: callbackPropTypes,
  onDestroy: callbackPropTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  render: PropTypes.func
});
__publicField(Flatpickr, "defaultProps", {
  options: {}
});
function mergeHooks(inputOptions, props, hook) {
  const options = { ...inputOptions };
  if (props.hasOwnProperty(hook)) {
    if (options[hook] && !Array.isArray(options[hook])) {
      options[hook] = [options[hook]];
    } else if (!options[hook]) {
      options[hook] = [];
    }
    const propHook = Array.isArray(props[hook]) ? props[hook] : [props[hook]];
    options[hook].push(...propHook);
  }
  return options;
}

// pnp:/home/mamluk/Projects/pwapp/libs/components/datePicker/DatePicker.mjs
var DatePicker = ({
  align
}) => {
  const options = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
      const customClass = align ? align : "";
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
    }
  };
  return /* @__PURE__ */ React15.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React15.createElement(Flatpickr, {
    className: "form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60",
    options
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "absolute inset-0 right-auto flex items-center pointer-events-none"
  }, /* @__PURE__ */ React15.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-500 ml-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React15.createElement("path", {
    d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
  }))));
};

// pnp:/home/mamluk/Projects/pwapp/pkgs/dash/userChart/UserChart.mjs
import { React as React17 } from "/vendors/react.mjs";

// pnp:/home/mamluk/Projects/pwapp/libs/tailwind/resolvedConfig.mjs
var resolvedConfig = {
  "theme": {
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "xs": "480px"
    },
    "colors": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "columns": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "auto": "auto",
      "3xs": "16rem",
      "2xs": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    "spacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "animation": {
      "none": "none",
      "spin": "spin 1s linear infinite",
      "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "bounce": "bounce 1s infinite"
    },
    "aspectRatio": {
      "auto": "auto",
      "square": "1 / 1",
      "video": "16 / 9"
    },
    "backdropBlur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "backdropBrightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropContrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropGrayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropHueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "backdropInvert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backdropSaturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "backdropSepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backgroundColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "backgroundImage": {
      "none": "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    "backgroundOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backgroundPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "backgroundSize": {
      "auto": "auto",
      "cover": "cover",
      "contain": "contain"
    },
    "blur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "brightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "borderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "DEFAULT": "#e5e7eb"
    },
    "borderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "borderRadius": {
      "none": "0px",
      "sm": "0.125rem",
      "DEFAULT": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "full": "9999px"
    },
    "borderSpacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "borderWidth": {
      "0": "0px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "boxShadow": {
      "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "DEFAULT": "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      "md": "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
      "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
      "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "none": "none"
    },
    "boxShadowColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "caretColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "accentColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "auto": "auto"
    },
    "contrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "container": {},
    "content": {
      "none": "none"
    },
    "cursor": {
      "auto": "auto",
      "default": "default",
      "pointer": "pointer",
      "wait": "wait",
      "text": "text",
      "move": "move",
      "help": "help",
      "not-allowed": "not-allowed",
      "none": "none",
      "context-menu": "context-menu",
      "progress": "progress",
      "cell": "cell",
      "crosshair": "crosshair",
      "vertical-text": "vertical-text",
      "alias": "alias",
      "copy": "copy",
      "no-drop": "no-drop",
      "grab": "grab",
      "grabbing": "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    "divideColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "DEFAULT": "#e5e7eb"
    },
    "divideOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "divideWidth": {
      "0": "0px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "dropShadow": {
      "sm": "0 1px 1px rgb(0 0 0 / 0.05)",
      "DEFAULT": [
        "0 1px 2px rgb(0 0 0 / 0.1)",
        "0 1px 1px rgb(0 0 0 / 0.06)"
      ],
      "md": [
        "0 4px 3px rgb(0 0 0 / 0.07)",
        "0 2px 2px rgb(0 0 0 / 0.06)"
      ],
      "lg": [
        "0 10px 8px rgb(0 0 0 / 0.04)",
        "0 4px 3px rgb(0 0 0 / 0.1)"
      ],
      "xl": [
        "0 20px 13px rgb(0 0 0 / 0.03)",
        "0 8px 5px rgb(0 0 0 / 0.08)"
      ],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      "none": "0 0 #0000"
    },
    "fill": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "grayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "hueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "invert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "flex": {
      "1": "1 1 0%",
      "auto": "1 1 auto",
      "initial": "0 1 auto",
      "none": "none"
    },
    "flexBasis": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%"
    },
    "flexGrow": {
      "0": "0",
      "DEFAULT": "1"
    },
    "flexShrink": {
      "0": "0",
      "DEFAULT": "1"
    },
    "fontFamily": {
      "sans": [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      "serif": [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ],
      "mono": [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
      "inter": [
        "Inter",
        "sans-serif"
      ]
    },
    "fontSize": {
      "xs": [
        "0.75rem",
        {
          "lineHeight": "1.5"
        }
      ],
      "sm": [
        "0.875rem",
        {
          "lineHeight": "1.5715"
        }
      ],
      "base": [
        "1rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "lg": [
        "1.125rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "xl": [
        "1.25rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "2xl": [
        "1.5rem",
        {
          "lineHeight": "1.33",
          "letterSpacing": "-0.01em"
        }
      ],
      "3xl": [
        "1.88rem",
        {
          "lineHeight": "1.33",
          "letterSpacing": "-0.01em"
        }
      ],
      "4xl": [
        "2.25rem",
        {
          "lineHeight": "1.25",
          "letterSpacing": "-0.02em"
        }
      ],
      "5xl": [
        "3rem",
        {
          "lineHeight": "1.25",
          "letterSpacing": "-0.02em"
        }
      ],
      "6xl": [
        "3.75rem",
        {
          "lineHeight": "1.2",
          "letterSpacing": "-0.02em"
        }
      ],
      "7xl": [
        "4.5rem",
        {
          "lineHeight": "1"
        }
      ],
      "8xl": [
        "6rem",
        {
          "lineHeight": "1"
        }
      ],
      "9xl": [
        "8rem",
        {
          "lineHeight": "1"
        }
      ]
    },
    "fontWeight": {
      "thin": "100",
      "extralight": "200",
      "light": "300",
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
      "extrabold": "800",
      "black": "900"
    },
    "gap": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "gradientColorStops": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "gridAutoColumns": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridAutoRows": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridColumn": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    "gridColumnEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridColumnStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridRow": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    "gridRowStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridRowEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridTemplateColumns": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))",
      "9": "repeat(9, minmax(0, 1fr))",
      "10": "repeat(10, minmax(0, 1fr))",
      "11": "repeat(11, minmax(0, 1fr))",
      "12": "repeat(12, minmax(0, 1fr))",
      "none": "none"
    },
    "gridTemplateRows": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "none": "none"
    },
    "height": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "inset": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "keyframes": {
      "spin": {
        "to": {
          "transform": "rotate(360deg)"
        }
      },
      "ping": {
        "75%, 100%": {
          "transform": "scale(2)",
          "opacity": "0"
        }
      },
      "pulse": {
        "50%": {
          "opacity": ".5"
        }
      },
      "bounce": {
        "0%, 100%": {
          "transform": "translateY(-25%)",
          "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          "transform": "none",
          "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    "letterSpacing": {
      "tighter": "-0.05em",
      "tight": "-0.025em",
      "normal": "0em",
      "wide": "0.025em",
      "wider": "0.05em",
      "widest": "0.1em"
    },
    "lineHeight": {
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "none": "1",
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2"
    },
    "listStyleType": {
      "none": "none",
      "disc": "disc",
      "decimal": "decimal"
    },
    "margin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "maxHeight": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "maxWidth": {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1536px",
      "screen-xs": "480px",
      "8xl": "88rem",
      "9xl": "96rem"
    },
    "minHeight": {
      "0": "0px",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "minWidth": {
      "0": "0px",
      "36": "9rem",
      "44": "11rem",
      "56": "14rem",
      "60": "15rem",
      "72": "18rem",
      "80": "20rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "objectPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "opacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "order": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "first": "-9999",
      "last": "9999",
      "none": "0"
    },
    "padding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "placeholderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "placeholderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "outlineColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "outlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "outlineWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringColor": {
      "DEFAULT": "#3b82f6",
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "ringOffsetColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "ringOffsetWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "DEFAULT": "0.5"
    },
    "ringWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "3px"
    },
    "rotate": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg"
    },
    "saturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "scale": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5"
    },
    "scrollMargin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "scrollPadding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "sepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "skew": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg"
    },
    "space": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "stroke": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "strokeWidth": {
      "0": "0",
      "1": "1",
      "2": "2"
    },
    "textColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "textDecorationColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "textDecorationThickness": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto",
      "from-font": "from-font"
    },
    "textUnderlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto"
    },
    "textIndent": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "textOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "transformOrigin": {
      "center": "center",
      "top": "top",
      "top-right": "top right",
      "right": "right",
      "bottom-right": "bottom right",
      "bottom": "bottom",
      "bottom-left": "bottom left",
      "left": "left",
      "top-left": "top left"
    },
    "transitionDelay": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms"
    },
    "transitionDuration": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
      "DEFAULT": "150ms"
    },
    "transitionProperty": {
      "none": "none",
      "all": "all",
      "DEFAULT": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "colors": "color, background-color, border-color, text-decoration-color, fill, stroke",
      "opacity": "opacity",
      "shadow": "box-shadow",
      "transform": "transform"
    },
    "transitionTimingFunction": {
      "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "translate": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "width": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%",
      "screen": "100vw",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "willChange": {
      "auto": "auto",
      "scroll": "scroll-position",
      "contents": "contents",
      "transform": "transform"
    },
    "zIndex": {
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "60": "60",
      "auto": "auto"
    },
    "outline": {
      "blue": "2px solid rgba(0, 112, 244, 0.5)"
    }
  },
  "corePlugins": [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
  ],
  "plugins": [
    null,
    {}
  ],
  "content": {
    "files": [
      "/home/mamluk/Projects/modern-pwa/libs/tailwind/dist/public/index.html",
      "/home/mamluk/Projects/modern-pwa/libs/tailwind/pkgs/**/*.mjs",
      "/home/mamluk/Projects/modern-pwa/libs/tailwind/libs/**/*.mjs",
      "/home/mamluk/Projects/modern-pwa/libs/tailwind/main/**/*.mjs"
    ],
    "extract": {},
    "transform": {}
  },
  "presets": [],
  "darkMode": "media",
  "variantOrder": [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled"
  ],
  "prefix": "",
  "important": false,
  "separator": ":",
  "safelist": []
};

// pnp:/home/mamluk/Projects/pwapp/libs/tailwind/config.mjs
var tailwindConfig = () => {
  return resolvedConfig;
};
var hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

// pnp:/home/mamluk/Projects/pwapp/libs/components/charts/LineChart.mjs
import { React as React16, useRef as useRef8, useEffect as useEffect8 } from "/vendors/react.mjs";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
} from "/vendors/charts.mjs";
var formatThousands = (value) => Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  notation: "compact"
}).format(value);
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);
var LineChart = ({
  data,
  width,
  height
}) => {
  const canvas = useRef8(null);
  useEffect8(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "line",
      data,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false
            },
            ticks: {
              callback: (value) => formatThousands(value)
            }
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatThousands(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      }
    });
    return () => chart.destroy();
  }, [data]);
  return /* @__PURE__ */ React16.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
};

// pnp:/home/mamluk/Projects/pwapp/pkgs/dash/userChart/UserChart.mjs
var UserChart = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023"
    ],
    datasets: [
      {
        label: "Current",
        data: [
          5e3,
          8700,
          7500,
          12e3,
          11e3,
          9500,
          10500,
          1e4,
          15e3,
          9e3,
          1e4,
          7e3,
          22e3,
          7200,
          9800,
          9e3,
          1e4,
          8e3,
          15e3,
          12e3,
          11e3,
          13e3,
          11e3,
          15e3,
          17e3,
          18e3
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        label: "Previous",
        data: [
          8e3,
          5e3,
          6500,
          5e3,
          6500,
          12e3,
          8e3,
          9e3,
          8e3,
          8e3,
          12500,
          1e4,
          1e4,
          12e3,
          11e3,
          16e3,
          12e3,
          1e4,
          1e4,
          14e3,
          9e3,
          1e4,
          15e3,
          12500,
          14e3,
          11e3
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React17.createElement("div", {
    className: "flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React17.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React17.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Analytics")), /* @__PURE__ */ React17.createElement("div", {
    className: "px-5 py-1"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex flex-wrap"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "24.7K"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm font-medium text-emerald-500"
  }, "+49%")), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Unique Visitors")), /* @__PURE__ */ React17.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "56.9K"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm font-medium text-emerald-500"
  }, "+7%")), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Total Pageviews")), /* @__PURE__ */ React17.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "54%"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm font-medium text-amber-500"
  }, "-7%")), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Bounce Rate")), /* @__PURE__ */ React17.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "2m 56s"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm font-medium text-amber-500"
  }, "+7%")), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Visit Duration"))))), /* @__PURE__ */ React17.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React17.createElement(LineChart, {
    data: chartData,
    width: 800,
    height: 300
  })));
};

// pnp:/home/mamluk/Projects/pwapp/pkgs/dash/DashboardPage.mjs
var DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState8(false);
  return /* @__PURE__ */ React18.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /* @__PURE__ */ React18.createElement(Sidebar, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React18.createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /* @__PURE__ */ React18.createElement(Header, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React18.createElement("main", null, /* @__PURE__ */ React18.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "mb-4 sm:mb-0"
  }, /* @__PURE__ */ React18.createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold"
  }, "Dashboard")), /* @__PURE__ */ React18.createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /* @__PURE__ */ React18.createElement(FilterButton, {
    align: "right"
  }), /* @__PURE__ */ React18.createElement(DatePicker, {
    align: "right"
  }), /* @__PURE__ */ React18.createElement("button", {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white"
  }, /* @__PURE__ */ React18.createElement("svg", {
    className: "w-4 h-4 fill-current opacity-50 shrink-0",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React18.createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), /* @__PURE__ */ React18.createElement("span", {
    className: "hidden xs:block ml-2"
  }, "Add View")))), /* @__PURE__ */ React18.createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /* @__PURE__ */ React18.createElement(UserChart, null))))));
};

// pnp:/home/mamluk/Projects/pwapp/main/App.mjs
var App = () => {
  const location = useLocation2();
  useEffect9(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React19.createElement(Routes2, null, /* @__PURE__ */ React19.createElement(Route3, {
    path: "/",
    element: /* @__PURE__ */ React19.createElement("h1", null, "Hello world")
  }), /* @__PURE__ */ React19.createElement(Route3, {
    path: "/auth/*",
    element: /* @__PURE__ */ React19.createElement(AuthRoutes, null)
  }), /* @__PURE__ */ React19.createElement(Route3, {
    path: "/dash",
    element: /* @__PURE__ */ React19.createElement(DashboardPage, null)
  }), /* @__PURE__ */ React19.createElement(Route3, {
    path: "*",
    element: /* @__PURE__ */ React19.createElement("h1", null, "Not Found")
  }));
};

// pnp:/home/mamluk/Projects/pwapp/main/index.mjs
var container = document.getElementById("root");
createRoot(container).render(
  /* @__PURE__ */ React20.createElement(React20.StrictMode, null, /* @__PURE__ */ React20.createElement(BrowserRouter, null, /* @__PURE__ */ React20.createElement(App, null)))
);
