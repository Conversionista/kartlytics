/* global $, gapi, swal */

var endpoint = 'https://api.conversionista.se/gapi/',
    clientId = '188686649588-pemricr51lakml69hcab3klrjcorb7hg.apps.googleusercontent.com',
    scopes = 'profile email phone',
    auth2;

window.aboutMe = window.aboutMe || {};

function handleClientLoad() {
    'use strict';
    // Load the API client and auth library
    gapi.load('client:auth2', initAuth);
}

function initAuth() {
    'use strict';
    gapi.auth2.init({
        client_id: clientId,
        scope: scopes
    }).then(function() {
        auth2 = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        auth2.isSignedIn.listen(updateSigninStatus);
        // Handle the initial sign-in state.
        updateSigninStatus(auth2.isSignedIn.get());

    });
}

function updateSigninStatus(isSignedIn) {
    'use strict';
    if (isSignedIn) {
        $('.container').hide();
        var me = auth2.currentUser.get();
        
        
        aboutMe.fname = me.getBasicProfile().getGivenName();
        aboutMe.lname = me.getBasicProfile().getFamilyName();
        aboutMe.email = me.getBasicProfile().getEmail();
        
        registerPlayer(aboutMe.email, aboutMe.fname, aboutMe.lname);

        var firstName = me.getBasicProfile().getGivenName();
        var id_token = me.getAuthResponse().id_token;

        
        $('.container').show();

        verifyUser(id_token, firstName);

        // console.log(id_token);

    } else {
        $('.container').hide();
        swal({
            title: '👋 Well hello there',
            text: 'Please sign in with your Google account to register as a player.',
            type: 'info',
            html: true,
            showConfirmButton: true
        }, function(event) {
            handleAuthClick(event);
        });
    }
}

function handleAuthClick(event) {
    'use strict';
    auth2.signIn();
}

function handleSignoutClick(event) {
    'use strict';
    auth2.signOut();
}

function verifyUser(token, name) {
    'use strict';
    var xhr = $.ajax({
        url: endpoint + '?verifyUser=' + token
    });

    xhr.done(function(data) {

        if (data.hasOwnProperty('error_description')) {
            swal({
                title: 'Error',
                text: data.error_description,
                type: 'error',
                // timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true
            });
        } else {

            var title = (name !== undefined && name.length !== 0) ? 'Hello ' + name + '!' : 'Hello!';
            swal({
                title: title,
                text: 'You are all set – <b>Best of luck!</b>',
                type: 'success',
                timer: 2000,
                html: true,
                allowEscapeKey: true,
                allowOutsideClick: true,
                showConfirmButton: false
            });
            $('.container').show();

        }

    });

    xhr.fail(function(data) {
        console.info(data);
        swal({
            title: '😔 Bad news...',
            text: 'Something broke behind the scenes. Please reload the page or try again later. Check the console for more details.',
            type: 'error',
            // timer: 2000,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: true
        });
    });
}