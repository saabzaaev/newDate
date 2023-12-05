// Task-1
function first(arr)
{
    return arr[0]
}
console.log(first([1,2,3]));

// Task-2
function arr(...num)
{
    return num
}
console.log(arr(1,2));

// Task-3
function reverces(arr)
{
    return arr.toReversed()
}
console.log(reverces([1,2,3,4]));

// Task-4
function add(arr)
{
    return arr.map(e=>
        {
            return e+1
        })
}
console.log(add([1,2,3,4]));

// Task-5
function last(arr)
{
    return arr.pop()
}
console.log(last([1,2,3,4]));

// Task-6
function joined(arr)
{
    return arr.join("")
}
console.log(joined([1,2,3,4,5,6,7,8,9]));

// Task-7
function test(arr , n)
{
    return arr.includes(n)
}
console.log(test([1,2,3,4,5],3));

// Task-8
function index(arr , n)
{
    return arr.indexOf(n)
}
console.log(index(["ehson" , "sabzaev"] , "ehson"));

// Task-9
function sum(...arr)
{
    return arr.flat(Infinity)
}
console.log(sum([1,2,3],[1,2,3]));

// Task-10
function raqam(arr)
{
    return arr.map(e=>
        {
            return +e
        })
}
console.log(raqam(["1" , "2"]));

// Task-1
function sum(obj)
{
    length = Object.values(obj)
    return length.length
}
console.log(sum({ a: "moron" , b: "moron"}));

// Task-2
function numbers(n)
{
    obj =
    {
        1:"circle",
        2:"semi-circle",
        3:"triangle0",
        4:"square",
        5:"pentagon",
        6:"hexagon",
        7:"heptagon",
        8:"Octagon",
        9:"nonagon",
        10:"decagon"
    }
    return obj[n]
}
console.log(numbers(10));

// Task-3
function maxof(n , obj)
{
    return n>obj.min && n<obj.max
}
console.log(maxof(6,{min:0 , max:5}));

// Task-4
function takror(obj)
{
    return obj + obj[1]
}
console.log(takror({1: "Mommy", 2: "please", 3: "help"}));