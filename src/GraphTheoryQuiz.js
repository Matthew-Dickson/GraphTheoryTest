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
  question4: yup.string().required("please answer this question"),
  question5: yup.string().required("please answer this question"),
  question6: yup.string().required("please answer this question"),
});

const answers = {
  question1: "nodes and edges",
  question2: "edges",
  question3: "true",
  question4: "false",
  question5: "true",
  question6: "the process of traversing vertexs within a graph",
};

export function GraphTheoryQuiz() {
  const { unlocked, setUnlocked } = useContext(ProgressContext);
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>test your knowledge</h1>
      <Formik
        initialValues={{
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          question5: "",
          question6: "",
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
            

            if (correct >= 4) {
              setStatus({
                msg: `${correct} out of ${
                  Object.entries(values).length
                } are correct. Congratulations you can move on to Dijkstra algorithm`,
                type: "success",
              });
              let vals = [];
              vals = JSON.parse(localStorage.getItem("unlockedPages"));
              if (vals.includes("dijkstra-algo") === false) {
                vals.push("dijkstra-algo");
              }
              localStorage.setItem("unlockedPages", JSON.stringify(vals));

              setUnlocked([...unlocked, "dijkstra-algo"]);
            } else{
              setStatus({
                msg: `${correct} out of ${
                  Object.entries(values).length
                } are correct`,
                type: "success",
              });
            }
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
                Which two main components are graphs made up of?
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
                    value="nodes and lines"
                  />
                  Nodes and Lines
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="lines and vectors"
                  />
                  Lines and Vectors
                </label>
                <label>
                  <Field type="radio" name="question1" value="nodes and edges" />
                  Nodes and Edges
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
                The lines connecting two nodes in a graph are called what?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="nodes"
                  />
                  Nodes
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="lines"
                  />
                  Lines
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="edges"
                  />
                  Edges
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
                Vertices is another term used for nodes when speaking about graphs?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="true" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question3" value="false" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question3"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
              Nodes of a graph must be connected with one another?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="true" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question4" value="false" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question4"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                A cyclic graph is a graph containing atleast one cycle?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question5" value="true" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question5" value="false" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question5"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is graph traversal?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question6" value="the nodes in a graph" />
                  The nodes in a graph
                </label>
                <label>
                  <Field type="radio" name="question6" value="the process of traversing vertexs within a graph" />
                  The process of traversing vertexs within a graph
                </label>
                <label>
                  <Field type="radio" name="question6" value="the process of shortening a graph" />
                  The process of shortening a graph
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question6"
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


