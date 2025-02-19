function recursion(num){
    if(num>0){
    console.log(num); // Function logs num in case it's >=0
    recursion(num-1);  // FUnction decreases n
    } else {
        return;
    }
}


recursion(5);