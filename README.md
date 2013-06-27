The Real-Time Notification Server
=========

Very lightweight and handy pub-sub mechanism for your realtime notification system.

Version
-

1.0.1

Tech
-----------

Dillinger uses a number of open source projects to work properly:

* node.js - evented I/O for the backend
* socket.io - makes realtime apps possible in every browser and mobile device
* redis.io - key-value store with pub-sub
* php - general-purpose, easy to use scripting language 
* ♥♥ Love ♥♥

Installation
--------------

```
npm install
node server.js
```
In your browser open,
```
//For JS based publisher (Emitter)
http://localhost/publisher.html

//For PHP based publisher (Redis Pub-Sub)
http://localhost/publisher.html
```

Then open,
```
//default user is 101
http://localhost/client.html

//open another window/browser and enter
http://localhost/client.html?user=102
```

Author
-
Mayur Ahir (http://www.mayurahir.com)

License
-

(The MIT License)

Copyright (c) 2013 eantrix.com <mayur@eantrix.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*Free Software, Fuck Yeah!*