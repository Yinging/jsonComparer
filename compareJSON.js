// 比较两个JSON是否等价
// 键值+结构，数组不比顺序，对象不比键的顺序
// 传进去的应该是标准的json对象，不应该含有函数
function compare(obj1, obj2) {
    try {
        let type = typeof obj1;
        if (type === "object") {
            if (Array.isArray(obj1)) {
                type = "array"
            } else {
                type = "object"
            }
        }
        let type2 = typeof obj2;
        if (type2 === "object") {
            if (Array.isArray(obj1)) {
                type2 = "array"
            } else {
                type2 = "object"
            }
        }
        if (type != type2) {
            return false
        }
        // object或array需要递归处理判断
        // 值类型直接判断是否相等
        // 在所有递归中，只要有一个false返回，则所有递归都应该返回
        switch (type) {
            case "number":
            case "boolean":
            case "string":
                if (obj1 === obj2) {
                    return true;
                } else {
                    return false;
                }
            case "object":
                // 只要有一个false就整理return了
                // 但是true不return继续判断
                for (const key in obj1) {
                    if (obj1.hasOwnProperty(key)) {
                        if (obj2[key]) {
                            if (compare(obj1[key], obj2[key])) {
                                continue;
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    }
                }
                return true;
            case "array":
                if (obj1.length == obj2.length) {
                    // 先排个序，让两个顺序一致
                    obj1.sort();
                    obj2.sort();
                    for (let index = 0; index < obj1.length; index++) {
                        if (compare(obj1[index], obj2[index])) {
                            continue;
                        } else {
                            return false;
                        }
                    }
                    return true;
                } else {
                    return false;
                }
            default:
                console.error("类型判断错误");
                break;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports=compare