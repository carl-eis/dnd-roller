import styled from 'styled-components';

const backgroundUrl = 'https://www.dndbeyond.com/Content/1-0-715-0/Skins/Waterdeep/images/character-sheet/content-frames/abilityscore.svg';

export const StatsRow = (styled.div)<any>`
  height: auto;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StatsBlock = (styled.div)`
  background: ${
    [
      'center',
      'center',
      'transparent',
      `url(${backgroundUrl})`,
    ].join(' ')
  };
  background-size: contain;
  height: 78px;
  width: 66px;

  .heading {
    padding-top: 8px;
    height: 24px;
    width: 100%;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    font-family: Roboto,Helvetica,sans-serif;
    box-sizing: border-box;
  }

  .primary {
    height: 30px;
    width: 100%;
    font-size: 22px;
    line-height: 22px;
    font-weight: 500;
    text-align: center;
    font-family: Roboto,Helvetica,sans-serif;
    box-sizing: border-box;
  }

  .secondary {
    height: 22px;
    width: 100%;
    font-family: Roboto,Helvetica,sans-serif;
    box-sizing: border-box;
    text-align: center;
  }
`;
