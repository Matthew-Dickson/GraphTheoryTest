import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { ClipButton } from "./Components/ClipButtonLink";
import Particles from "react-particles-js";
import BadgeSvg from "./Components/badgeSvg";
import "./GlitchEffect.sass";

export const clipPaths = [
  "polygon(0% 0%, 7% 100%, 87% 88%, 94% 4%)",
  "polygon(0% 15%, 7% 100%, 88% 68%, 94% 0%)",
  "polygon(0% -1%, 19% 79%, 84% 64%, 102% -13%)",
];
export function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("unlockedPages") === null) {
      localStorage.setItem("unlockedPages", JSON.stringify(["graph-theory"]));
    }

    if (localStorage.getItem("badges") === null) {
      localStorage.setItem(
        "badges",
        JSON.stringify({ binary: false, linear: false, hashing: false })
      );
    }

    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <>
        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              color: {
                value: "#ffffff",
              },
              number: {
                value: 300,
              },
              size: {
                value: 6,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
              },
            },
          }}
        />

        <div className={classes.Wrapper}>
          <div className={"wrapper"}>
            <h1 className={"glitch"}>Welcome Young Explorer</h1>
          </div>
          <h1 className={classes.subHeading}>To The Seven Seas Academy </h1>
          <h4 className={classes.subHeading}>
            What will you explore next ?
          </h4>

          <ClipButton
            clipPath={clipPaths[1]}
            link={"/graph-theory"}
            label={"Graph Theory"}
            disable={
              !localStorage.getItem("unlockedPages").includes("graph-theory")
            }
          />

          <ClipButton
            clipPath={clipPaths[0]}
            link={"/dijkstra-algo"}
            label={"Dijkstra’s algorithm"}
            disable={
              !localStorage.getItem("unlockedPages").includes("dijkstra-algo")
            }
          />

           <Box>
           <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).linear}
              label={"G.T"}
            />
            <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).binary}
              label={"D.A"}
            /> 
          </Box>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
