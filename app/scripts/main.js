/* global $, swal, WebFont */

/* Data to be populated in the select boxes... */
var players = [{
    'email': 'andreas.almqvist@conversionista.se',
    'fname': 'Andreas',
    'lname': 'Almqvist Gref',
    'nick': 'AG'
}, {
    'email': 'andreas@conversionista.se',
    'fname': 'Andreas',
    'lname': 'Nordin',
    'nick': ''
}, {
    'email': 'birgitta@conversionista.se',
    'fname': 'Birgitta',
    'lname': 'Nordström',
    'nick': 'Gitte'
}, {
    'email': 'carl@conversionista.se',
    'fname': 'Carl',
    'lname': 'Muszynski',
    'nick': 'Musse'
}, {
    'email': 'elin@conversionista.se',
    'fname': 'Elin',
    'lname': 'Linde',
    'nick': ''
}, {
    'email': 'erik@conversionista.se',
    'fname': 'Erik',
    'lname': 'Öhlén',
    'nick': ''
}, {
    'email': 'fredrik@conversionista.se',
    'fname': 'Fredrik',
    'lname': 'Degerman',
    'nick': 'Degis'
}, {
    'email': 'hannah@conversionista.se',
    'fname': 'Hannah',
    'lname': 'Kransell',
    'nick': ''
}, {
    'email': 'jens@conversionista.se',
    'fname': 'Jens',
    'lname': 'Svensson',
    'nick': ''
}, {
    'email': 'john@conversionista.se',
    'fname': 'John',
    'lname': 'Ekman',
    'nick': 'Chief Conversionista'
}, {
    'email': 'jonathan@conversionista.se',
    'fname': 'Jonathan',
    'lname': 'Kuronen',
    'nick': ''
}, {
    'email': 'kajsa@conversionista.se',
    'fname': 'Kajsa',
    'lname': 'Hedqvist',
    'nick': ''
}, {
    'email': 'katja@conversionista.se',
    'fname': 'Katja',
    'lname': 'Shershneva',
    'nick': ''
}, {
    'email': 'kim@conversionista.se',
    'fname': 'Kim',
    'lname': 'Dahlroth',
    'nick': ''
}, {
    'email': 'magnus@conversionista.se',
    'fname': 'Magnus',
    'lname': 'Svanblom',
    'nick': ''
}, {
    'email': 'maria@conversionista.se',
    'fname': 'Maria',
    'lname': 'Granath',
    'nick': ''
}, {
    'email': 'marie.edlund@conversionista.se',
    'fname': 'Marie',
    'lname': 'Edlund',
    'nick': ''
}, {
    'email': 'marie@conversionista.se',
    'fname': 'Marie',
    'lname': 'Horneman',
    'nick': ''
}, {
    'email': 'martin@conversionista.se',
    'fname': 'Martin',
    'lname': 'Lundvall',
    'nick': ''
}, {
    'email': 'niclas@conversionista.se',
    'fname': 'Niclas',
    'lname': 'Lundberg',
    'nick': ''
}, {
    'email': 'osborne@conversionista.se',
    'fname': 'Osborne',
    'lname': 'von Waldegg',
    'nick': ''
}, {
    'email': 'patrik@conversionista.se',
    'fname': 'Patrik',
    'lname': 'Matell',
    'nick': 'cyk0'
}, {
    'email': 'peter@conversionista.se',
    'fname': 'Peter',
    'lname': 'Jacobson',
    'nick': ''
}, {
    'email': 'sarah@conversionista.se',
    'fname': 'Sarah',
    'lname': 'Hoof',
    'nick': 'hoof1337'
}, {
    'email': 'seif@conversionista.se',
    'fname': 'Seif',
    'lname': 'Fendukly',
    'nick': ''
}, {
    'email': 'simon@conversionista.se',
    'fname': 'Simon',
    'lname': 'Dahla',
    'nick': ''
}];

var cups = [{
    'cup': 'Mushroom'
}, {
    'cup': 'Flower'
}, {
    'cup': 'Star'
}, {
    'cup': 'Special'
}, {
    'cup': 'Shell'
}, {
    'cup': 'Banana'
}, {
    'cup': 'Leaf'
}, {
    'cup': 'Lightning'
}];

var modes = [{
    'mode': 50
}, {
    'mode': 100
}, {
    'mode': 150
}, {
    'mode': 200
}];

var scores = [{
    'rank': 1,
    'score': 15
}, {
    'rank': 2,
    'score': 12
}, {
    'rank': 3,
    'score': 10
}, {
    'rank': 4,
    'score': 9
}, {
    'rank': 5,
    'score': 8
}, {
    'rank': 6,
    'score': 7
}, {
    'rank': 7,
    'score': 6
}, {
    'rank': 8,
    'score': 5
}, {
    'rank': 9,
    'score': 4
}, {
    'rank': 10,
    'score': 3
}, {
    'rank': 11,
    'score': 2
}, {
    'rank': 12,
    'score': 1
}];
/* * * * * * * * * * * * * * * * */


