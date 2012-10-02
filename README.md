slanglog
========

INFO, WARN and ERROR are so 1990. Say hi to FYI, OMG and WTF. Not to mention FAIL and EPICFAIL.

Usage
-----
This is very straightforward.

```javascript
    var logger   = Slanglog();                      // Create the logger
    logger.level = logger.Levels.OMG;               // Set the logging level
    logger.omg( "something is wrong" );             // Log
```

Logging levels
------------------------

The available logging types FYI, OOPS, OMG, WTF, FAIL, EPICFAIL. Default is WTF.
