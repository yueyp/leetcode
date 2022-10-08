const proxyArray = arr => {
    const length = arr.length
    return new Proxy(arr, {
        get(target, key) {
            key = +key
            while (key < 0) {
                key += length
            }
            return target[key]
        }
    })
}

function ArrProxy(arr) {
    return new Proxy(arr, {
        get(arr, index) {
            // 模拟机器取模运算
            const modIndex = index % arr.length;
            return arr[modIndex < 0 ? arr.length + modIndex : modIndex];
        },
        set() { }
    })
}