import { useEffect } from "react";

const AccordionText = ({ text }) => {
  useEffect(() => {
    console.log("Component did mount");

    return () => {
      console.log("Component did unmount");
    };
  }, []);

  return <p>{text}</p>;
};

export default AccordionText;
