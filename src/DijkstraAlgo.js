import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { DijkstraAlgoQuiz } from "./DijkstraAlgoQuiz";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";
import { DijkstraAlgoProblem} from "./DijkstraAlgoProblem";
import DijkstraPython from "./dijkstrasPython.PNG"


import {ReactBlockly} from "react-blockly"

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';
import Blockly from "blockly"













export function DijkstraAlgo() {

 

  const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);




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
            <h1>Dijkstra algorithm implemented in python is shown below:</h1>
            <img src={DijkstraPython} width={"100%"}></img>
          <div>
            Blockly goes here
          </div>
          </div>
      
          
          
          
        }
        problem={
          
          <>
          <DijkstraAlgoProblem/>
            
          </>
        }
        
        quiz={<DijkstraAlgoQuiz />}
      />
    </div>
  );
}
