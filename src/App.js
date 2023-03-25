import styled from "@emotion/styled";
import EventBoard from "./components/EventBoard";
import PageTitle from "./components/PageTitle";
import events from "./data/upcoming-events.json";

const Container = styled.div`
  padding: 50px;
`;

function App() {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </Container>
  );
}

export default App;
