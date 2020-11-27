import React, { useContext } from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ProgressContext } from "./Context";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";


const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
  question2: yup.string().required("please answer this question"),
  question3: yup.string().required("please answer this question"),
});

const answers = {
  question1: "three",
  question2: "two",
  question3: "True",
};

export function DijkstraAlgoQuiz() {
  const { unlocked, setUnlocked } = useContext(ProgressContext);
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Test your knowledge</h1>
      <Formik
        initialValues={{
          question1: "",
          question2: "",
          question3: "",
        }}
        validationSchema={schema}
        onSubmit={async (values, { setStatus }) => {
          try {
            let correct = 0;

            Object.entries(values).forEach(([key, value]) => {
              if (value === answers[`${key}`]) {
                correct++;
              }
            });

        

            if (correct >= 2) {

              setStatus({
                msg: `${correct} out of ${
                  Object.entries(values).length
                } are correct. Congratulations you have completed the course`,
                type: "success",
              });


              let vals = [];
              vals = JSON.parse(localStorage.getItem("unlockedPages"));
              
              if (vals.includes("hashing") === false) {
                vals.push("hashing");
              }
              localStorage.setItem("unlockedPages", JSON.stringify(vals));

              setUnlocked([...unlocked, "hashing"]);
            }else{
              setStatus({
                msg: `${correct} out of ${
                  Object.entries(values).length
                } are correct`,
                type: "success",
              });}
          } catch (error) {
            setStatus({
              msg: error,
              type: "error",
            });
          }

        }}
      >
        {({ handleSubmit, status }) => (
          <Form className={classes.quiz} onSubmit={handleSubmit}>
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Which one of the following finds the shortest path in a weighted graph?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="one"
                  />
                Depth-first
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="two"
                  />
                Breadth-first
                </label>
                <label>
                  <Field type="radio" name="question1" value="three" />
                Dijkstra algorithm
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question1"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
              How does Dijkstra’s algorithm find the shortest path tree from a single source node?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value="one" />
                  By randomly guessing which path to build
                </label>
                <label>
                  <Field type="radio" name="question2" value="two" />
                  By building a set of nodes that have minimum distance from the source
                </label>
                <label>
                  <Field type="radio" name="question2" value="three" />
                  Neither option
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question2"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
              Is Dijkstra's algorithm conceptually similar to breadth-first search but respects edge costs?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question3" value="False" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question3"
              component="div"
              className={classes.fieldError}
            />
            {status && <Box className={classes.status}>{status.msg}</Box>}
            <div className={classes.buttonWapper}>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"submit"}
                clipPath={clipPaths[1]}
                padding="20px"
                fontSize="20px"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
