# CSEC302-jquery-demo

This is a demo of a vulnerability in jquery versions prior to 3.4.0 that can allow for XSS via prototype pollution. The version used for this demo is 2.1.3.

This is: CVE-2019-11358

The function within which the vulnerability lies is jQuery.extend()/jQuery.fn.extend() - this function is intended to merge two or more objects together into a single object.

The issue is caused by a single line of code (line 213 in 2.1.3) that fails to perform a necessary check before it allows the program to copy the data from one object to another. 

On line 213, the existing check determines if the current value being considered needs to be copied into the object that is being extended to. The code that follows this check carries out the copy. 

What's missing is a verification that the object that is being copied to is not the __proto__ attribute/object. Without checking for this, it is possible for the method to write to __proto__ unintentionally.

In the fixed version of this method, the check includes checking to see if the "name" variable is equal to __proto__. If it is, that iteration is skipped (a single iteration is skipped with JS continue), meaning that anything intended to alter __proto__ does not go through. 

XSS:
An issue with prototype pollution is the fact that it can result in XSS. if for any reason the developers of an application decided to use the JS eval() function on an attribute that could have been altered due to prototype pollution, XSS is possible.  

------------------------------------------------------------------------

Unfortunately, the code found in both the vulnerable and fixed pages do not properly exploit the vulnerability. They do demonstrate the effects of the vulnerability though, they just weren't achieved via the actual vulnerability. 

Resources on this issue: 
https://security.snyk.io/vuln/SNYK-JS-JQUERY-567880
https://portswigger.net/daily-swig/prototype-pollution-the-dangerous-and-underrated-vulnerability-impacting-javascript-applications
https://www.geeksforgeeks.org/jquery-extend-method/
https://github.com/jquery/jquery/pull/4333
https://bugzilla.redhat.com/show_bug.cgi?id=1701972
