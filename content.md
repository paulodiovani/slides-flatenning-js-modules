<!-- .slide: data-background="img/flat-belly-secrets.jpg" -->

# Flattening Javascript Modules

Improving Js modules with functional programming concepts.

<small>Version 0.1.0</small>

<small>por Paulo Diovani</small>

====
<!-- .slide: class="half-slide" data-background="url(img/paulodiovani.jpg)" data-background-size="contain" data-background-repeat="no-repeat" data-background-position="right" -->


### <i class="fa fa-user"></i> Paulo Diovani

Tecnólogo em Sistemas para Internet pela Universidade Feevale.
Desenvolvedor na Codeminer 42.
Usuário GNU/Linux.

[blog.diovani.com][blog] [@paulodiovani][twitter]

[![codeminer42][code-logo]][code-site] <!-- .element: class="no-border no-background" -->

[avatar]: img/avatar.jpg
[blog]: http://blog.diovani.com
[twitter]: http://twitter.com/paulodiovani
[code-logo]: img/codeminer42.png
[code-site]: http://codeminer42.com/

----

<div class="big">
    <span>This is (not) another Talk</span>
    <span>about Javascript</span>
    <span>Functional Programming</span>
</div>

Note:
A lot of people ou there _teach_
functional javascript.

====

<div class="big">
    <span>FP Jargon</span>
    <p>[hemanth/functional-programming-jargon](https://github.com/hemanth/functional-programming-jargon)</p>
</div>

Note:
get used to the jargon

We'll be using some fp concepts explained 
on the following slides

====

## Higher-Order Functions (HOF)

A function which takes a function as an argument and/or returns a function.

    const filter = (predicate, xs) => xs.filter(predicate)
    const is = (type) => (x) => Object(x) instanceof type

    filter(is(Number), [0, '1', 2, null]) // [0, 2]

====

## Lambdas

An anonymous function that can be treated like a value.

    (function (a) {
      return a + 1
    })
<!-- .element: class="half-pre" -->

    (a) => a + 1

Lambdas are often passed as arguments to Higher-Order functions.

    [1, 2].map((a) => a + 1) // [2, 3]

You can assign a lambda to a variable.

    const add1 = (a) => a + 1

====

## Purity

A function is pure if the return value is only determined by its input values, and does not produce side effects.

    const greet = (name) => `Hi, ${name}`

    greet('Brianne') // 'Hi, Brianne'


====

## Function Composition

The act of putting two functions together to form a third function where the output of one function is the input of the other.

    const compose = (f, g) => (a) => f(g(a)) // Definition
    const floorAndToString = compose(
        (val) => val.toString(), 
        Math.floor
    ) // Usage
    
    floorAndToString(121.212121) // '121'

====

## Currying

The process of converting a function that takes multiple arguments into a function that takes them one at a time.

    const sum = (a, b) => a + b
    const curriedSum = (a) => (b) => a + b
    curriedSum(40)(2) // 42.

    const add2 = curriedSum(2) // (b) => 2 + b
    add2(10) // 12

Note:
Each time the function is called it only accepts one argument and returns a function that takes one argument until all arguments are passed.


====

## Map

Used to apply a function to a list of values and return another list with the results.

    square = (n) => n * n
     
    map([4, 8], square) // [16, 64]

----
<!-- .slide: data-background="img/slow-response.gif" data-background-size="contain" -->

Note:
Ok, now I know some concepts, but how to use it?

- it takes time to figure out
- to see advantages
- needs experience
