import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "transparent",
    border: "2px solid white",
    marginBottom: "50px",
  },
  tab: {
    border: "2px solid white",
    margin: "10px",
    color: "white",
  },
  shake: {
    color: "white",
    opacity: 1.0,
    borderColor: "#white",
    transition: theme.transitions.create(["border-color", "color", "opacity"], {
      duration: "0.2s",
    }),
  },
  indicator: {
    backgroundColor: "white",
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  panel: {
    color: "white",
  },
}));
export default useStyles;
