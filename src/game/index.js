const moves = [
  { name: 'rock', beats: 'scissors' },
  { name: 'paper', beats: 'rock' },
  { name: 'scissors', beats: 'paper' }
];

export const getComputerMove = () => {
  let random = Math.floor(Math.random() * moves.length);
  return random < moves.length ? moves[random].name : moves[moves.length - 1].name;
};

export const getResult = (playerMove, computerMove) => {
  if (!playerMove || !computerMove) {
    return null;
  }
  if (playerMove === computerMove) {
    return 'tie';
  }
  const playerMoveBeats = moves.find((move) => move.name === playerMove).beats;
  if (playerMoveBeats === computerMove) {
    return 'win';
  }
  return 'loss';
};