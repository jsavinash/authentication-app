import styled from 'styled-components';

const StyledFrontendUiElement = styled.div`
  color: pink;
`;

export function FrontendUiElement() {
  return (
    <StyledFrontendUiElement>
      <h1>Welcome to FrontendUiElement!</h1>
    </StyledFrontendUiElement>
  );
}

export default FrontendUiElement;
