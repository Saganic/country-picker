



# countrypicker

#### based on the popular [bootstrap-select](https://silviomoreto.github.io/bootstrap-select/)

<a href="https://ibb.co/mmeiHm"><img src="https://preview.ibb.co/dJ7sA6/Screen_Shot_2017_11_19_at_14_52_35.png" alt="Screen_Shot_2017_11_19_at_14_52_35" border="0" width="100%"></a>


countrypicker is a jQuery plugin that utilizes Bootstrap's dropdown.js and bootstrap-select to provide country data and styling to standard select elements.



# Dependencies


Requires jQuery v1.8.0+, Bootstrap’s dropdown.js component, and Bootstrap's CSS. If you're not already using Bootstrap in your project, a precompiled version of the minimum requirements can be downloaded [here.](http://getbootstrap.com/customize/?id=7830063837006f6fc84f)



# Usage


Create your `<select>` with the `.selectpicker` and `.countrypicker` class. The data-api from bootstrap-select will automatically apply a basic theme to these elements. Then the data-api from countrypicker will populate the select with countries.



    <select class="selectpicker countrypicker"></select>


# Examples



#### Data Default

Set default country

    data-default="United States"



#### Live Search

Searchable with bootstrap-select.js

    data-live-search="true"



#### With Flag

Searchable, data default with flags

    data-flag="true"
