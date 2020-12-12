import React from "react";
import {
  makeStyles,
  withStyles,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  InputBase
} from "@material-ui/core";
import "../stylesheets/index.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "5vw",
    maxWidth: "8vw"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  noLabel: {
    marginTop: theme.spacing(1)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "cringe",
  "ironic",
  "dark",
  "deepfried",
  "gamer",
  "plump",
  "gentle",
  "dank",
  "epicgamer"
];

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,

    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

export default function Searchbar() {
  const classes = useStyles();
  const [memeName, setMemeName] = React.useState([]);

  const handleChange = (event) => {
    setMemeName(event.target.value);
  };

  return (
    <div id="search">
      <FormControl
        className={classes.formControl}
        id="searchContainer"
        style={{ marginBottom: "20px", marginLeft: "5px" }}
      >
        <InputLabel id="demo-mutiple-checkbox-label">Tags</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={memeName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={memeName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.margin} id="searchContainer">
        <BootstrapInput
          id="demo-customized-textbox"
          placeholder="🔎Search..."
          style={{ marginTop: "30px" }}
        />

        <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
      </FormControl>
    </div>
  );
}
