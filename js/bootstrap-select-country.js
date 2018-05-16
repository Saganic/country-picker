import countries from "i18n-iso-countries";

import langs_en from "i18n-iso-countries/langs/en.json";
countries.registerLocale(langs_en);
const langCountries = countries.getNames('en');

const allCountries = Object.keys(langCountries).map((code) => {
	return {
		name: langCountries[code],
		code: code
	};
});

let countrypicker = function(opts) {
	var countryInputs = $(this);
	var countryList = "";

	$(this).each(function(index, select) {
		var $select = $(select);

		var flag = $select.data('flag');

		var options = [];
		if (flag) {
				//for each build list with flag
				$.each(allCountries, function (index, country) {
					var flagIcon = `css/flags/${country.code.toLowerCase()}.png`;
					options.push(`<option
						data-country-code="${country.code}"
						data-tokens="${country.code} ${country.name}"
						style='padding-left:25px;background-position: 4px 7px;background-image:url("${flagIcon}");background-repeat:no-repeat;'
						value="${country.name}">${country.name}</option>`);
				});

				//add flags to button
				$select.on('loaded.bs.select', function (e) {
					var button = $(this).closest('.btn-group').children('.btn');
					button.hide();
					var selected = $(this).find(':selected');
					if (selected && selected.length) {
						var def = selected.data('country-code').toLowerCase();
						var flagIcon = "css/flags/" + def + ".png";
						button.css("background-size", '20px');
						button.css("background-position", '10px 9px');
						button.css("padding-left", '40px');
						button.css("background-repeat", 'no-repeat');
						button.css("background-image", "url('" + flagIcon + "'");
					}
					button.show();
				});

				//change flag on select change
				$select.on('change', function () {
					var button = $(this).closest('.btn-group').children('.btn');
					var selected = $(this).find(':selected');
					if (selected && selected.length) {
						var def = selected.data('country-code').toLowerCase();
						var flagIcon = "css/flags/" + def + ".png";
						button.css("background-size", '20px');
						button.css("background-position", '10px 9px');
						button.css("padding-left", '40px');
						button.css("background-repeat", 'no-repeat');
						button.css("background-image", "url('" + flagIcon + "'");
					}
				});
		} else {
			//for each build list without flag
			$.each(allCountries, function (index, country) {
				options.push(`<option
					data-country-code="${country.code}
					data-tokens="${country.code} ${country.name}"
					value="${country.name}">${country.name}</option>`);
			});
		}
		$select.html(options.join('\n'));

		//check if default
		var def = $select.data('default');
		//if there's a default, set it
		if (def) {
			$select.val(def);
		}
	});
};

/* extend jQuery with the countrypicker function */
$.fn.countrypicker = countrypicker;

/* initialize all countrypicker by default. This is the default jQuery Behavior. */
$('.countrypicker').countrypicker();

/* return the countrypicker function for use as a module. */
export default countrypicker;
