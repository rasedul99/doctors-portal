import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  console.log(service);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={service.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.desc}</p>
        <div class="card-actions">
          <PrimaryButton>Buy Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
