// declaring the card point count variable
var count = 0;

// The game function
function cardgame(card)
{
  // Js switch method to increment/decrement the Player's count point
  switch(card)
    {
      case 2:
        count++;
        break;
      case 3:
        count++;
        break;
      case 4:
        count++;
        break;
      case 5:
        count++;
        break;
      case 6:
        count++;
        break;
      //case 7:
      //no job
      //case 8:
      //no job
      //case 9:
      //no job
      case 10:
        count--;
        break;
      case 'J':
        count--;
        break;
      case 'Q':
        count--;
        break;
      case 'K':
        count--;
        break;
      case 'A':
        count--;
        break;
    }
  // if else method for the Player's Call
  if( count > 0)
  { 
    return count + " Bet";
  }
  else if ( count <= 0)
  { 
    return count + " Hold";
  }
  
  return "Enjoy The Game";

}

// Player's Card input example:
cc(2); cc(3); cc(7); cc('K'); cc('A');

