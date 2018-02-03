jQuery( function( ) {

    // @formatter:off
	var l2b = {
		$input : jQuery( '.label2border input, .label2border textarea' ),
		$this  : ''
	};
	// @formatter:on

    /*
     * Function label2border
     * 
     * This functions transfers the typed values (per character) in the
     * value-attribute
     *********************************************************************************/
    function label2border( ele ) {
        l2b.$this = ele;
        l2b.$this.attr( 'value', l2b.$this.val( ) );
    }

    /*
     * Initial check
     *********************************************************************************/
    l2b.$input.each( function( ) {
        var $this = jQuery( this );
        $this.attr( 'value' );
        label2border( $this );
    } );

    /*
     * Keyup check
     *********************************************************************************/
    l2b.$input.keyup( function( ) {
        label2border( jQuery( this ) );
    } );

} );