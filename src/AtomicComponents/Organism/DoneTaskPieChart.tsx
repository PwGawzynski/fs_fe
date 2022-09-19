import { ResponsivePie } from '@nivo/pie';
import { linearGradientDef } from '@nivo/core';
import styled from 'styled-components';

// TODO connect with BE

const data = [
  {
    id: 'Done',
    label: 'DONE TASKS',
    value: 20,
    color: 'hsl(47, 70%, 50%)',
  },
  {
    id: 'TODO',
    label: 'TASK TO DO',
    value: 80,
    color: 'hsl(0,93%,47%)',
  },
];

const Container = styled.div`
  grid-row: 4 / span 7;
  grid-column: 1 / span 7;
  position: relative;
`;
const CountOnCentreMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  h1:nth-child(1) {
    background: -webkit-linear-gradient(#f6ea41, #f048c6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 80%;
    margin: 0;
    padding: 0;
  }
`;

export const DoneTaskPieChart = () => {
  return (
    <Container>
      <CountOnCentreMask>
        <h1>20/100</h1>
      </CountOnCentreMask>
      <ResponsivePie
        margin={{ left: 10, right: 10 }}
        data={data}
        innerRadius={0.8}
        padAngle={1}
        cornerRadius={2}
        colors={['#ED5B53', '#ffffff']}
        defs={[
          linearGradientDef('gradient', [
            { offset: 10, color: '#f6ea41' },
            { offset: 100, color: '#f048c6', opacity: 10 },
          ]),
        ]}
        fill={[
          {
            match: {
              id: 'Done',
            },
            id: 'gradient',
          },
        ]}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        isInteractive={false}
      />
    </Container>
  );
};
