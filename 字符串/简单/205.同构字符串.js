/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。


*/

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
方法一，若两个字符串为同构，则需要满足以下条件：
即 s 的任意一个字符被 t 中唯一的字符对应，同时 t 的任意一个字符被 s 中唯一的字符对应
*/
var isIsomorphic = function (s, t) {
    if (!s && !t) return true
    if (s.length !== t.length) return false
    let map = new Map()
    let map1 = new Map()
    for (let i = 0; i < s.length; i++) {
        // 先判断s中的每个字符是否在t中对应唯一字符
        if (!map.get(s[i])) {
            map.set(s[i], t[i])
        } else {
            if (map.get(s[i]) !== t[i]) return false
        }
        // 再判断t中的每个字符是否在s中对应唯一字符
        if (!map1.get(t[i])) {
            map1.set(t[i], s[i])
        } else {
            if (map1.get(t[i]) !== s[i]) return false
        }
    }
    return true
};
// @lc code=end

