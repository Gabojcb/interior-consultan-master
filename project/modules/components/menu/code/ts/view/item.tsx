import * as React from "react";

export function Item({ item }) {
  return <li className="li-item">{item ?? "sin valor"}</li>;
}
