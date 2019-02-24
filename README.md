# Tricky-Stuff-In-JavaScript
Deal with the tricky stuff, like "this" keyword, OOP, in JavaScript.  
##### Table of Contents  
[CSS Selector](#CSS-Selector)  
[Hoisting](#hoisting-function-expression-vs-function-declaration)  
[JSONP](#JSONP)  
[Keyword "this"](#Keyword-this)  
  
## CSS Selector ## 
<strong>.selector #selector</strong>
<ul>
  <li>space for the children. </li>
  <li>elements matched by the second selector are selected if they have an ancestor element matching the first selector.</li>
</ul>  

<strong>.selector#selector</strong>
<ul>
  <li>no space for the same level structure.
</ul>

<strong>.selector > #selector</strong>
<ul>
  <li>'>' for the first level children.</li>
</ul>

## Hoisting (Function Expression V.S. Function Declaration) ##
### Function Declaration: ###
<p>The function declaration is "magic", function declarations are hoisted to the top of the enclosing function or global scope. </p>

### Function Expression: ###
<p>However, function expressions are not hoisted. The reason is because only the variable, foo, in the example JavaScript file is moved to the top of the scope. However, The assignment to the function is NOT moved to the top by the JS interpreter</p>

## JSONP ##
Listed two examples about the usage of JSONP.  

## Keyword "this" ## 
### Global context: ###
<p>In the <b>global execution context</b> (outside of any function), "this" refers to the global object <b>whether in strict mode or not</b>.</p>

### Function context: ###
<p>Inside a function, the value of "this" depends on how the function is called. <b>(Whether the function is called directly or as a method or property of an object.)</b></p>
<div>When code is <b>NOT</b> in strict mode:</div>
<ul>
  <li>The value of "this", when "this" is not inside of a declared object, is the global object.</li>
  <li>When "this" is inside of a declared object, The value of keyword "this" will always be the closest parent object!</li>
</ul>
<div>When code is in strict mode:</div>
<ul>
  <li>The value of this remains at whatever it was set to when entering the execution context.</li>
  <li>If this was not defined by the execution context, it remains <b>undefined.</b></li>
</ul>
  

