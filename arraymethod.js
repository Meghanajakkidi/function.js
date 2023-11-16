let players = [
    {
        name:"test1",
        team:"A"
    },
    {
        name:"test2",
        team:"A"
    },
    {
        name:"test3",
        team:"B"
    },
    {
        name:"test4",
        team:"A"
    },
    {
        name:"test5",
        team:"B"
    },
    {
        name:"test6",
        team:"A"
    }
]
let filteredplayers = players.filter(function(curr,index,arr){
    return curr.team==="A"
})
let filteredplayers1 = players.filter(function(curr,index,arr,){
    return curr.team==="A"
})
 console.log(filteredplayers)
console.log(filteredplayers1)