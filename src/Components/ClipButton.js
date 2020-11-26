import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./ButtonStyles";

export const ClipButton = ({
  clipPath,
  handleClick,
  label,
  fontSize,
  padding,
  type,
}) => {
  const classes = useStyles();
  return (
    <Button
      type={type}
      className={classes.tagwrap}
      style={{ clipPath: clipPath }}
      onClick={handleClick}
    >
      <div className={classes.buttonWrapper} style={{ clipPath: clipPath }}>
        <div
          className={classes.button}
          style={{ clipPath: clipPath, padding: padding }}
        >
          <Typography className={classes.Link} style={{ fontSize: fontSize }}>
            {label}
          </Typography>
        </div>
      </div>
    </Button>
  );
};
