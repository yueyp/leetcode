var list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
function convert(list) {
    const map = list.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {})
    console.log(map, 'map')
    const result = []
    for (const key in map) {
        const item = map[key]
        if (item.parentId === 0) {
            result.push(item)
        } else {
            const parent = map[item.parentId]
            if (parent) {
                parent.children = parent.children || []
                parent.children.push(item)
            }
        }
    }
    return result
}
var result = convert(list)
console.log(result)

// 方法二：例如
// [{ id: 1, parentId: 0 }, { id: 2, parentId: 1 }, { id: 3, parentId: 1 }]
// 把这个数组从顶级分类递归查找子分类，最终构建一个树状数组。结果输出如下
// [{ id: 1, parentId: 0, children: [{ id: 2, parentId: 1 }, { id: 3, parentId: 1 }] }]
// parentId为0 的是根节点

// 代码实现

// 输入
const tempArr = [{
    id: 1,
    parentId: 0
},
{
    id: 2,
    parentId: 1
},
{
    id: 3,
    parentId: 1
},
{
    id: 4,
    parentId: 2
},
];

function arrayToTree(sourceArr) {
    sourceArr.forEach(item => {
        let parentId = item.parentId;
        if (parentId !== 0) {
            sourceArr.forEach(subitem => {
                if (subitem.id == parentId) {
                    if (!subitem.children) {
                        subitem.children = [];
                    }
                    subitem.children.push(item);
                }
            });
        }
    });
    return sourceArr.filter(item => item.parentId === 0);
}
console.log(arrayToTree(tempArr));