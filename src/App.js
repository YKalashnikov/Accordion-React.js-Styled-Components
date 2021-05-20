import React from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

const AccordionComponent = styled.div`
  width: 100%;
  background-color: ${(props) => (props.disabled ? 'gray' : 'white')};
  border-radius: 1px;
  box-shadow: 0 1px 3px gray;
  margin: 0.1em 1em;
`;

const TitleWrapper = styled.div`
  cursor: ${(props) => (props.disabled ? 'wait' : 'pointer')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`;

const ContentWrapper = styled.div`
  height: 0;
  max-height: 0;
  overflow: auto;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
  overflow-y: hidden;
  p {
    margin-left: 1em;
  }
  ${({ active }) =>
    active &&
    `height:100%;
   max-height: 13rem;
   visibility: visible;
   `}
`;

const ArrowIcon = styled.div`
  transition: transform 0.5s ease-in-out;
  ${({ active, disabled }) =>
    active &&
    !disabled &&
    `
  transform: rotate(180deg);
  transition: all 0.5s ease-in-out;
`}
`;

function App() {
  const accordionData = [
    {
      tile: 'Title',
      content: 'Content',
      disabled: false,
    },
    {
      tile: 'Title2',
      content: 'Content2',
      disabled: false,
    },
    {
      tile: 'Title3',
      content: 'Content3',
      disabled: true,
    },
  ];
  return (
    <AccordionWrapper>
      {accordionData.map((item, index) => (
        <Accordion title={item.title} content={item.content} disabled={item.disabled} key={index} />
      ))}
    </AccordionWrapper>
  );
}

function Accordion({ title, content, disabled }) {
  const [active, setActive] = React.useState(false);
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <AccordionComponent disabled={disabled}>
      <TitleWrapper onClick={handleToggle} disabled={disabled}>
        {disabled ? <h3>Accordion Disabled</h3> : <h3>{title}</h3>}
        <ArrowIcon active={active} disabled={disabled}>
          {'^'}
        </ArrowIcon>
      </TitleWrapper>
      {!disabled && (
        <ContentWrapper active={active}>
          <p>{content}</p>
        </ContentWrapper>
      )}
    </AccordionComponent>
  );
}

Accordion.defaultProps = {
  title: 'Title',
  content: 'content',
};
export default App;
