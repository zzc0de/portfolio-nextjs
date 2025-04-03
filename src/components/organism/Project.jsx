import { educationPattern, projectPattern } from "@/pattern/projectPattern";
import Timeline from "../molecules/Timeline";

const Project = () => {
  return (
    <div className="w-full flex flex-col min-h-screen mx-auto max-w-screen-xl ">
      <div className="w-full py-6 flex flex-col gap-4">
        <h1 className="text-3xl">
          My <span className="font-bold">Projects</span>
        </h1>
        <Timeline pattern={projectPattern} />
      </div>
      <div className="w-full py-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Education</h1>
        <Timeline pattern={educationPattern} />
      </div>
    </div>
  );
};

export default Project;
