function divide(numerator, denominator){
    if (denominator===0){
        throw new Error('Do not devide by zero'); // Checks if denominator is not 0
    } 
    if (isNaN(numerator) || isNaN(denominator)){
        throw new Error('Not numbers'); // Checks if arguments are not numbers
    } else {
        console.log(numerator / denominator); // Function divides numerator by denominator
        return numerator / denominator;
    } 
}


try {
    divide(6, 0);
} catch (error) {
    console.log(error.message)
} finally{
    console.log('Робота завершена')
}


