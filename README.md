# Git Branching Task

### [Max Possible](https://github.com/Arthur-Gyulabyan/git-branching-task/blob/master/maxPossible.js)

The task is to write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.  
`maxPossible(9328, 456) ➞ 9658`

_Description_: First, the numbers are turned into arrays of digits. Then, I looped over the first array with `map()` and compared the current digit with the biggest digit from the second array. If the second one is bigger than the first one, then the second one is taken and the digit is removed, otherwise the current digit is taken. Finally the result is converted back to a number. Check the [maxPossible.js](https://github.com/Arthur-Gyulabyan/git-branching-task/blob/master/maxPossible.js) file for solution.
