import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-blue-300 p-4">
      <React.Fragment>
        <div>Hello "__root"!</div>
        <Outlet />
      </React.Fragment>
    </div>
  );
}
