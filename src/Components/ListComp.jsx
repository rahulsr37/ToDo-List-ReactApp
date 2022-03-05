import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ListComp = (props) => {
  const [line, setLine] = useState();

  const cutThrough = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <span onClick={cutThrough}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ListComp;
