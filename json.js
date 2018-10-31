module.exports = [
    {
        obj1: [{
            obj2: {
                name: {
                    firstName: "Chen",
                    firstName: "Kun"
                },
                equipment: [
                    "allOk",
                    { weapon: "冲锋枪", isOk: true },

                ],
                sex: "male",
                age: 18,
            },
            isEqual: false
        }
        ],
        obj2: [{
            obj1: {
                sex: "male",
                name: {
                    firstName: "Chen",
                    firstName: "Kun"
                },
                age: 18,
                equipment: [
                    { weapon: "冲", isOk: true },
                    "allOk"
                ]
            },
            isEqual: false
        },],
        isEqual: false
    },
    {
        obj1: "123",
        obj2: "12 3",
        isEqual: false
    }
]