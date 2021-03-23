import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // "& .MuiTextField-root": {
    margin: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(0),
  },
  form: {
    display: "",
    flexWrap: "wrap",
    justifyContent: "center",

    // margin: "0 auto",
    // textAlign: "center",
  },
  textField: {
    // marginBottom: theme.spacing(10),
  },
  // fileInput: {
  //   width: "97%",
  //   margin: "10px 0",
  // },
  buttonSubmit: {
    marginTop: "20px",
    marginBottom: 100,
    // width: "100",
  },
}));
