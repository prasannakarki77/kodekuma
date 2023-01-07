import styled from "styled-components";
export const ChallengeLevel = styled.div`
  display: inline-block;
  text-transform: capitalize;
  border-radius: 29px;
  padding: 7px 13px;
  font-family: Poppins, sans-serif;
  background: ${({ level }) =>
    (level === "beginner" && "#5DB355") ||
    (level === "intermediate" && "#721792") ||
    (level === "advanced" && "#3C7154") ||
    (level === "expert" && "#C51717")};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
