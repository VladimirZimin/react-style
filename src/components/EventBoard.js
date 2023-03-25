import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Event from "./Event/Event";

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default function EventBoard({ events }) {
  return (
    <Board>
      {events.map((event) => (
        <Event
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </Board>
  );
}

EventBoard.prototype = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      },
    })
  ),
};
