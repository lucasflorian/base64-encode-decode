$(function() {
	$('textarea#left').on('keyup', function() {
		if (this.value.length) {
			try {
				$('textarea#right').val(atob(this.value));
				$('textarea#left').css('color', 'black');
			} catch (e) {
				$('textarea#left').css('color', 'red');
			}
		} else {
			$('textarea#right').empty();
		}
	});


	$('textarea#right').on('keyup', function() {
		if (this.value.length) {
			$('textarea#left').val(btoa(this.value));
				$('textarea#left').css('color', 'black');
		} else {
			$('textarea#left').empty();
		}
	});
});
