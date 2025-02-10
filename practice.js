function myasyncfunction(duration){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, duration)
    })
    return p
} 


const ans = myasyncfunction(2000)
ans.then(function(){
    console.log(ans)
})