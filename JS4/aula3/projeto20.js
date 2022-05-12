function add(numArray = []) {
    let total = 10
    numArray.forEach((element) => {
        total += element
    })

    console.log(total)
}

add()