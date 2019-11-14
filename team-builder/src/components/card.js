import React from "react";
import { Card, Typography as Font } from "@material-ui/core";
const CardComponent = ({ name, title, comment }) => {
  return (
    <Card>
      <Font variant="h2" align="center">
        {name}
      </Font>
      <Font variant="h3" align="center">
        {title}
      </Font>
      <Font variant="body1">{comment}</Font>
    </Card>
  );
};

export default CardComponent;
