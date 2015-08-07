# Meteor Responsive Bootstrap Toolkit
---

This package is a meteor adaptation from [maciej-gurban:responsive-bootstrap-toolkit link].

#### Installation

```
meteor add coladaff:bootstrap-toolkit
```

#### Usage

After adding it, to use it in very simple; in the [original package link] you would have to do it like this: 

```javascript
(function($, viewport){
 // Your stuff here...
})(jQuery, ResponsiveBootstrapToolkit);
```

But, with this package you only have to create a variable and assign the function to it, like this:

```javascript
// Since meteor has Jquery ($) out of the box...
var viewport = ResponsiveBootstrapToolkit($);
// And then you can do anything that the original package provide, like: 
console.log("New one", viewport.current());
```

