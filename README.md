# shimThis.js
a simple jQuery plugin to "Shim" an element onto another.

![preview of shimThis in action](screenshots/shimThis.jpg)
[_(demo)_](http://danieltamkin.github.io/shimThis.js/)
### Settings

ontop: _element to be shimmed on_
```
$("section.shim").shimThis({
  ontop: 'header.site',
});
```
offset: _offset of shim_
```
$("#site-shim").shimThis({
  offset: '400px',
});
```

_can be combined_
```
<script>
  $offset = $("section.shim article").first().outerHeight()/2;
  $("section.shim").shimThis({
    ontop: 'header.site',
    offset: $offset+'px'
  });
</script>
```
