import { Link } from "react-router-dom";
const DUMMY_DATA = [
  { id: "e1", title: "One Event" },
  { id: "e2", title: "Another Event" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
