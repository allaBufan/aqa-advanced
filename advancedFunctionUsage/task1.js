function handleNum(num, handleEven, handleOdd) { // Function checks if the num is even or odd
    if (num % 2 === 0) {
        handleEven(num);
    } else {
        handleOdd(num);
    }
}

function handleEven(num) {
    console.log('Number is even'); // Function logs even num
}

function handleOdd(num) {
    console.log('Number is odd'); // Function logs odd num
}

handleNum(1, handleEven, handleOdd); // Call to handleNum with num and two callbacks
