## bootstrap-select-country

**based on the popular [bootstrap-select](https://silviomoreto.github.io/bootstrap-select/)**
![bootstrap-select-country examples](https://preview.ibb.co/dJ7sA6/Screen_Shot_2017_11_19_at_14_52_35.png)


bootstrap-select-country is a jQuery plugin that utilizes Bootstrap's dropdown.js and bootstrap-select to provide country data and styling to standard select elements.

## Dependencies

- [jQuery v1.8.0+](https://jquery.com)
- [Bootstrap 3 and its CSS](https://getbootstrap.com/docs/3.3/)
- [bootstrap-select](https://developer.snapappointments.com/bootstrap-select/)


## Usage

Create your `<select>` with the `.selectpicker` and `.countrypicker` class. The data-api from bootstrap-select will automatically apply a basic theme to these elements. Then the data-api from countrypicker will populate the select with countries.

```html
<select class="selectpicker countrypicker"></select>
```

### Minimal example

Here is a [minimal example](https://jsbin.com/xacuyin/edit?html,output):

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Bin</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  
  <link rel="stylesheet" href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="//unpkg.com/bootstrap-select@1.12.4/dist/css/bootstrap-select.min.css" type="text/css" />
  <link rel="stylesheet" href="//unpkg.com/bootstrap-select-country@4.0.0/dist/css/bootstrap-select-country.min.css" type="text/css" />

  <script src="//unpkg.com/jquery@3.4.1/dist/jquery.min.js"></script>
  <script src="//unpkg.com/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  <script src="//unpkg.com/bootstrap-select@1.12.4/dist/js/bootstrap-select.min.js"></script>
  <script src="//unpkg.com/bootstrap-select-country@4.0.0/dist/js/bootstrap-select-country.min.js"></script>
  
</head>
<body>
  <select class="selectpicker countrypicker" data-flag="true" ></select>

  <script>
    $('.countrypicker').countrypicker();
  </script>
  
</body>
</html>
```

## Copyright and license

Copyright (C) 2017-2018 country-picker

Licensed under [the MIT license](LICENSE).

## FAQ
### Bootstrap 4 beta-2

Bootstrap-select is still incompatible (ver. 1.12.4) with Bootstrap 4 beta-2.
Include an additional CSS file, or put the following between <style></style> tags on the page you're displaying the country-picker on:

```css
/*
Make bootstrap-select work with bootstrap 4 see:
https://github.com/silviomoreto/bootstrap-select/issues/1135
*/
.dropdown-toggle.btn-default {
  color: #292b2c;
  background-color: #fff;
  border-color: #ccc;
}
.bootstrap-select.show > .dropdown-menu > .dropdown-menu {
  display: block;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li.hidden {
  display: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a {
  display: block;
  width: 100%;
  padding: 3px 1.5rem;
  clear: both;
  font-weight: 400;
  color: #292b2c;
  text-align: inherit;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  text-decoration: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a:hover {
  background-color: #f4f4f4;
}
.bootstrap-select > .dropdown-toggle {
  width: 100%;
}
.dropdown-menu > li.active > a {
  color: #fff !important;
  background-color: #337ab7 !important;
}
.bootstrap-select .check-mark {
  line-height: 14px;
}
.bootstrap-select .check-mark::after {
  font-family: "FontAwesome";
  content: "\f00c";
}
.bootstrap-select button {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Make filled out selects be the same size as empty selects */
.bootstrap-select.btn-group .dropdown-toggle .filter-option {
  display: inline !important;
}
```
