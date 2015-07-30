/*shimThis.js - by Danieltamkin*/
/*shim an element ontop of another element*/
(function( $ ) {
	$.fn.shimThis = function($data) {
		$this = $(this);
		data($data);
		function data(data){
			if(data == undefined){
				$data = dataTemplate();
			}
			else{
				if(data.ontop == undefined && data.offset == undefined){
					$data = dataTemplate();
				}
				else{
					$data = data;
				}
			}
		}
		function dataTemplate(){
			$data = {
				ontop: 'null',
				offset: '0'
			}
			return $data;
		}
		function calculate(){
			if($data.ontop != "null"){
				var elementHeight 		= $this.height(),
						ontopHeight 			= $($data.ontop).height(),
						elementShim 			= 0;
			  if($data.offset == "0"){
					$data.offset = "25%";
				}
				$ontop = $($data.ontop);
				$this.css("z-index","999");
				$this.css("margin-top","-"+$data.offset);
				console.log("shimThis: Calculation Complete");
			}
			else{
				console.log("shimThis: Error no ontop element to calculate.");
			}
		}
		return this.each(function() {
			calculate();
			$(window).resize(function() {
				calculate();
			});
		});
  };
}( jQuery ));
