// import "./index.css";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const IncrementDecrement = (props) => {
  //   const [count, setCount] = useState(0);
  const IncNum = () => {
    if (props.count < 10) props.setCount(props.count + 1);
    else {
      props.setCount(10);
    }
  };
  const DecNum = () => {
    if (props.count > 1) props.setCount(props.count - 1);
    else {
      props.setCount(1);
    }
  };
  return (
    <>
      <div className="incr-decr">
        <Button onClick={DecNum} style={{ justifyContent: "center" }}>
          <RemoveIcon />
        </Button>
        <h3>{props.count}</h3>
        <Button onClick={IncNum} style={{ justifyContent: "center" }}>
          <AddIcon />
        </Button>
      </div>
    </>
  );
};
export default IncrementDecrement;
