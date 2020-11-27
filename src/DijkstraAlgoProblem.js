import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ProgressContext } from "./Context";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";

import DijkstraAlgoPro from "./dijkstrasProblem.png"



const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
});

const answers = {
  question1: "two",
};

export function DijkstraAlgoProblem() {

   
    
      const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);
    
      const [problemArr, setProblemArr] = useState([
        { number: 101, color: "transparent" },
        { number: 200, color: "transparent" },
        { number: 300, color: "transparent" },
        { number: 4, color: "transparent" },
        { number: 534, color: "transparent" },
        { number: 62, color: "transparent" },
        { number: 72, color: "transparent" },
        { number: 81, color: "transparent" },
        { number: 1, color: "transparent" },
      ]);
    
      const [problemIndex, setProblemIndex] = useState(0);
    
      const [message, setMessage] = useState("");
    
      const [searchValue, setSearchValue] = useState(8);
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));




  const { unlocked, setUnlocked } = useContext(ProgressContext);
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Using your new found knownledge of Dijkstra algorithm solve the problem in order to get a reward. Using the graph below, which depicts different towns and their distances.</h1>
      <img src={DijkstraAlgoPro} width={"50%"}></img>
      <Formik
        initialValues={{
          question1: "",
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

        

            if (correct === 1) {
                

                setMessage("you have earned the Dijkstra Algorithm badge");
                setProblemIndex(0);
                let badges;
                badges = JSON.parse(localStorage.getItem("badges"));
                badges.binary = true;
                localStorage.setItem("badges", JSON.stringify(badges));
                setStatus({
                        msg: `You are correct, you have earned the Dijkstra Algorithm badge`,
                        type: "success",
                      });
                } else{
                    setStatus({
                        msg: `You are incorrect, try again`,
                        type: "success",
                      });
                }

                let vals = [];
                vals = JSON.parse(localStorage.getItem("unlockedQuizes"));
                if (vals.includes("dijkstra-algo") === false) {
                  vals.push("dijkstra-algo");
                }
                localStorage.setItem(
                  "unlockedQuizes",
                  JSON.stringify(vals)
                );

                if (unlockedQuizes) {
                  setUnlockedQuizes([...unlockedQuizes, "dijkstra-algo"]);
                } else {
                  setUnlockedQuizes(["dijkstra-algo"]);
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
              Starting from point A you have to travel to point e, which path would you 
              <br></br>travel if you used Dijkstra algorithm as a guide?
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
                    value= 'one'
                  />
                  (A,B,D,E)
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="two"
                  />
                  (A,C,F,E)
                </label>
                <label>
                  <Field type="radio" name="question1" value="three" />
                  (A,C,D,E)
                </label>

                <label>
                  <Field type="radio" name="question1" value="four" />
                  (E,D,B,A)
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question1"
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