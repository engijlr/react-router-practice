import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <h3>{params.eventId}</h3>
    </>
  );
};

export default EventDetailPage;
