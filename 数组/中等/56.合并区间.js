/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * */ 

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 方法一:执行用时88ms,内存消耗48MB
var merge = function(intervals) {
    // 先对区间数组进行排序,使得前一区间的第一项肯定小于后一区间的第一项
    intervals.sort((a,b) =>{
        return a[0] - b[0]
    })
    // 使用迭代
    return fn(intervals)
    function fn(intervals){
        // 新增数组保存合并结果
        let arr= []
        // 是否有区间重叠
        let flag = false
        for (let index = 0; index < intervals.length ; index++) {
            // 如果前一区间的第二项小于后一区间的第一项,则两区间重叠,需要进行合并,第一项取前一区间的第一项,第二项取两区间第二项的最大值
            if(intervals[index + 1] && intervals[index][1] >= intervals[index + 1][0]){
                arr.push([intervals[index][0],Math.max(intervals[index][1],intervals[index + 1][1])])
                // 有区间重叠,则需要再次进行筛选
                flag = true
                // 由于下一项已经被合并,所以循环跳过下一项
                index++
            }else{
                // 该区间不与后一区间存在交集,则将该区间保存起来
                arr.push(intervals[index])
            }
        }
        if(flag){
            return fn(arr)
        }else{
            return arr
        }
    }
};

// 方法二:执行用时200ms,内存消耗47.6MB
var merge = function(intervals) {
    // 先对区间数组进行排序,使得前一区间的第一项肯定小于后一区间的第一项
    intervals.sort((a,b) =>{
        return a[0] - b[0]
    })
    for (let index = 0; index < intervals.length ; index++) {
        // 如果前一区间的第二项小于后一区间的第一项,则两区间重叠,需要进行合并,第一项取前一区间的第一项,第二项取两区间第二项的最大值
        if(intervals[index + 1] && intervals[index][1] >= intervals[index + 1][0]){
            // 将合并结果保存在当前区间,删除后一区间,从该区间再次循环判断
            intervals[index] = [intervals[index][0],Math.max(intervals[index][1],intervals[index + 1][1])]
            intervals.splice(index + 1,1)
            index--
        }
    }
    return intervals
};

// 方法三:执行用时96ms,内存消耗47.8MB
var merge = function(intervals) {
    // 先对区间数组进行排序,使得前一区间的第一项肯定小于后一区间的第一项
    intervals.sort((a,b) =>{
        return a[0] - b[0]
    })
    let arr = []
    for (let index = 0; index < intervals.length ; index++) {
        let length = arr.length
        // 若合并后的数组的最后一区间的第二项大于当前区间的第一项,则存在重叠,需要进行合并,并将合并后的区间赋值给合并数组的最后一区间
        if(length && arr[length - 1][1] >= intervals[index][0]){
            arr[length - 1] = ([arr[length - 1][0],Math.max(arr[length - 1][1],intervals[index][1])])
        }else{
            // 不重叠,则将当前项直接加入合并数组
            arr.push(intervals[index])
        }
    }
    return arr
};

// 方法四:执行用时92ms,内存消耗48.4MB,双指针法
var merge = function(intervals) {
    // 先对区间数组进行排序,使得前一区间的第一项肯定小于后一区间的第一项
    intervals.sort((a,b) =>{
        return a[0] - b[0]
    })
    let arr = []
    for (let index = 0; index < intervals.length ; index++) {
        let t = intervals[index][1]
        let j = index + 1
        while(j < intervals.length && intervals[j][0] <= t){
            t = Math.max(intervals[j][1],t)
            j++
        }
        arr.push([intervals[index][0],t])
        index = j - 1
    }
    return arr
};

// console.log(merge([[1,3],[2,6],[5,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,3],[0,4]]))
// console.log(merge([[1,4],[0,0],[1,6]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))