const fizzBuzzList = document.getElementsByClassName("fizzBuzzList")

for (let i = 1; i < 101; i++){
    let liElement = document.createElement('li')
    if (i % 3 === 0 && i % 5 === 0){
        
        liElement.append("FizzBuzz")
        fizzBuzzList.append(liElement)
        console.log("FIzzBuzz")
    }
    else if (i % 3 === 0){
        
        liElement.append("Fizz")
        fizzBuzzList.append(liElement)
        
        console.log("Fizz")
    
    } 
    else if (i % 5 === 0){
        
        liElement.append("Buzz")
        fizzBuzzList.append(liElement)
        console.log("Buzz")
    }

    else{
        
        liElement.append(i)
        fizzBuzzList.append(liElement)
        console.log(i)
    }

}