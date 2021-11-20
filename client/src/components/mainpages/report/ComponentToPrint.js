import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

  const ComponentToPrint = (onclick,component) => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current
    });
  
    return(
    <div ref={component}>
      <h1>hello world</h1>
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={onclick}
      >
        {" "}
        Print{" "}
      </button>
    </div>
    )
  }

  export default ComponentToPrint;