var slanglog = slanglog || {};

(function(app) {

    "use strict";

    /** 
     * Available log levels.
     * The order matters!
     */  
    var logLevels = [ "FYI", "OOPS", "OMG", "WTF", "FAIL", "EPICFAIL" ];

    /** 
     * An enum-esque object for users to access available log levels. 
     * It will look like app: { FYI : 1, OOPS : 2, OMG : 3, …}
     */
    app.Levels = {};
    for ( var i=0; i<logLevels.length; i++ ) {
        app.Levels[logLevels[i]] = i;
    }

    /** 
     * Set a default log level. 
     * Log level can also be set by user externally.
     *
     * example:
     *   slanglog.level = slanglog.Levels.FAIL;
     */
    app.level = app.Levels.WTF;

    var getLogLevelHandler = function( choice ) {
        return function( message ) {
            if ( app.Levels[choice] >= app.level ) {
                console.log( choice + " : " + message );
            }
        };
    };

    /** 
     * Assign handlers for each log level defined above.
     *
     * example:
     *   slanglog.wtf("app is unexpected!");
     */
    function assignHandlersToLogLevels(object) {
        for ( var level in app.Levels ) {
            if ( app.Levels.hasOwnProperty(level) ) {
                object[level.toLowerCase()] = getLogLevelHandler(level);
            }
        }
    }

    assignHandlersToLogLevels(app);

    /** 
     * Allows you to pollute global namespace.
     *
     * Instead of doing this
     *   slanglog.wtf( "something is wrong!" );
     * You can do this
     *   wtf( "something is wrong!" );
     */
    app.pollute = function() {
        assignHandlersToLogLevels(window);
    };

})(slanglog);
