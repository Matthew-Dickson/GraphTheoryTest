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
  question1: "Logarithmic search",
  question2: "True",
  question3: "True",
  question4: "O(log n)",
  question5: "True",
  question6: "True",
  question7: "Both",
  question8: "Binary Search",
  question9: "True",
};

export function DijkstraAlgoQuiz() {
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
              if (vals.includes("hashing") === false) {
                vals.push("hashing");
              }
              localStorage.setItem("unlockedPages", JSON.stringify(vals));

              setUnlocked([...unlocked, "hashing"]);
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
                Binary search is also known as?
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
                Binary search requires a data structure to be sorted?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question2" value="False" />
                  False
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
                Binary search is considered an optimal searching algorithm?
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
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is the average case performance of binary search?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="O(n)" />
                  O(n)
                </label>
                <label>
                  <Field type="radio" name="question4" value=" O(n/2)" />
                  O(n/2)
                </label>
                <label>
                  <Field type="radio" name="question4" value="O(log n)" />
                  O(log n)
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
                The worst case performance is the same as the average case
                performance for binary search
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
                Binary search is faster than linear search?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question6" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question6" value="False" />
                  False
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
                Which of the following searching algorithm has a best case
                performance of O(1)?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question7" value="Binary Search" />
                  Binary Search
                </label>
                <label>
                  <Field type="radio" name="question7" value="Linear Search" />
                  Linear Search
                </label>
                <label>
                  <Field type="radio" name="question7" value="Both" />
                  Both
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
                Which searching algorithm In terms of iterations and that works
                only by comparing elements exhibits the best average and
                worst-case performance of the following searching algorithms?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question8" value="Linear search" />
                  Linear Search
                </label>
                <label>
                  <Field type="radio" name="question8" value="Binary Search" />
                  Binary Search
                </label>
                <label>
                  <Field type="radio" name="question8" value="Hashing" />
                  Hashing
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
                Does binary search compare the target value to the middle
                element of the array when applied?
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
