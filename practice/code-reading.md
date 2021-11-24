# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
# Answer 1
The console.log(x) in line 6 is a reference to the x variable in line 2. The console.log(x) in line 4 is a reference to the x variable in line 1. The value of x in line 1 is 1, and the value of x in line 2 is 2. Therefore, line 4 and line 6 output different numbers.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
# Answer 2
The output of the code is undefined, because the variable y is defined in the scope of the function f1 and is not accessible outside of the function. 
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
# Answer 3
The function f1 will return 10, because the value of val is passed by value, and the value of val is incremented by 1. The console.log(x) will output 9, the value of x is not affected by the function f1 since it's passed by value.

The function f2 will return { x: 10 }, because the value of val.x is incremented by 1. The console.log(y) will output { x: 10 }, because the object y is passed by reference, and the value of y.x is incremented by 1. 
