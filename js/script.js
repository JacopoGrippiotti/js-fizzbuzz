const fizzBuzzList = document.getElementById("fizzBuzzList")

for (let i = 1; i < 101; i++){
    let liElement = document.createElement('li')
    
    if (i % 3 === 0 && i % 5 === 0){
        liElement.append("FizzBuzz")
        liElement.classList.add("fizzbuzz")
        console.log("FIzzBuzz")
    }
    else if (i % 3 === 0){
        liElement.append("Fizz")
        liElement.classList.add("fizz")
        console.log("Fizz")
    } 
    else if (i % 5 === 0){
        liElement.append("Buzz")
        liElement.classList.add("buzz")
        console.log("Buzz")
    }
    else{
        liElement.append(i)
        liElement.classList.add("number")
        console.log(i)
    }

    fizzBuzzList.append(liElement)
}