/* 
* Helper functions/stuff
*/
/* Inits' the webfont loader in order to get some nice fonts from TypeKit */
WebFont.load({
    typekit: { id: 'fvc2tgi' }
});
/* Mixpanel config - set to not save cookies in the users browser since it's irrelevant in this case... */
mixpanel.set_config({
    // Update the configuration of a mixpanel library instance. The default config is:
    // super properties span subdomains
    cross_subdomain_cookie: true,

    // super properties cookie name
    cookie_name: '',

    // super properties cookie expiration (in days)
    cookie_expiration: 365,

    // should we track a page view on page load
    track_pageview: false,

    // the amount of time track_links will
    // wait for Mixpanel's servers to respond
    track_links_timeout: 300,

    // if this is true, the mixpanel cookie will be deleted,
    // and no user persistence will take place
    disable_cookie: true,

    // if this is true, the mixpanel cookie will be marked as
    // secure, meaning it will only be transmitted over https
    secure_cookie: true,

    // if you set upgrade to be true, the library will check for a
    // cookie from our old js library and import super
    // properties from it, then the old cookie is deleted
    // The upgrade config option only works in the initialization,
    // so make sure you set it when you create the library.
    upgrade: false
});
/* Used by selectize to format name */
var formatName = function(item) {
    'use strict';
    return $.trim((item.fname || '') + ' ' + (item.lname || ''));
};
/* Generates a unique ID for every new game, have to be called every time before the user clicks the button / sends data to mixpanel */
function gameIdGenerator() {
    'use stirct';
    /**
    * @return {string}
    */
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}

