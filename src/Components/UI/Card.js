import React from "react";
import "./Card.css";

export default function Card(props) {
  const Classes = "Card " + props.className;
  return <div className={Classes}>{props.children}</div>;
}
