slanglog
========

INFO, WARN and ERROR are so 1990. Say hi to FYI, OMG and WTF. Not to mention FAIL and EPICFAIL.

Usage
-----
This is very straightforward. Import [slanglog.js](https://github.com/harith/slanglog/downloads) and 

```javascript
    slanglog.level = slanglog.Levels.OMG;       // Set a logging level
    slanglog.omg( "something is wrong" );       // Log
```

This will log

```
    OMG : something is wrong
```

Options
-------

You can optionally add logging methods to the global namespace by calling

```javascript
    slanglog.pollute();
```

Now, instead of 

```javascript
    slanglog.wtf( "this shouldn't be happening!" );
```

you can do,

```javascript
    wtf( "this shouldn't be happening!" );
```

*Breath some life into your code.*


Logging levels
------------------------

The available logging types FYI, OOPS, OMG, WTF, FAIL, EPICFAIL. Default is WTF.
