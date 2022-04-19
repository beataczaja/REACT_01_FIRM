import React from "react";
import pracownik1 from "./pracownik1.jpg";
import pracownik2 from "./pracownik2.jpg";

function Employee() {
  const employeeParam = [
    {
      name: "Sergiusz",
      surname: "Talaga",
      job_position: "[dział Ofertowy]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices.",
      image_url: "/src/pracownik1.jpg",
    },
    {
      name: "Aida",
      surname: "Lewińska",
      job_position: "[dział Obsługi Klienta]",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices.",
      //image_url: "/src/pracownik2.jpg",
      image_url: pracownik2,
    },
  ];

  return employeeParam.map((item) => (
    <div class="employee">
      <div
        class="img"
        style={{ backgroundImage: `url(${item.image_url})` }}></div>
      <div class="employeeDescFull">
        <div>
          <p class="headerSmall headerDark">
            {item.name + " " + item.surname + " " + item.job_position}
          </p>
          <p class="employeeDesc">{item.description}</p>
        </div>
      </div>
    </div>
  ));
}

export default Employee;
