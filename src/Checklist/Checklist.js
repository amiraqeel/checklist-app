import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const initialValue = ["Camera", "Camping tent", "Charger"];

function Checklist(props) {
  const [checklist, setChecklist] = useState(initialValue);
  const [newItem, setNewItem] = useState("");

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    setChecklist(prev => {
      return [...prev, newItem];
    });
    setNewItem("");
  }

  function handleDelete(value) {
    setChecklist(
      checklist.filter((item, index) => {
        return index !== value;
      })
    );
  }

  function handleEdit(value, content) {
    const list = [...checklist];
    list.splice(value, 1, content);
    setChecklist(list);
  }

  return (
    <>
      <ul>
        {checklist.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            deleteItem={handleDelete}
            editItem={handleEdit}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          id="addInput"
          type="text"
          onChange={handleChange}
          value={newItem}
          autoComplete="off"
        />
        <IconButton id="addBtn" className="btn" type="submit">
          <Add style={{ color: "#1a1c20" }} />
        </IconButton>
      </form>
    </>
  );
}

export default Checklist;
