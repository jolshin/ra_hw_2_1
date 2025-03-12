import { data } from "../bin/data";

function ProjectList({ selected }) {
  let filtered = data;

  if (selected !== "All") {
    filtered = data.filter((item) => item.category === selected);
  }

  return (
    <div className="cards">
      {filtered.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.category} style={{ width: "400px" }} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
