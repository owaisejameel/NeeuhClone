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
          <TwitterPicker
            onChangeComplete={handleChangeComplete}
            colors={[
              "#4D4D4D",
              "#999999",
              "#F44E3B",
              "#FE9200",
              "#FCDC00",
              "#DBDF00",
              "#A4DD00",
              "#68CCCA",
              "#73D8FF",
              "#AEA1FF",
              "#FDA1FF",
              "#333333",
              "#808080",
              "#cccccc",
              "#D33115",
              "#E27300",
              "#FCC400",
              "#B0BC00",
              "#68BC00",
              "#16A5A5",
              "#009CE0",
              "#7B64FF",
              "#FA28FF",
              "#000000",
              "#666666",
              "#B3B3B3",
              "#9F0500",
              "#C45100",
              "#FB9E00",
              "#808900",
              "#194D33",
              "#0C797D",
              "#0062B1",
              "#653294",
              "#AB149E",
            ]}
          />
        </Grid>

    <Grid item style={{height: "300px", width: "300px", background: backgroundPicker }}></Grid>
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
