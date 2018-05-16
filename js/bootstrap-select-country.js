import countries from "i18n-iso-countries";
import langs_en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(langs_en);
var langCountries = countries.getNames('en');
var allCountries = Object.keys(langCountries).map((code) => {
	return {
		name: langCountries[code],
		code: code
	};
});

let initialize = function(opts) {
  var countryInput = $(this);
  var countryList = "";

    //set defaults
    for (var i = 0; i < countryInput.length; i++) {

        //check if flag
        var flag = countryInput.eq(i).data('flag');

        if (flag) {
            countryList = "";

            //for each build list with flag
            $.each(allCountries, function (index, country) {
                var flagIcon = "css/flags/" + country.code.toLowerCase() + ".png";
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' style='padding-left:25px; background-position: 4px 7px; background-image:url(" + flagIcon + ");background-repeat:no-repeat;' value='" + country.name + "'>" + country.name + "</option>";
            });

            //add flags to button
            countryInput.eq(i).on('loaded.bs.select', function (e) {
                var button = $(this).closest('.btn-group').children('.btn');
                button.hide();
                var def = $(this).find(':selected').data('country-code').toLowerCase();
                var flagIcon = "css/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");
                button.show();
            });

            //change flag on select change
            countryInput.eq(i).on('change', function () {
                var button = $(this).closest('.btn-group').children('.btn');
                var def = $(this).find(':selected').data('country-code').toLowerCase();
                var flagIcon = "css/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");

            });
        }else{
            countryList ="";

            //for each build list without flag
            $.each(allCountries, function (index, country) {
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' value='" + country.name + "'>" + country.name + "</option>";
            });


        }

         //append country list
        countryInput.eq(i).html(countryList);


        //check if default
        var def = countryInput.eq(i).data('default');
        //if there's a default, set it
        if (def) {
            countryInput.eq(i).val(def);
        }


    }

};

$.fn.countrypicker = initialize;

$('.countrypicker').countrypicker();

export default initialize;
