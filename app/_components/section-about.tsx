import { Config } from "@/lib/data";
import { getYearsOfExperience } from "@/lib/utils";
import React from "react";

function About() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-sm">About</h3>{" "}
      <p className="font-light text-sm text-primary/80 text-justify">
        Hello, I'm Amir 👋 I'm a software engineer specialized in{" "}
        <span className="dark:text-white text-primary font-medium">
          Back-End
        </span>{" "}
        and{" "}
        <span className="dark:text-white text-primary font-medium">DevOps</span>{" "}
        engineering. My passion lies in crafting open-source applications,
        solutions and tools, while collaborating with different developers
        around the world.
      </p>
      <p className="font-light text-sm text-primary/80 text-justify">
        I'm currently in Iran working remotely on projects in the Finance sector
        using Python and MetaTrader 5 Python API. I have over{" "}
        {getYearsOfExperience(Config.yearStart)} years of experience working
        closely with companies locally and remotely with different teams
        worldwide.
      </p>
    </section>
  );
}

export default About;
