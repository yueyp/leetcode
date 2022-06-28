function myMap(arr, callback,context) {
    if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            result.push(callback.call(context,arr[i], i, arr))
        }
        return result
    }
}

function myFilter(arr, callback) {
    if (!Array.isArray(arr) || !arr.length || !typeof callback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    }
}

function myReduce(arr,callback,initialValue){
    if (!Array.isArray(arr) || !arr.length || !typeof callback !== 'function') {
        return []
    } else {
        let hasInitialValue =  initialValue !== undefined
        let value = hasInitialValue ? initialValue : arr[0]
        for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
            value = callback(value,arr[i], i, arr)
        }
        return value
    }
}