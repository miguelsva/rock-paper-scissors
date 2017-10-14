import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectPlayerMove = () => createSelector(
  selectApp,
  (app) => app.playerMove
);

export const selectComputerMove = () => createSelector(
  selectApp,
  (app) => app.computerMove
);

export const selectGameResult = () => createSelector(
  selectApp,
  (app) => {
    const { playerMove, computerMove } = app;
    if (!playerMove || !computerMove) {
      return null;
    }
    // TODO
    return {
      title: 'Winner!',
      info: 'paper beats rock'
    }
  }
);