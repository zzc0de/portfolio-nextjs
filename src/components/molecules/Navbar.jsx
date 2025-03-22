import Button from "../atoms/Button";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full fixed shadow-md p-2 px-12 z-30 backdrop-blur-xl max-w-screen-xl  rounded-full my-4">
      <div className="flex items-center w-full justify-between">
        <h1>Z</h1>
        <ul className="flex gap-4">
          <li>About me</li>
          <li>Skills</li>
          <li>Project Me</li>
        </ul>
        <Button className="bg-black flex items-center gap-2 text-white rounded-sm">
          Resume <MdOutlineFileDownload size={20} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
