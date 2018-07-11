$(function() {
	$('textarea#left').on('paste keyup change', function(event) {
		if(event.originalEvent.clipboardData){
			setTimeout(function(){
				base64Encode();
			},100);
		}
		else {
			base64Encode();
		} 
	});

	$('textarea#right').on('paste keyup change', function(event) {
		if(event.originalEvent.clipboardData){
			setTimeout(function(){
				$('textarea#left').val(btoa($('textarea#right').val()));
			},100);
		}
		else {
			$('textarea#left').val(btoa(this.value));
		} 
		//base64 is always valid here
		$('textarea#left').css('color', 'black');
	});
});

function base64Encode(){
	try {
		$('textarea#right').val(atob($('textarea#left').val()));
		// valid base64
		$('textarea#left').css('color', 'black');
	} catch (e) {
		// invalid base64
		$('textarea#left').css('color', 'red');
	}
}
