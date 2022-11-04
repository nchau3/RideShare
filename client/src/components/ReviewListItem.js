import React from "react";
import '../styles/component-styles/review-list-item.scss';

export default function ReviewListItem(props) {
  return (
    <article>
      <p>{props.review}</p>
    </article>
  );
}