import { createSelector } from 'reselect';
import { getResult } from '../../game';

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
    return getResult(playerMove, computerMove);
  }
);