import styled from "styled-components";

export const FormBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  min-height: 500px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: center;
`;
