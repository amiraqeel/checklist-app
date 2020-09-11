import React, { useState } from "react";
import { Edit, Delete, Done } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Item(props) {
  const [edit, setEdit] = useState(false);

  function handleClick() {
    props.deleteItem(props.index);
    setEdit(false);
  }

  function handleEdit(event) {
    setEdit(prev => !prev);
  }

  function handleChange(event) {
    const { id, value } = event.target;
    props.editItem(id, value);
  }

  return (
    <li key={props.index} className="checklist-item">
      <input
        id={props.index}
        onChange={edit ? handleChange : undefined}
        value={props.item}
        autoComplete="off"
      />
      <IconButton id={props.index} className="btn" onClick={handleEdit}>
        {edit ? <Done style={{ color: "green" }} /> : <Edit color="primary" />}
      </IconButton>
      <IconButton
        id={props.index}
        className="btn"
        onClick={handleClick}
        color="secondary"
      >
        <Delete />
      </IconButton>
    </li>
  );
}

export default Item;
