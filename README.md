# Tricky-Stuff-In-JavaScript
Deal with the tricky stuff, like "this" Keyword, OOP, in JavaScript.  
  
## CSS Selector  
<strong>.selector #selector</strong>
<ul>
  <li>space for the children.  </li>
  <li>elements matched by the second selector are selected if they have an ancestor element matching the first selector.</li>
</ul>  
<strong>.selector#selector</strong>
<ul>
  <li>no space for the same level structure like <div id="selector" class="selector"/></li>
</ul>
<strong>.selector > #selector</strong>
<ul>
  <li>'>' for the first level children.</li>
</ul>  

## Keyword "this"  
<div>In the <b>global execution context</b> (outside of any function), "this" refers to the global object <b>whether in strict mode or not</b>.</div>
<div>When code is <b>NOT</b> in strict mode':</div>
<ul>
  <li>The value of "this", when "this" is not inside of a declared object, is the global object.</li>
  <li>When "this" is inside of a declared object, The value of keyword "this" will always be the closest parent object!</li>
</ul>
<div>When code is in strict mode':</div>
<ul>
  <li>The value of this remains at whatever it was set to when entering the execution context,</li>
  <li>If this was not defined by the execution context, it remains undefined.</li>
</ul>
  
## JSONP
Listed two examples about the usage of JSONP.  
