function Tumbler( elem ) {
	this.elem = $(elem);
	this.numDigits = this.elem.children().length;
	this.value = 0;
}

Tumbler.prototype.setValue = function( newvalue ) {
	this.value = newvalue;
	this.elem.children('li').each( jQuery.proxy( function( index, item ) {
		 this.setDigitValue( $(item), (newvalue / Math.pow( 10, this.numDigits - index - 1 )) % 10 );
	}, this));
}

Tumbler.prototype.setDigitValue = function( digitElem, value ) {
	$(digitElem).removeClass();
	$(digitElem).addClass( 'digit-' + Math.floor( value % 10 ) );
}
