import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ProgressContext } from "./Context";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";
import GraphPro from "./graphProblem.png"
import One from "./one.PNG"
import Two from "./two.PNG"
import Three from "./three.PNG"
import Four from "./four.PNG"



const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
});

const answers = {
  question1: "Sequential search",
};

export function GraphProblem() {

   
    
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
      <h1 className={classes.heading}>Using your new found knownledge of graphs solve the problem in order to get a reward. A famous star constellation known to all explorers is depicted as a graph shown below</h1>
      <img src={GraphPro} width={"50%"}></img>
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
                
                    setMessage("you have earned the linear search badge");
                    setProblemIndex(0);
                    let badges;
                    badges = JSON.parse(localStorage.getItem("badges"));
                    badges.linear = true;
                    localStorage.setItem("badges", JSON.stringify(badges));
   

                  setStatus({
                        msg: `You are correct, you have earned the Graph theory badge`,
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
                if (vals.includes("graph-theory") === false) {
                  vals.push("graph-theory");
                }
                localStorage.setItem(
                  "unlockedQuizes",
                  JSON.stringify(vals)
                );

                if (unlockedQuizes) {
                  setUnlockedQuizes([...unlockedQuizes, "graph-theory"]);
                } else {
                  setUnlockedQuizes(["graph-theory"]);
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
              which python code showns the correct structure for this graph?
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
                    value= 'Sequential search'
                  />
                  <img src={One} height = {"120"}></img>
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question1"
                    value="Logarithmic search"
                  />
                  <img src={Two} height = {"120"}></img>
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hashing" />
                  <img src={Three} height = {"120"}></img>
                </label>

                <label>
                  <Field type="radio" name="question1" value="new" />
                  <img src={Four} height = {"120"}></img>
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
