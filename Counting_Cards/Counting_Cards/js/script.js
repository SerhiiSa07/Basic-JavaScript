var count = 0;

function cc(card) {
  // Only change code below this line

  var myDog = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count === 5) myDog = '5 Bet';
  else if (count === 0) myDog = '0 Hold';
  else if (count === -5) myDog = '-5 Hold';
  else if (count === -1) myDog = '-1 Hold';
  else if (count === 1) myDog = '1 Bet';

  return myDog;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
