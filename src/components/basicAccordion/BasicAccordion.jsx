import AccordionText from "./AccordionText";
import { Button } from "react-bootstrap";
import { useState } from "react";

const BasicAccordion = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="outline-success" onClick={onToggle}>
        Show
      </Button>

      {open && (
        <AccordionText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur accusantium commodi sapiente nam omnis beatae consectetur odio doloremque eos a dicta placeat dignissimos, ab, voluptates veritatis. Ea, quasi ullam." />
      )}
    </>
  );
};

export default BasicAccordion;
