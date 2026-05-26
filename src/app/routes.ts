import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/components/Home";
import { AboutUs } from "@/app/components/AboutUs";
import { LifeInsurance } from "@/app/components/LifeInsurance";
import { CorporateInsurance } from "@/app/components/CorporateInsurance";
import { ClaimsSupport } from "@/app/components/ClaimsSupport";
import { Contact } from "@/app/components/Contact";
import { Gallery } from "@/app/components/Gallery";
import { Blog } from "@/app/components/Blog";
import { BlogPost } from "@/app/components/BlogPost";
import { NotFound } from "@/app/components/NotFound";

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