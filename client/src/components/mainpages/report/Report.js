
import ComponentToPrint from './ComponentToPrint';
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Report = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
     
      <ComponentToPrint onclick={handlePrint} component={componentRef} />
      
    </div>
  );
};

 export default Report