/*
输出结果要求为 
[
    'top',
    "level1_1",
    "level1_2",
    "level2_1",
    "level2_2",
    "level2_3",
    "level2_4",
]
*/

const tree = {
    name: "top",
    children: [
        {
            name: "level1_1",
            children: [
                {
                    name: "level2_1",
                    children: [
                        {
                            name: "level3_1",
                            children: [],
                        }
                    ],
                }, {
                    name: "level2_2",
                    children: []
                }


            ]
        },
        {
            name: "level1_2",
            children: [
                {
                    name: "level2_3",
                    children: [],
                }, {
                    name: "level2_4",
                    children: [
                        {
                            name: "level3_2",
                            children: [],
                        }
                    ]
                }
            ]
        }
    ]
}
const bfs = function(root){
    if(!root) return []
    if(!root.children) return [root.name]
    const res = []
    const cur = []
    res.push(root.name)
    while(root || cur.length){
        // 先遍历第一层
        for(let i = 0; i < root.children.length; i++){
            res.push(root.children[i].name)
            // 将第二层及其之后先保存起来
            if(root.children) cur.push(root.children[i])
        }
        // 第一层遍历完了，再一一遍历保存的第二层数据，依次类推
        root = cur.shift()
    }
    return res
}

console.log(bfs(tree))