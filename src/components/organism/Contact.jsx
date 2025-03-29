import Lanyard from "../atoms/Lanyard";

const Contact = () => {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto">
      <div className="flex-1 h-full flex justify-center items-center">
        <h1>Contact</h1>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <Lanyard />
      </div>
    </div>
  );
};

export default Contact;
