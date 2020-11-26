import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as badgeIcon } from "./badge.svg";
export function Badge(props) {
  return (
    <SvgIcon
      {...props}
      style={{ fontSize: "80px", color: "#ffbe00" }}
      viewBox="0 0 600 476.6"
      component={badgeIcon}
    >
      hello
    </SvgIcon>
  );
}
