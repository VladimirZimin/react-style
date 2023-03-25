import PropTypes from "prop-types";
import { formatEventDuration, formatEventStart } from "../../utils";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { Card, EventName, Info, Chip } from "./Event.styled";

export default function Event({ name, location, speaker, type, start, end }) {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt />
        {location}
      </Info>
      <Info>
        <FaUserAlt />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />
        {formattedStart}
      </Info>
      <Info>
        <FaClock />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
