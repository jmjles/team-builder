import React, { useState } from "react";
import Form from "./components/form";
import { Container } from "@material-ui/core";

import Person from "./components/person";
const id = require("uniqid");
function App() {
  const [list, updateList] = useState([
    {
      id: id(),
      name: "Some Random Guy",
      title: "Frontend Web Dev",
      comment: "Fun guy to work with!"
    }
  ]);
  return (
    <Container lg="true">
      <Form list={list} fn={updateList} id={id} />
      <Person list={list} />
    </Container>
  );
}

export default App;
