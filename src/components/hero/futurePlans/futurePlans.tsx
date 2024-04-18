import React from "react";
import "./futurePlans.css";

const futureGoals = [
  {
    id: 1,
    title: "5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.",
  },
  {
    id: 2,
    title: "30",
    description:
      "Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.",
  },
  {
    id: 3,
    title: "300",
    description:
      "Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt. ",
  },
  {
    id: 4,
    title: "8",
    description:
      "Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit. ",
  },
];

const FuturePlans: React.FC = () => {
  return (
    <section id="FuturePlans">
      <div className="container">
        <div className="futurePlans">
          <h1>
            Наша цель - создать фантастический <br /> сервис для всех
            потребителей
          </h1>
          <div className="future-content">
            {futureGoals.map((goal) => (
              <div className="future" key={goal.id}>
                <h1>{goal.title}</h1>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
