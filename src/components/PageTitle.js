import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export default function PageTitle({ text }) {
  return <Title>{text}</Title>;
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
