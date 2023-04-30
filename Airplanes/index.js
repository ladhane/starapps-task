function findMinimumPlanes(arr) {
    let currentFuel = arr[0]; //initial fuel is first element of array
    let planesNeeded = 0;  //initially planes requiered are zero
    
    for(let i = 1; i < arr.length; i++) {
      currentFuel--;    // moving to next point requires atleast 1 unit of fuel.
      
      if(currentFuel < 0) {  //current fuel cannot be less than zero or we wont reach anywhere
        return -1; // cannot reach the last airport
      }
      
      if(arr[i] > currentFuel) {  //current fuel is less than the fuel required to reach the next destination
        planesNeeded++;     // take another plan
        currentFuel = arr[i]; //current fuel equals to the fuel of new plan
      } 
      //if current fuel is greater than fuel required to reach the next destination continue  
    }
    
    return planesNeeded;
  }
  const arr = [1,6,3,4,5,0,0,0,6];
  const minPlanes = findMinimumPlanes(arr);
  console.log(minPlanes);