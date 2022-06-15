function deepClone(obj){
    let res = null
    if(typeof(obj) === 'object' && obj !== null){
        res = Object.prototype.toString.call(obj) === '[Object Array]' ? {} : []
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                res = deepClone(obj[key])
            }
        }
    }else{
        res = obj
    }
    return res
}