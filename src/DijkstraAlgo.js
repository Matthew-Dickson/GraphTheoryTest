import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { DijkstraAlgoQuiz } from "./DijkstraAlgoQuiz";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";

export function DijkstraAlgo() {
  const [arr, setArr] = useState([
    { number: 1, color: "transparent" },
    { number: 2, color: "transparent" },
    { number: 3, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 5, color: "transparent" },
    { number: 6, color: "transparent" },
    { number: 7, color: "transparent" },
    { number: 8, color: "transparent" },
    { number: 9, color: "transparent" },
  ]);

  const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);

  const [problemArr, setProblemArr] = useState([
    { number: 1, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 62, color: "transparent" },
    { number: 72, color: "transparent" },
    { number: 81, color: "transparent" },
    { number: 101, color: "transparent" },
    { number: 200, color: "transparent" },
    { number: 300, color: "transparent" },
    { number: 534, color: "transparent" },
  ]);

  const [problemIndex, setProblemIndex] = useState(0);

  const [message, setMessage] = useState("");

  const [searchValue, setSearchValue] = useState(8);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const getSearchOrder = (array, searchValue) => {
    array = array.sort();
    let x = parseInt(searchValue);

    let vals = [];
    let start = 0,
      end = array.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      vals.push(array[mid].number);
      if (array[mid].number === x) {
        return vals;
      } else if (array[mid].number < x) {
        start = mid + 1;
      } else end = mid - 1;
    }
    return vals;
  };

  const search = async () => {
    let x = parseInt(searchValue);

    let start = 0,
      end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "transparent";
      });
      tempArr[mid].color = "#2F486E";

      setArr(tempArr);

      // If element is present at mid, return True
      if (arr[mid].number === x) {
        return true;
      }
      // Else look in left or right half accordingly
      else if (arr[mid].number < x) start = mid + 1;
      else end = mid - 1;
      await delay(800);
    }

    return false;
  };

  function handleSubmit(event) {
    search();
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Dijsktra's Algorithm</h1>
      <SimpleTabs
        quizDisabled={
          unlockedQuizes === null
            ? true
            : !unlockedQuizes.includes("dijkstra-algo")
        }
        background={
          <div className={classes.background}>
            <Typography variant="body1">
              The Dijsktra algorithm is one algorithm used for finding the shortest path within a weighted graph. The algorithm creates a tree of shortest paths from the starting vertex(the source), to all other points in the graph.
              Dijkstra’s algorithm was published in 1959 and named after its creator Edsger Dijkstra who was a Dutch computer scientist. The algorithm can be used either on a directed graph or a undirected graph. However, one stipulation to using the algorithm is that the graph needs to have a nonnegative weight on every edge.
              <br></br>
              <br></br>
              Dijkstra’s algorithm finds a shortest path tree from a single source node, by building a set of nodes that have minimum distance from the source. 
              <br></br>
              The algorithm proceeds as follows:
              <ol>
                <li>While Q is not empty, pop the node v, that is not already in S, from Q with the smallest dist (v). 
                  In the first run, source node ss will be chosen because distdist(ss) was initialized to 0. In the next run, the next node with the 
                  smallest distdist value is chosen.</li>
                <li>Add node v to S, to indicate that v has been visited</li>
                <li>Update dist values of adjacent nodes of the current node vv as follows: for each new adjacent node u,</li>
                   <ul><li>if dist(v) + weight(u,v) is less than dist(u), there is a new minimal distance found for u, so update dist(u) to 
                     the new minimal distance value; </li>
                     <li>otherwise, no updates are made to distdist (uu).</li>
                     </ul>
              </ol>

             The algorithm has visited all nodes in the graph and found the smallest distance to each node. dist now contains the shortest path tree from source s.
             Note: The weight of an edge (u,v) is taken from the value associated with (u,v) on the graph.
             <br></br>
             <br></br>
             <h1>Comparing different graph searching techniques to Dijkstra's algorithm</h1>
             The breadth-first trasversal algorithm is just Dijkstra's algorithm with all edge weights equal to 1.
             Dijkstra's algorithm is conceptually the breadth-first search but respects edge costs.
             Therefore the process for exploring the graph is structurally the same in both cases.
            </Typography>

            <br />

            
            <div style={{border:'5px solid white',
          padding: 0}}>
            <ReactPlayer
              url="hhttps://www.youtube.com/watch?v=gdmfOwyQlcI"
              style={{ margin: "30px" }}
            />
            </div>
           
            <h3>Read more about the Dijkstra's algorithm here</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <a
                className={classes.link}
                href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
                target="_blank"
              >
                geeksforgeeks
              </a>
            </div>




          </div>
        }
        example={
          <div>
            <div className={classes.array}>
              {arr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classes.arrayItem}
                    style={{ background: item.color }}
                  >
                    {item.number}
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
              <label>
                <input
                  type="number"
                  min="1"
                  max="9"
                  value={searchValue}
                  onChange={handleChange}
                  className={classes.input}
                />
              </label>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"search"}
                clipPath={clipPaths[0]}
                padding="20px"
                fontSize="20px"
              />
            </form>
          </div>
        }
        problem={
          <>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#e6d470",
              }}
            >
              Find the murderer known as 300 by clicking on each suspect until
              you have found the murderer using binary search.
            </h2>
            <div className={classes.array}>
              {problemArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classes.arrayItem}
                    onClick={() => {
                      if (
                        problemIndex + 1 ===
                        getSearchOrder(problemArr, 300).length
                      ) {
                        setMessage("you have earned the binary search badge");
                        setProblemIndex(0);
                        let badges;
                        badges = JSON.parse(localStorage.getItem("badges"));
                        badges.binary = true;
                        localStorage.setItem("badges", JSON.stringify(badges));
                      }
                      if (
                        getSearchOrder(problemArr, 300)[problemIndex] ===
                        item.number
                      ) {
                        setProblemIndex((prev) => prev + 1);
                        let tempArr = [...problemArr];
                        tempArr[index].color = "blue";
                        setProblemArr(tempArr);

                        setTimeout(() => {
                          tempArr[index].color = "transparent";
                          setProblemArr(tempArr);
                        }, 800);
                      } else {
                        let tempArr = [...problemArr];
                        tempArr[index].color = "red";
                        setProblemArr(tempArr);

                        setTimeout(() => {
                          tempArr[index].color = "transparent";
                          setProblemArr(tempArr);
                        }, 800);
                        setMessage("try again");
                        setProblemIndex(0);
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
                    }}
                    style={{ background: item.color }}
                  >
                    {item.number}
                  </div>
                );
              })}
            </div>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              {message}
            </h3>
          </>
        }
        
        quiz={<DijkstraAlgoQuiz />}
      />
    </div>
  );
}
