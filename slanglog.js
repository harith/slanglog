function Slanglog() {

    "use strict";

    /** 
     * Available logging levels.
     * The order matters!
     */  
    var definedLoggingLevels = [ "FYI", "OOPS", "OMG", "WTF", "FAIL", "EPICFAIL" ];

    /** 
     * An enum-esque object for users to access available logging levels. 
     * It will look like this: { FYI : 1, OOPS : 2, OMG : 3, …}
     */
    this.Levels = {};
    for ( var i=0; i<definedLoggingLevels.length; i++ ) {
        this.Levels[definedLoggingLevels[i]] = i;
    }

    /** 
     * Set a default logging level. 
     * Logging level can also be set by user externally.
     *
     * example:
     *   var logger   = Slanglog();
     *   logger.level = logger.Levels.FAIL;
     */
    this.level = this.Levels.WTF;

    var getLogLevelHandler = function( choice ) {
        return function( message ) {
            if ( this.Levels[choice] >= this.level ) {
                console.log( choice + " : " + message );
            }
        };
    };

    /** 
     * Assign handlers for each logging level defined above.
     *
     * example:
     *   var logger = Slanglog();
     *   logger.wtf("this is unexpected!");
     */
    for ( var level in this.Levels ) {
        if ( this.Levels.hasOwnProperty(level) ) {
            this[level.toLowerCase()] = getHandlerForLog(level);
        }
    }

}
