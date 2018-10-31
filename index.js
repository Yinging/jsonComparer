// 引入比较json的模块
const compare = require("./compareJSON")
// 引入测试用例
const data = require("./json.js")

// 便利测试用例进行测试
data.forEach((ele, index, arr) => {
    // 比较
    let reslut = compare(ele.obj1, ele.obj2)
    // 输出测试结果
    console.info(`测试条目${index}\t期待${ele.isEqual}\t得到${reslut}\t测试${reslut === ele.isEqual ? '通过' : '失败'}`)
})