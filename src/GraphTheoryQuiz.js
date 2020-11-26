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
  question7: yup.string().required("please answer this question"),
  question8: yup.string().required("please answer this question"),
  question9: yup.string().required("please answer this question"),
});

const answers = {
  question1: "Sequential search",
  question2: "Searching for a value and returns it",
  question3: "Linear search",
  question4: "False",
  question5: "True",
  question6: "O(1)",
  question7: "Needs the data structure to be sorted ",
  question8: "Medium and small",
  question9: "True",
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
          question7: "",
          question8: "",
          question9: "",
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
            setStatus({
              msg: `${correct} out of ${
                Object.entries(values).length
              } are correct`,
              type: "success",
            });

            if (correct >= 6) {
              let vals = [];
              vals = JSON.parse(localStorage.getItem("unlockedPages"));
              if (vals.includes("dijkstra-algo") === false) {
                vals.push("dijkstra-algo");
              }
              localStorage.setItem("unlockedPages", JSON.stringify(vals));

              setUnlocked([...unlocked, "dijkstra-algo"]);
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
                Linear search is also known as?
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
                    value="Sequential search"
                  />
                  Sequential search
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="Logarithmic search"
                  />
                  Logarithmic search
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hashing" />
                  Hashing
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
                Linear search does the following?
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
                    value="Returns sorted values"
                  />
                  Returns sorted values
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Searching for a value and returns it"
                  />
                  Searching for a value and returns it
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Searching for values and returns all values"
                  />
                  Searching for values and returns all values
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
                Which searching algorithm is the easiest to implement?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="Linear search" />
                  Linear search
                </label>
                <label>
                  <Field type="radio" name="question3" value="Binary Search" />
                  Binary Search
                </label>
                <label>
                  <Field type="radio" name="question3" value="Hashing" />
                  Hashing
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
                Does linear search require a data structure to be sorted for it
                to work?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question4" value="False" />
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
                Does Linear search require it to search a whole data structure
                in the worst case?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question5" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question5" value="False" />
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
                What is the best case performance for linear search?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question6" value="O(n)" />
                  O(n)
                </label>
                <label>
                  <Field type="radio" name="question6" value="O(1)" />
                  O(1)
                </label>
                <label>
                  <Field type="radio" name="question6" value="O(n+6)" />
                  O(n+6)
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question6"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is untrue about linear search?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question7"
                    value="Is slow when used on large data structures"
                  />
                  Is slow when used on large data structures
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question7"
                    value="The worst case performance is O(n)"
                  />
                  The worst case performance is O(n)
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question7"
                    value="Needs the data structure to be sorted "
                  />
                  Needs the data structure to be sorted
                </label>
                <label>
                  <Field type="radio" name="question7" value="All the above" />
                  All the above
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question7"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What size of data structures should linear search be used on?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question8" value="Large" />
                  Large
                </label>
                <label>
                  <Field type="radio" name="question8" value="Medium" />
                  Medium
                </label>
                <label>
                  <Field type="radio" name="question8" value="Small" />
                  Small
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question8"
                    value="Medium and small"
                  />
                  Medium and small
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question8"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Can the average case performance be affected if the search
                probabilities for each element vary when using linear search?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question9" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question9" value="False" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question9"
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
