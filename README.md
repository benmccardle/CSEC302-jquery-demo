# CSEC302-jquery-demo

This is a demo of a vulnerability in jquery versions prior to 3.4.0 that allow for XSS via prototype pollution. The version used for this demo is 2.1.3.

This is CVE: CVE-2019-11358


The function within which the vulnerability lies is jQuery.extend()/jQuery.fn.extend() - this function is intended to merge two or more objects together into a single object.

The issue is caused by a single line of code (line 213 in 2.1.3) that fails to perform a necessary check of the value of "target" which is a variable that gets assigned based on user input in line 179.








JS Break/continue:
In JavaScript, a loop can be broken out of using either "break" or "continue". The difference being that break will terminate the loop and continue will skip the current iteration.






Additional resources:
https://security.snyk.io/vuln/SNYK-JS-JQUERY-567880
https://portswigger.net/daily-swig/prototype-pollution-the-dangerous-and-underrated-vulnerability-impacting-javascript-applications

https://github.com/jquery/jquery/pull/4333




-create an object in the code (variable) like this:

  let customer = {name: "person", address: "here"}
  console.log(customer.toString())
  //output: "[object Object]"

-create a text input box to allow someone to update a value of that object (send the evil payload here)
-use the extend feature to extend that object into another object that is created
-watch the prototype pollution allow for code execution
