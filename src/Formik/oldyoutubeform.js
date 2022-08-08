import React from "react";
import { useFormik } from "formik";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";

const initialValues = {
  name: "owais",
  email:  "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("formDATA", values);
};

const validate = (values) => {
  //values.name, values.email, values.channel

  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

export const OldYoutubeForm = () => {
  const classes = myStyle();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   console.log("Form values", formik.values);
  // console.log("Form Errors", formik.errors);
  console.log("Visited Fields", formik.touched);
  return (
    <>
      <Grid container justifyContent="center" className={classes.mainDiv}>
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          style={{ gap: "50px" }}
        >
          <Typography variant="h5">YouTube Form</Typography>
          <form onSubmit={formik.handleSubmit} style={{ width: "30vw" }}>
            <TextField
              fullWidth
              label="name"
              type="text"
              name="name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.name}
              </Grid>
            ) : (
              <></>
            )}
            <TextField
              fullWidth
              label="email"
              type="email"
              name="email"
              variant="outlined"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.email}
              </Grid>
            ) : (
              <></>
            )}

            <TextField
              fullWidth
              label="channel"
              type="text"
              name="channel"
              variant="outlined"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.channel}
              </Grid>
            ) : (
              <></>
            )}

            <Button type="submit" fullWidth color="primary" variant="contained">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid container>
          <Typography>{JSON.stringify(formik.values)}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

const myStyle = makeStyles({
  mainDiv: {
    border: "1px solid black",
    height: "100vh",
    width: "100vw",
  },

});
