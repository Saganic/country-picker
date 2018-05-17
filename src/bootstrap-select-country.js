import $ from 'jquery';

import "world-flags-sprite/stylesheets/flags16.css";
import "./bootstrap-select-country.css";

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
	$(this).each(function(index, select) {
		var $select = $(select);

		var flag = $select.data('flag');

		var options = [];
		if (flag) {
				/* create option for each existing country */
				$.each(allCountries, function (index, country) {
					options.push(`<option
						data-tokens="${country.code}"
						class="option-with-flag"
						value="${country.code}">${country.name}</option>`);
				});

				/* after bootstrap-select finished loading add flogs to every option-btn */
				$select.on('loaded.bs.select', function (e) {
					$('a.option-with-flag').each(function() {
						var $optionBtn = $(this);
						if ($optionBtn.children('.inline-flag').length <= 0) {
							var code = $optionBtn.data('tokens').toLowerCase();
							var $flag = $(`<span class="inline-flag flag ${code}"></span>`);
							$optionBtn.prepend($flag);
						}
					});
				});

				/* after bootstrap-select finished loading or selection changed add flag to the select btn */
				$select.on('loaded.bs.select change', function (e) {
					/* which country-codes are selected? */
					var $selectedOptions = $(this).find(':selected');
					var countrycodes = [];
					$selectedOptions.each(function() {
						countrycodes.push($(this).data('tokens').toLowerCase());
					});

					var $btn = $(this).parent().find('.btn .filter-option.pull-left');
					$btn.removeClass().addClass('filter-option pull-left');

					/* for now only show the flag if only one country is selected */
					if (countrycodes.length === 1) {
						countrycodes.forEach((countrycode) => {
							$btn.addClass(`flag ${countrycode}`);
						 });
					}
				});
		} else {
			//for each build list without flag
			$.each(allCountries, function (index, country) {
				options.push(`<option
					data-countrycode="${country.code}
					data-tokens="${country.code} ${country.name}"
					value="${country.code}">${country.name}</option>`);
			});
		}

		$select
			.addClass('f16')
			.html(options.join('\n'));

		//check if default
		var defaultCountryName = $select.data('default');
		//if there's a default, set it
		if (defaultCountryName) {
			$select.val(defaultCountryName.split(',').map((v) => v.trim()));
		}
	});
};

/* extend jQuery with the countrypicker function */
$.fn.countrypicker = countrypicker;

/* initialize all countrypicker by default. This is the default jQuery Behavior. */
$('.countrypicker').countrypicker();

/* return the countrypicker function for use as a module. */
export default countrypicker;
