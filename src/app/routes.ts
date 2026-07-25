import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/components/Home";
import { AboutUs } from "@/app/components/AboutUs";
import { Service } from "@/app/components/[service]";
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
      { path: "services/:slug", Component: Service },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);