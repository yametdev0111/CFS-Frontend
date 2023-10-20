import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;