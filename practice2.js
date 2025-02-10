const input = [1, 2, 3, 4, 5]

const newarray = []

for (let i = 0; i<input.length; i++) {
    if (input[i] % 2 == 0) {
        newarray.push(input[i])
    }
}

console.log(newarray)