/* Generates a user ID from the user's email address, first converted to numbers, then to a short youtube-style-id (looks cool & saves space(?) ) */
function generateUserId(email) {
    'use stirct';
    /**
     * @see http://stackoverflow.com/q/7616461/940217
     * @return {number}
     */
    String.prototype.hashCode = function() {
        if (Array.prototype.reduce) {
            return this.split('').reduce(function(a, b) {
                a = ((a << 5) - a) + b.charCodeAt(0);
                return a & a
            }, 0);
        }
        var hash = 0;
        if (this.length === 0) return hash;
        for (var i = 0; i < this.length; i++) {
            var character = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    var hashids = new Hashids(),
        id = email.hashCode();
    id = Math.abs(id);


    return hashids.encode(id);
}

/* Variables */
var nameField = $('#name'),
    grandPrixField = $('#grandPrix'),
    modeField = $('#mode'),
    rankField = $('#rank'),
    submitButton = $('#submit'),
    playerEmails = $('[name="email"]'),
    playerRanks = $('[name="rank"]'),
    gameId = gameIdGenerator(),
    dateTime = new Date().toISOString(),
    REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' + '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

window.aboutMe = window.aboutMe || {};
/* * * * * * * * * * * * * * * * */

/* 
* Main stuff
*/
/* Fucntion to send data to mixpanel about the user who logs in */
function registerPlayer(email, fname, lname) {
    'use stirct';
    console.info('user registerd');
    mixpanel.identify(generateUserId(email));
    mixpanel.people.set({
        '$first_name': fname,
        '$last_name': lname,
        '$email': email,
        '$ip': geoplugin_request(),
        'Last login': dateTime
    });

    mixpanel.people.set_once({
        'First Game': dateTime
    });
}

/* Function to track every */
function trackGame(gid, email, cup, score, mode) {
    'use stirct';
    console.info('game registerd');
    mixpanel.identify(generateUserId(email));
    console.log(score);

    score = parseInt(score);

    if (score === 15) { mixpanel.people.increment('Gold Medals'); }
    if (score === 12) { mixpanel.people.increment('Silver Medals'); }
    if (score === 10) { mixpanel.people.increment('Bronze Medals'); }

    mixpanel.people.increment('Total Score', score);
    mixpanel.people.increment('Games Played');
    mixpanel.people.track_charge(score * mode);

    mixpanel.track('Grand Prix', {
        'Game ID': gid,
        'distinct_id': generateUserId(email),
        'Cup': cup,
        'Score': score,
        'Mode': mode
    });
}

/* Function to check if user field values are set and throw error messages if not */
function checkUserValues() {
    'use strict';
    var cup = grandPrixField.val();
    var mode = modeField.val();
    var emails = [];
    var scores = [];
    var errorMsg = '';

    $('.player').each(function(index, el) {
        var email = $(playerEmails[index]).val();
        var score = $(playerRanks[index]).val();

        if (email.length === 0 && score.length === 0) {


        } else if (email.length !== 0 && score.length !== 0) {
            // console.log('push data');

            if (emails.indexOf(email) === -1 && scores.indexOf(score) === -1) {

                // console.log(emails.indexOf(email))
                // console.log(scores.indexOf(score))
                // console.log('push');
                emails.push(email);
                scores.push(score);

            } else {
                errorMsg = '👻 <b>Sneaky there</b>, you can\'t register duplicates';

            }

        } else {
            errorMsg = '💤 <b>Bummer</b>, it appears you left at least one field empty';

        }

    });
    if (emails.length !== 0) {
        if (errorMsg !== '') {
            swal({
                type: 'warning',
                title: 'Mate, please...',
                text: errorMsg,
                html: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Ok, lets try again'
            });
        } else {
            swal({
                    title: 'Are you sure?',
                    text: 'You are about to send data to Mixpanel.',
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, send it!',
                    cancelButtonText: 'No, cancel plx!',
                      showCancelButton: true,
                      closeOnConfirm: false,
                      showLoaderOnConfirm: true, 
                }, function() {

                    $(emails).each(function(index, email) {
                        trackGame(gameId, email, cup, scores[index], mode);
                    });
                    /* Reset game id and generate a new time if the user wants to submit another game */
                    gameId = gameIdGenerator();
                    dateTime = new Date().toISOString();
                    setTimeout(function(){
                        swal({
                            title: 'Horray!',
                            text: 'Your scoring was sent to Mixpanel.',
                            type: 'success'
                        });
                    }, 2000);
                    
                    /* Empty all fields after submit */              
                    var $select = $('select').selectize();
                    $.each($select, function(index) {
                        /* iterate through array or object */
                        var control = $select[index].selectize;
                        control.clear();
                    });
                });
        }
    } else {
        swal({
            type: 'warning',
            title: 'Doh!',
            text: 'Obviously you haven\'t filled out anything...',
            html: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Ok, lets try again'
        });
    }
}

/* Function to check if "main" game values are set, if they are, enable the button  */
function checkGameValues() {
    'use stirct';
    var c = grandPrixField.val(),
        m = modeField.val();

    if (c && m) {
        submitButton.attr('disabled', false);
    } else {
        submitButton.attr('disabled', true);
    }
}

/* Renders all select boxes and populates them with values */
function initSelectize() {
    'use strict';

    grandPrixField.selectize({
        maxItems: 1,
        persist: false,
        valueField: 'cup',
        labelField: 'cup',
        searchField: ['cup'],
        options: cups,
        sortField: 'text'
    });

    modeField.selectize({
        maxItems: 1,
        persist: false,
        valueField: 'mode',
        labelField: 'mode',
        searchField: ['mode'],
        options: modes,
        sortField: 'text'
    });
    $(playerEmails).each(function() {
        $(this).selectize({
            persist: false,
            maxItems: 1,
            valueField: 'email',
            labelField: 'name',
            searchField: ['fname', 'lname', 'email', 'nick'],
            sortField: [
                { field: 'fname', direction: 'asc' },
                { field: 'lname', direction: 'asc' }
            ],
            options: players,
            render: {
                item: function(item, escape) {
                    var name = formatName(item);
                    return '<div>' +
                        (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                        (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                        '</div>';
                },
                option: function(item, escape) {
                    var name = formatName(item);
                    var label = name || item.email;
                    var caption = name ? item.email : null;
                    return '<div>' +
                        '<span class="label">' + escape(label) + '</span>' +
                        (caption ? ' <span class="caption">' + escape(caption) + '</span>' : '') +
                        '</div>';
                }
            },
            createFilter: function(input) {
                var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
                var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
                return regexpA.test(input) || regexpB.test(input);
            },
            create: function(input) {
                if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                    return { email: input };
                }
                var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
                if (match) {
                    var name = $.trim(match[1]);
                    var pos_space = name.indexOf(' ');
                    var fname = name.substring(0, pos_space);
                    var lname = name.substring(pos_space + 1);
                    return {
                        email: match[2],
                        first_name: fname,
                        last_name: lname
                    };
                }
                alert('Invalid email address.');
                return false;
            }
        });
    });

    $(playerRanks).each(function() {
        $(this).selectize({
            maxItems: 1,
            persist: false,
            valueField: 'score',
            labelField: 'rank',
            options: scores
        });
    });
}

/* Adds event listeners to fields and buttons */
function initEventListeners() {
    'use strict';
    $(modeField).on('change', function(event) {
        event.preventDefault();
        /* Act on the event */
        checkGameValues();
    });

    $(grandPrixField).on('change', function(event) {
        event.preventDefault();
        /* Act on the event */
        checkGameValues();
    });
    $(submitButton).on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        checkUserValues();
    });
}
/* * * * * * * * * * * * * * * * */

/* 
* When everything is done, get everything rollin'
*/
/* Render select boxes and add event listeners */
initSelectize();
initEventListeners();

// trackGame(gameId, 'simon@conversionista.se', 'Leaf', '6', '100');
// trackGame(gameId, 'kajsa@conversionista.se', 'Leaf', '10', '100');
// trackGame(gameId, 'andreas@conversionista.se', 'Leaf', '7', '100');

// trackGame(gameId, 'simon@conversionista.se', 'Star', '6', '150');
// trackGame(gameId, 'kajsa@conversionista.se', 'Star', '7', '150');
// trackGame(gameId, 'andreas@conversionista.se', 'Star', '6', '150');
// trackGame(gameId, 'jens@conversionista.se', 'Star', '3', '150');