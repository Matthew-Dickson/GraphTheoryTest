import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./ButtonStyles";
import { Link } from "react-router-dom";

export const ClipButton = ({ clipPath, link, label, disable }) => {
  const classes = useStyles();
  return (
    <Link to={link} className={classes.Link}>
      <Button
        classes={{ root: classes.tagwrap, disabled: classes.disabled }}
        style={{ clipPath: clipPath }}
        disabled={disable}
      >
        <div className={classes.buttonWrapper} style={{ clipPath: clipPath }}>
          <div className={classes.button} style={{ clipPath: clipPath }}>
            <Typography className={classes.Link}>{label}</Typography>
          </div>
        </div>
      </Button>
    </Link>
  );
};
