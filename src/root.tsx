import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import tailwindStyles from "~/styles/app.css";

export const links: LinksFunction = () => {
  return [
    {
      crossOrigin: "anonymous",
      href: "https://fonts.googleapis.com",
      rel: "preconnect",
    },
    {
      crossOrigin: "anonymous",
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
    },
    { href: tailwindStyles, rel: "stylesheet" },
    {
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
      rel: "stylesheet",
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
