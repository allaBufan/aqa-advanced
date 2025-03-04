function printDelayedText (text, delay){
    setTimeout(() => {console.log(text)}, delay);
}

printDelayedText ('Studying becomes more difficult', 5000);