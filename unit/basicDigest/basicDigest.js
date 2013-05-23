(function( $ ) {

module( "Digest" );

var digestAuth = AeroGear.Auth({
        name: "digest",
        type: "BasicDigest",
        settings: {
            authCallback: function( loginMethod ) {
                loginMethod( "agnes", "123" );
            }
        }
    }).modules.digest,
    digestPipe = AeroGear.Pipeline({
        name: "digest",
        settings: {
            baseURL: "https://corscontroller-aerogear.rhcloud.com/aerogear-controller-demo/",
            endpoint: "autobots",
            authenticator: digestAuth
        }
    }).pipes.digest;

asyncTest( "AeroGear Controller - Autobot Digest Auth", function() {
    expect( 3 );

    digestPipe.read({
        success: function( data, textStatus, jqXHR ) {
            ok( data.length, "Read success from endpoint with digest auth" );
        }
    });
});

})( jQuery );
