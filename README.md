# Rock, Paper, Scissors!

This package allows you to play Rock, Paper, Scissors against the computer.

## To run the application:

After `npm install` run:

```sh
npm start
```

## To run the unit tests

```sh
npm test
```

and then press `a` to run all the tests

## Approach

I tried the estructure the app in a way that it can be easily maintained and extended by creating various modules and components that handle diferent parts of the game. The game logic is inside its own module and was implemented with extensibility in mind. Several unit tests were added to make sure the code is behaving according to the requirements.

## Improvements

If given more time I would split the rendering between a couple more components to make them more composable and easy to maintain. I would have liked to add more unit tests, especially to handle edge cases. I would also have liked to improve the styling by introducing Post CSS so that I could use CSS Modules, CSS Next and style linting.
