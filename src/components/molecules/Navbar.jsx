import Button from "../atoms/Button";

const Navbar = () => {
  return (
    <nav className="w-full fixed border-2 p-2 px-12 max-w-screen-xl  rounded-full my-4">
      <div className="flex items-center w-full justify-between">
        <h1>Azed</h1>
        <ul className="flex gap-4">
          <li>About me</li>
          <li>Skills</li>
          <li>Project Me</li>
        </ul>
        <Button className="bg-white text-red-600">Resume</Button>
      </div>
    </nav>
  );
};

export default Navbar;
