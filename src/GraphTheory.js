import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { SimpleTabs } from "./Components/Tabs";
import { GraphTheoryQuiz } from "./GraphTheoryQuiz";
import { ProgressContext } from "./Context";
import Graph from "./graph.png"
import { GraphProblem} from "./GraphProblem";
import ExampleGraph from './exampleGraph.png'
import CodeExample from './codeExample.PNG'



export function GraphTheory() {
  

  
  const { unlockedQuizes} = useContext(ProgressContext);


  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Graph theory</h1>
      <SimpleTabs
        quizDisabled={
          unlockedQuizes === null
            ? true
            : !unlockedQuizes.includes("graph-theory")
        }
        background={
          <div className={classes.background}>
            <h1>What are graphs?</h1>
            <p>
            Graphs can be defined as abstract structures/models in mathematics and computer science, which consists of <b>NODES</b>. These nodes are also referred to as <b>VERTICES</b>. Where the
            nodes/verticies of the graphs may or may not be connected with one another. These connection from one node to another are referred to as <b>EDGES</b>. The foundation of graph theory comes from <b>Leonhard Euler</b> during 
            <b> 1735</b> where he had formulated an abstraction to a problem he was trying to solve. He did this by eliminating unnecessary facts and focussing only on the land areas (nodes) and the bridges(edges) connecting them. 
            In this way, he created the foundations of graph theory we know today. 
            </p>
            <img src={Graph} width={"50%"}></img>
            
            <p style={{textAlign: "left"}}>
            There are multiple types of graphs, some are described below:
            <ol>
            <li><b>Null graph/Empty graph:</b> Is a graph in which there are no edges between its vertices</li>
            <li><b>Trivial graph:</b> Is a graph which has only one vertex.</li>
            <li><b>Simple graph:</b> Is a undirected graph with no parallel edges and no loops</li>
            <li><b>Undirected graph:</b> Is a graph whose edges are not directed</li>
            <li><b>Directed graph/Digraphs:</b> Is a graph in which the edges are directed by arrows</li>
            <li><b>Cyclic graph:</b> Is a graph containing at least one cycle</li>
            <li><b>Acyclic graph:</b> Is a graph which does not contain any cycle</li>
            </ol>
            <h1>Why are graphs important?</h1>
             Graphs can be used in solving many practical problems in computer science. Graphs can be used to represent networks of communication, data organization, 
             computational devices and the flow of computation. Many problems can be represented as a graph thus the importance of graph theory in computer science can 
             not be underestimated. Once a problem is defined as a graph, operations can be applied to it inorder to update the graph structure. 
             
             <h1>What is graph traversal?</h1>
             Graphs traversal also known as graph search is the process of traversing vertexs within a graph. Such traversals are classified by the order in which the vertices are visited.
             Two basic graphs search algorithms are defined below:
             <ol>
               <li><b>Depth-first traversal:</b> This algorithm traverses a graph in a depthward motion and uses a stack to remember to get the next vertex to start a search, when a dead end occurs in any iteration.</li>
               <li><b>Breadth-first traversal:</b> This algorithm traverses a graph in a breadthward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration</li>
             </ol>
              <br />
            </p>
            <div style={{border:'5px solid white',
          padding: 0}}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=HkNdNpKUByM"
              style={{ margin: "30px" }}
            />
            </div>
            <h3>Read more about Graph theory here</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <a
                  className={classes.link}
                  href="https://www.python-course.eu/graphs_python.php"
                  target="_blank"
                >
                  Grapth theory in python
                </a>
                <a
                  className={classes.link}
                  href="https://www.tutorialspoint.com/data_structures_algorithms/breadth_first_traversal.htm"
                  target="_blank"
                >
                  Breadth first traversal
                </a>
                <a
                  className={classes.link}
                  href="https://www.tutorialspoint.com/data_structures_algorithms/depth_first_traversal.htm"
                  target="_blank"
                >
                  Depth first traversal
                </a>
              </div>
          </div>
        }
        
        example={
          <><h1>A example of a graph and its associated python implementation</h1>
          <img src={ExampleGraph} width={"50%"}></img>
          <img src={CodeExample} width={"50%"} height = {"485"}></img>
           
          </>
        }
        problem={<GraphProblem />
        }
        quiz={<GraphTheoryQuiz />}
      />
    </div>
  );
}
