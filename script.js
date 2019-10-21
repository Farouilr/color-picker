function hexFromRGB(r, g, b) {
  var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
  ];
  $.each( hex, function( nr, val ) {
    if ( val.length === 1 ) {
      hex[ nr ] = "0" + val;
    }
  });
  return hex.join( "" ).toUpperCase();
}
function refreshSwatch() {
  var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
  $( "body" ).css( "background-color", "#" + hex );
}
$(function() {
  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    min: 50,
    max: 190,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 115 );
  $( "#green" ).slider( "value", 59 );
  $( "#blue" ).slider( "value", 172 );
});
