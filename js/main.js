function highAndLow(numbers){
  numbers = numbers.split(" ");
  let max = Math.max(...numbers)
  let min = Math.min(...numbers)
  return max + " " + min
  console.log(max + " " + min)
}


//another solution
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

