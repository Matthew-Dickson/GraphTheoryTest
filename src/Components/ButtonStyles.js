import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  tagWrap: {
    filter: "drop-shadow(-1px -1px 2px rgba(255, 255, 255, 255))",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    backgroundColor: "rgb(255 255 255 )",
  },
  button: {
    background: "linear-gradient(120.93deg, #ffffff 2.58%, #000000 91.02%)",
    padding: "50px",
  },
  disabled: {
    opacity: 0.5,
  },
  Link: {
    textDecoration: "none",
    fontSize: "24px",
    color: "white",
    fontWeight: 900,
  },
}));
export default useStyles;
