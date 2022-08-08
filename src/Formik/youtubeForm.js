import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";

import { TwitterPicker, CirclePicker } from "react-color";

const initialValues = {
  name: "owais",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("formDATA", values);
};
//we stick to validationSchema

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("invalid email").required("Required"),
  channel: Yup.string().required("Required !"),
});
export const YoutubeForm = () => {
  const classes = myStyle();
  const [backgroundPicker, setBackgroundPicker] = useState("#fff");

  const handleChangeComplete = (color) => {
    console.log("colorpciker",color);;
    setBackgroundPicker(color.hex);
  };

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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Field
                // fullWidth
                label="name"
                type="text"
                name="name"
                variant="outlined"
                // {...formik.getFieldProps('name')}
                // value={formik.values.name}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              <ErrorMessage name="name" />
              {/* {formik.touched.name && formik.errors.name ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.name}
              </Grid>
            ) : (
              <></>
            )} */}
              <Field
                fullWidth
                label="email"
                type="email"
                name="email"
                variant="outlined"
                // {...formik.getFieldProps('email')}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              <ErrorMessage name="email" />

              {/* {formik.touched.email && formik.errors.email ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.email}
              </Grid>
            ) : (
              <></>
            )} */}

              <Field
                fullWidth
                label="channel"
                type="text"
                name="channel"
                variant="outlined"
                // value={formik.values.channel}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('channel')}
              />
              <ErrorMessage name="channel" />
              {/* {formik.touched.channel && formik.errors.channel ? (
              <Grid item style={{ color: "red" }}>
                {formik.errors.channel}
              </Grid>
            ) : (
              <></>
            )} */}

              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </Form>
          </Formik>
        </Grid>
        <Grid container>
          {/* <Typography>{JSON.stringify(formik.values)}</Typography> */}
        </Grid>

        <Grid item>
         <Typography>second</Typography>

         <Typography>second</Typography>
         <Typography>second</Typography>


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
