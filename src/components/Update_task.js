import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";
import DeleteIcon from "@material-ui/icons/Delete";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
    height: 60,
    width: "15%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Update_task() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const [form, setForm] = useState([{ name: "", pr: "", hours: 0.5 }]);

  const saveForm = async () => {
    console.log("Save form called...");
    axios({
      method: "post",
      url: "http://localhost:3000/api/tasks/create",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: form,
    })
      .then(({ data }) => {
        console.log("Saved form: ", data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [hours, setHours] = React.useState("");
  const [add, setAdd] = React.useState(1);

  const addField = () => {
    setAdd(add + 1);
  };
  const deleteField = (event, index) => {
    alert("hi");
  };

  const handleInputChange = (event, index) => {
    console.log(index);
    const old = form[index];
    console.log(old);
    const updated = { ...old, [event.target.name]: event.target.value };
    console.log(updated);
    const clone = [...form];
    console.log(clone);
    clone[index] = updated;
    setForm(clone);
  };

  console.log(form);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Update
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {Array.from(Array(add).keys()).map((value, index) => (
              <>
                {/* {console.log(value)} */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="tname"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="TASK NAME"
                    onChange={(event) => handleInputChange(event, index)}
                    autoFocus
                    value={form?.name}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="prLink"
                    label="PR LINK"
                    name="prLink"
                    autoComplete="prlink"
                    value={form?.pr}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </Grid>
                <FormControl
                  required
                  className={classes.formControl}
                  style={{ minWidth: "50%", marginLeft: "2%" }}
                >
                  <InputLabel id="demo-simple-select-required-label">
                    Hours
                  </InputLabel>
                  <Select
                    name="hours"
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={form.hours}
                    onChange={(event) => handleInputChange(event, index)}
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0.5}>0.5</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={1.5}>1.5</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={2.5}>2.5</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3.5}>3.5</MenuItem>
                    <MenuItem value={"More"}>More</MenuItem>
                    <MenuItem value={"Stuck"}>Stuck</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
                {index === 0 ? null : (
                  <Grid item xs={12} sm={4}>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      onClick={(event, index) => deleteField(event, index)}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                )}
              </>
            ))}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => addField()}
            >
              Add New
            </Button>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={saveForm}
              >
                Save & Send
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Preview Email
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Update_task;
