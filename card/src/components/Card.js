import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <article className="card">
      <img src={props.imageUrl} alt="" className="card__img" />
      <div class="card__text">
        <div className="card__location">
          <span className="card__country">{props.location}</span>
          <a href={props.googleMapsUrl} className="card__maps-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{props.title}</h1>
        <p className="card__dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card__description">{props.description}</p>
      </div>
    </article>
  );
}
