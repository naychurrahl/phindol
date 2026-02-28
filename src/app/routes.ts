import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { LifeInsurance } from "./components/LifeInsurance";
import { CorporateInsurance } from "./components/CorporateInsurance";
import { ClaimsSupport } from "./components/ClaimsSupport";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "services/life-insurance", Component: LifeInsurance },
      { path: "services/corporate-insurance", Component: CorporateInsurance },
      { path: "services/claims-support", Component: ClaimsSupport },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);