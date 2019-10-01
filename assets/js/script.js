$( function()
  {    
    // topnav click event
    $('ul.nav a, #brand, div.circle-white, a.button-black' ).bind( 'click',
      function( event )
      {
        var that = $( this );

        $( '[data-spy="scroll"]' ).each( 
        function()
        {
          var spy = $( this ).scrollspy( 'refresh' )
        } );
        
        var offset = 140;
        
        // if window width is smaller than 979px, don't add offset
        if( $( window ).width() < 979 )
        {
          offset = 0;
        }

        $( 'html, body' ).stop().animate(
        {
          scrollTop: $( that.attr( 'href' ) ).offset().top - offset
        },
        1000,
        'easeInOutExpo'
        );

        event.preventDefault();
      } );
  } );